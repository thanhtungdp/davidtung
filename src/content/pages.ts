import type { Locale } from "@/i18n/config";

/** Copy for the Hermes (AI Agent) and About pages. */

export const hermesPage: Record<
  Locale,
  {
    eyebrow: string;
    titleA: string;
    titleHighlight: string;
    titleB: string;
    lede: string;
    cta: string;
    pillars: { title: string; body: string }[];
    toolsTitle: string;
    toolsBody: string;
    tools: string[];
    outcomes: string[];
    agentsTitle: string;
    agentsLede: string;
    agents: { dept: string; name: string; role: string; body: string }[];
    compareTitle: string;
    before: { label: string; items: string[] };
    after: { label: string; items: string[] };
    costTitle: string;
    costs: { value: string; label: string }[];
    briefTitle: string;
    brief: string[];
  }
> = {
  vi: {
    eyebrow: "Đội ngũ AI tự chủ cho Solo CEO",
    titleA: "Biến",
    titleHighlight: "việc lặp lại",
    titleB: "thành agent tự chạy trong 4 tuần.",
    lede: "AI giúp bạn viết nhanh hơn. Nhưng vẫn là bạn ngồi làm. Hermes giúp bạn xây một đội AI tự chạy việc lặp lại, tự học mỗi ngày — để bạn vận hành như có cả một phòng ban.",
    cta: "Bắt đầu với Hermes",
    pillars: [
      { title: "Ra lệnh, không thao tác", body: "Một câu qua Telegram. Agent tự tạo báo giá, gửi email, lên content — không cần mở 10 tab." },
      { title: "Việc lặp tự chạy", body: "Mỗi lần xử lý xong một việc, agent tự ghi lại cách làm. Lần sau gặp việc tương tự, nó tự nhớ." },
      { title: "4 tuần, có agent 24/24", body: "Không phải khoá học xem cho biết. Kết thúc là 1–2 agent đang làm việc thật mỗi ngày." },
    ],
    toolsTitle: "Một Hermes — nối mọi công cụ.",
    toolsBody: "Bạn vẫn dùng những tool quen thuộc. Hermes đứng giữa, nối chúng lại — và mỗi ngày, kết quả tự rơi ra.",
    tools: ["Telegram", "Gmail", "Google Sheets", "Facebook", "Canva", "CRM / Zalo"],
    outcomes: ["Bài viết đa nền tảng", "Video ngắn", "Proposal", "Báo giá khách hàng", "Briefing hằng ngày", "Lịch đăng content"],
    agentsTitle: "5 agent. Ít mà sâu.",
    agentsLede: "Mỗi agent là một năng lực thật — đủ để một mình vẫn có cảm giác như đang dẫn cả một team.",
    agents: [
      { dept: "Phòng Sales", name: "Hermès Sales", role: "Trợ lý Báo giá & Email", body: "Tạo báo giá, sinh email, đồng bộ CRM/Excel, làm hợp đồng." },
      { dept: "Phòng Sales", name: "Hermès Funnel", role: "Quản lý Lead & Nhắc hẹn", body: "Phân loại lead, kịch bản follow-up tự động, tìm hiểu về lead." },
      { dept: "Marketing", name: "Hermès Voice", role: "Tác giả Content", body: "Viết bài, post, blog theo giọng thương hiệu." },
      { dept: "Marketing", name: "Hermès Visual", role: "Designer & Producer", body: "Làm banner, poster, video ngắn." },
      { dept: "Điều hành", name: "Hermès Daily", role: "Chánh Văn phòng", body: "Briefing 7h sáng, báo cáo tuần, tin tức quan trọng." },
    ],
    compareTitle: "Hai trạng thái. Khoảng cách tên là phương pháp.",
    before: {
      label: "AI-aware · 90% founder hiện tại",
      items: ["Copy-paste vào ChatGPT mỗi sáng", "Viết nhanh hơn — vẫn là người làm", "Mua thêm tool khi gặp việc khó", "6 tháng sau vẫn ở cùng vị trí"],
    },
    after: {
      label: "AI-operator · sau Hermes",
      items: ["Ra lệnh 1 câu, agent tự chạy", "Việc lặp tự chạy — người không làm", "Agent tự nhớ cách làm khi gặp việc mới", "6 tháng sau có 5+ agent tự chạy"],
    },
    costTitle: "Solo CEO mất gì khi ôm cả Sales, Marketing và Vận hành?",
    costs: [
      { value: "↓45%", label: "năng suất CEO khi tự ngồi làm content" },
      { value: "8h", label: "mỗi ngày cho việc admin lặp đi lặp lại" },
      { value: "30+", label: "tin báo giá lặp lại cần trả mỗi ngày" },
    ],
    briefTitle: "Briefing sáng · Thứ Ba",
    brief: [
      "3 lead nóng cần phản hồi trước trưa.",
      "2 báo giá quá hạn follow-up — Funnel đã nhắc.",
      "Post Facebook 19h đã lên lịch, chờ duyệt.",
      "Doanh thu tuần: +18% so tuần trước.",
    ],
  },
  en: {
    eyebrow: "An autonomous AI team for Solo CEOs",
    titleA: "Turn",
    titleHighlight: "repetitive work",
    titleB: "into self-running agents in 4 weeks.",
    lede: "AI helps you write faster. But you're still the one doing the work. Hermes helps you build an AI team that runs repetitive tasks and learns every day — so you operate like you have a whole department.",
    cta: "Start with Hermes",
    pillars: [
      { title: "Command, don't click", body: "One message on Telegram. The agent drafts quotes, sends emails, schedules content — no ten open tabs." },
      { title: "Repetitive work runs itself", body: "Each time it finishes a task, the agent records how. Next time, it remembers — no re-teaching." },
      { title: "4 weeks to a 24/7 agent", body: "Not a course to watch. You finish with 1–2 agents doing real work every day." },
    ],
    toolsTitle: "One Hermes — connected to every tool.",
    toolsBody: "Keep the tools you know. Hermes sits in the middle, wires them together — and results land every day.",
    tools: ["Telegram", "Gmail", "Google Sheets", "Facebook", "Canva", "CRM / Zalo"],
    outcomes: ["Multi-platform posts", "Short videos", "Proposals", "Customer quotes", "Daily briefings", "Content calendar"],
    agentsTitle: "5 agents. Few, but deep.",
    agentsLede: "Each agent is a real capability — enough that working solo still feels like leading a team.",
    agents: [
      { dept: "Sales", name: "Hermès Sales", role: "Quote & Email Assistant", body: "Builds quotes, drafts emails, syncs CRM/Excel, prepares contracts." },
      { dept: "Sales", name: "Hermès Funnel", role: "Leads & Follow-ups", body: "Qualifies leads, automates follow-up sequences, researches prospects." },
      { dept: "Marketing", name: "Hermès Voice", role: "Content Author", body: "Writes posts and blogs in your brand voice." },
      { dept: "Marketing", name: "Hermès Visual", role: "Designer & Producer", body: "Makes banners, posters, and short videos." },
      { dept: "Operations", name: "Hermès Daily", role: "Chief of Staff", body: "7am briefing, weekly report, and key news." },
    ],
    compareTitle: "Two states. The gap between them is method.",
    before: {
      label: "AI-aware · 90% of founders today",
      items: ["Copy-pasting into ChatGPT every morning", "Writing faster — still doing the work", "Buying another tool for every hard task", "Same place six months later"],
    },
    after: {
      label: "AI-operator · after Hermes",
      items: ["One command, the agent runs", "Repetitive work runs without people", "Agents remember how when new work appears", "5+ self-running agents six months later"],
    },
    costTitle: "What does a Solo CEO lose by owning Sales, Marketing, and Ops?",
    costs: [
      { value: "↓45%", label: "CEO productivity when writing content themselves" },
      { value: "8h", label: "per day on repetitive admin" },
      { value: "30+", label: "repeat quote requests to answer daily" },
    ],
    briefTitle: "Morning briefing · Tuesday",
    brief: [
      "3 hot leads need a reply before noon.",
      "2 overdue quote follow-ups — Funnel sent reminders.",
      "7pm Facebook post scheduled, awaiting approval.",
      "Weekly revenue: +18% vs last week.",
    ],
  },
};

