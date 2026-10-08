"""Usage: python3 scripts/import-old-site.py <path-to-thanhtung-website> <path-to-this-repo>

Re-imports blog posts, playbooks, images (as WebP) and PDFs from the old
Astro site (github.com/thanhtungdp/thanhtung-website). Overwrites
content/blog and content/playbooks. Requires Pillow.
"""

import json, os, re, shutil, sys
from PIL import Image

OLD, NEW = sys.argv[1], sys.argv[2]
SRC = os.path.join(OLD, "src")
SKIP = {"first-post", "second-post", "third-post", "markdown-style-guide", "using-mdx"}
MAX_W = 1600
stats = {"images": 0, "bytes_in": 0, "bytes_out": 0, "copied": 0}
cache = {}

def split_fm(raw):
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", raw, re.S)
    return m.group(1), m.group(2)

def parse_fm(fm):
    """Tiny YAML subset: scalars, lists of scalars, lists of flat dicts."""
    data, key, cur = {}, None, None
    for line in fm.splitlines():
        if not line.strip():
            continue
        m = re.match(r"^([A-Za-z]+):\s*(.*)$", line)
        if m:
            key, val = m.group(1), m.group(2).strip()
            data[key] = unq(val) if val else []
            cur = None
            continue
        m = re.match(r"^\s*-\s+([A-Za-z]+):\s*(.*)$", line)
        if m:
            cur = {m.group(1): unq(m.group(2))}
            data[key].append(cur)
            continue
        m = re.match(r"^\s+([A-Za-z]+):\s*(.*)$", line)
        if m and cur is not None:
            cur[m.group(1)] = unq(m.group(2))
            continue
        m = re.match(r"^\s*-\s+(.*)$", line)
        if m:
            data[key].append(unq(m.group(1)))
    return data

def unq(v):
    v = v.strip()
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "'\"":
        v = v[1:-1]
        v = v.replace("''", "'") if v and "'" in v else v
    return v

def asset(rel_from_content, kind):
    """Convert/copy an asset referenced as ../../../assets/... and return its public URL."""
    p = rel_from_content.split("assets/", 1)[1]
    src = os.path.join(SRC, "assets", p)
    if src in cache:
        return cache[src]
    if not os.path.exists(src):
        print("  missing asset:", p)
        cache[src] = None
        return None
    base, ext = os.path.splitext(p)
    ext = ext.lower()
    if ext in (".png", ".jpg", ".jpeg", ".webp"):
        out_rel = base + ".webp"
        out = os.path.join(NEW, "public", out_rel)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        im = Image.open(src)
        im = im.convert("RGBA") if im.mode in ("P", "LA") else im
        if im.width > MAX_W:
            im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
        im.save(out, "WEBP", quality=80, method=6)
        stats["images"] += 1
        stats["bytes_in"] += os.path.getsize(src)
        stats["bytes_out"] += os.path.getsize(out)
    else:
        out_rel = p
        out = os.path.join(NEW, "public", out_rel)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        shutil.copyfile(src, out)
        stats["copied"] += 1
    url = "/" + out_rel
    cache[src] = url
    return url

ASSET_RE = re.compile(r"(?:\.\./)+assets/[^)\s>\"']+")

def rewrite_body(body):
    body = re.sub(r"^import .*$\n?", "", body, flags=re.M)
    body = re.sub(r"<(Agent[A-Za-z]+)[^>]*/>", r'<div data-embed="\1"></div>', body)
    return ASSET_RE.sub(lambda m: asset(m.group(0), "body") or m.group(0), body)

def tags_for(slug, title, loc):
    t = (slug + " " + title).lower()
    if "simplamo" in t:
        return ["Dự án Simplamo"] if loc == "vi" else ["Simplamo case study"]
    if re.search(r"\b(ai|agent|hermes|dify|cursor|gpt|claude)\b", t):
        return ["AI"]
    return ["Chiến lược"] if loc == "vi" else ["Strategy"]

def dump_fm(d):
    out = []
    for k, v in d.items():
        if v is None or v == [] or v == "":
            continue
        out.append(f"{k}: {json.dumps(v, ensure_ascii=False)}")
    return "---\n" + "\n".join(out) + "\n---\n\n"