export const aboutPage: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    lede: string;
    topicsTitle: string;
    topics: string[];
    timelineTitle: string;
    timeline: { label: string; title: string; body: string }[];
    principleTitle: string;
    principleBody: string;
  }
> = {
  vi: {
    eyebrow: "Giới thiệu",
    title: "Xin chào, tôi là David Tung Phan.",
    lede: "Tôi quan tâm đến cách doanh nghiệp biến chiến lược thành nhịp vận hành hằng ngày. Website này là nơi lưu lại các quan sát, case study và framework có thể dùng ngay trong đội nhóm.",
    topicsTitle: "Tôi thường viết về gì?",
    topics: [
      "Thiết kế mục tiêu, OKRs và cơ chế đo lường rõ ràng.",
      "Xây dựng nhịp họp, dashboard và trách nhiệm theo vai trò.",
      "Ứng dụng AI agents để giảm ma sát trong vận hành.",
      "Văn hoá minh bạch giúp đội ngũ phối hợp tốt hơn.",
    ],
    timelineTitle: "Hành trình",
    timeline: [
      { label: "Education", title: "Dạy học ở quy mô lớn", body: "Biến chủ đề kỹ thuật khô thành bài học đạt hơn 1 triệu lượt xem." },
      { label: "Industrial IoT", title: "Sáng lập iLotusLand", body: "Nền tảng quan trắc môi trường với hơn 1.000 trạm cho FDI và cơ quan nhà nước." },
      { label: "SaaS", title: "Sáng lập Simplamo", body: "Hệ điều hành quản trị mục tiêu cho ban lãnh đạo, 200K người dùng." },
      { label: "AI Agents", title: "Sale AI & Hermes", body: "Đưa AI agents vào quy trình bán hàng và vận hành thật." },
    ],
    principleTitle: "Simple & More X10",
    principleBody:
      "Mỗi bài được viết theo hướng thực tế: bối cảnh, vấn đề, cách triển khai và bài học. Nếu một ý tưởng không giúp đội nhóm hành động rõ hơn, tôi sẽ cắt bớt.",
  },
  en: {
    eyebrow: "About",
    title: "Hi, I'm David Tung Phan.",
    lede: "I care about how companies turn strategy into a daily operating rhythm. This site is where I keep observations, case studies, and frameworks your team can use right away.",
    topicsTitle: "What I write about",
    topics: [
      "Designing goals, OKRs, and clear measurement.",
      "Building meeting rhythms, dashboards, and role-based accountability.",
      "Using AI agents to remove friction from operations.",
      "Transparent cultures that help teams work together.",
    ],
    timelineTitle: "Journey",
    timeline: [
      { label: "Education", title: "Teaching at scale", body: "Turned a dry technical subject into lessons with over a million views." },
      { label: "Industrial IoT", title: "Founded iLotusLand", body: "Environmental monitoring platform with 1,000+ stations for FDI and public agencies." },
      { label: "SaaS", title: "Founded Simplamo", body: "Goal-management operating system for leadership teams, 200K users." },
      { label: "AI Agents", title: "Sale AI & Hermes", body: "Bringing AI agents into real sales and operations workflows." },
    ],
    principleTitle: "Simple & More X10",
    principleBody:
      "Everything here is written for practice: context, problem, execution, and lessons. If an idea doesn't help a team act more clearly, I cut it.",
  },
};

export const contact = {
  email: "thanhtung@simplamo.com",
  mailto: "mailto:thanhtung@simplamo.com?subject=Trao%20%C4%91%E1%BB%95i%20v%E1%BB%81%20AI%20%26%20v%E1%BA%ADn%20h%C3%A0nh",
};

export const trustNames = [
  "Austdoor Group",
  "BNI Vietnam",
  "SolarBK",
  "Formosa Hà Tĩnh",
  "Sở TNMT Bình Dương",
  "Sở TNMT Quảng Ninh",
  "KCN TTC",
  "Sở TNMT Nam Định",
];

export const stack = ["Next.js", "React", "React Native", "TypeScript", "Tailwind", "AWS", "OpenAI", "Claude", "Microsoft", "Telegram"];