# ---- Blog ----
for loc in ("vi", "en"):
    dst = os.path.join(NEW, "content", "blog", loc)
    for f in os.listdir(dst):
        os.remove(os.path.join(dst, f))
    n = 0
    for f in sorted(os.listdir(os.path.join(SRC, "content", "blog", loc))):
        slug = re.sub(r"\.mdx?$", "", f)
        if slug in SKIP:
            continue
        fm, body = split_fm(open(os.path.join(SRC, "content", "blog", loc, f), encoding="utf-8").read())
        d = parse_fm(fm)
        cover = asset(d["heroImage"], "hero") if d.get("heroImage") else None
        out = {
            "title": d["title"],
            "description": d.get("description", ""),
            "date": d["pubDate"],
            "updated": d.get("updatedDate"),
            "image": cover,
            "tags": tags_for(slug, d["title"], loc),
        }
        open(os.path.join(dst, slug + ".md"), "w", encoding="utf-8").write(dump_fm(out) + rewrite_body(body).strip() + "\n")
        n += 1
    print(f"blog/{loc}: {n} posts")

# ---- Playbooks ----
extra = {  # categorisation used by the library filters
    "cuoc-tai-thiet-lon-voi-ai-agent": ("AI Agent", "AI Agent", ["CEO", "Quản lý"], ["CEO", "Managers"], "lilac", "arcs", True),
    "tu-product-market-fit-den-tang-truong": ("Tăng trưởng", "Growth", ["Nhà sáng lập", "CEO"], ["Founder", "CEO"], "butter", "steps", False),
    "ai-model-routing-playbook": ("AI Agent", "AI Agent", ["CEO", "Đội vận hành"], ["CEO", "Ops teams"], "sky", "rings", False),
    "ai-agent-playbook-vol01": ("Công cụ", "Tools", ["Nhà sáng lập", "CEO"], ["Founder", "CEO"], "orange", "grid", False),
    "crm-agentic-vs-truyen-thong": ("Bán hàng và CRM", "Sales & CRM", ["Đội kinh doanh", "CEO"], ["Sales teams", "CEO"], "mint", "waves", False),
    "multica-vs-buzz-dossier-01": ("Công cụ", "Tools", ["Nhà sáng lập", "Đội vận hành"], ["Founder", "Ops teams"], "rose", "dots", False),
}
os.makedirs(os.path.join(NEW, "public", "playbooks"), exist_ok=True)
for loc in ("vi", "en"):
    dst = os.path.join(NEW, "content", "playbooks", loc)
    for f in os.listdir(dst):
        os.remove(os.path.join(dst, f))
    for f in sorted(os.listdir(os.path.join(SRC, "content", "playbook", loc))):
        slug = re.sub(r"\.mdx?$", "", f)
        fm, body = split_fm(open(os.path.join(SRC, "content", "playbook", loc, f), encoding="utf-8").read())
        d = parse_fm(fm)
        tv, te, av, ae, tint, pattern, feat = extra[slug]
        pdf = d["pdfFile"]
        shutil.copyfile(os.path.join(OLD, "public", pdf.lstrip("/")), os.path.join(NEW, "public", pdf.lstrip("/")))
        pages = re.search(r"\d+", d.get("pages", ""))
        out = {
            "title": d["title"],
            "description": d.get("description", ""),
            "date": d["publishedDate"],
            "series": d.get("vol"),
            "pages": int(pages.group(0)) if pages else None,
            "pdf": pdf,
            # Covers are generated by BookCover (owner's choice), so coverImage is not imported.
            "summary": d.get("summary"),
            "keyTakeaway": d.get("keyTakeaway"),
            "toc": d.get("toc"),
            "topic": tv if loc == "vi" else te,
            "audience": av if loc == "vi" else ae,
            "tint": tint,
            "cover": pattern,
            "featured": feat or None,
        }
        open(os.path.join(dst, slug + ".md"), "w", encoding="utf-8").write(dump_fm(out) + rewrite_body(body).strip() + "\n")
    print(f"playbooks/{loc}: {len(os.listdir(dst))}")

mb = lambda b: f"{b/1e6:.1f}MB"
print(f"images: {stats['images']} ({mb(stats['bytes_in'])} -> {mb(stats['bytes_out'])}), other files copied: {stats['copied']}")
