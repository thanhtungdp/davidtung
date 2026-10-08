import type { Locale } from "@/i18n/config";

/** Copy for the Hermes (AI Agent) and About pages. */

export const hermesPage: Record<
  Locale,
  {
    titleA: string;
    titleHighlight: string;
    titleB: string;
    lede: string;
    cta: string;
    see: string;
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
  }
> = {
  vi: {
    titleA: "Biến",
    titleHighlight: "việc lặp lại",
    titleB: "thành AI tự chạy trong 4 tuần.",
    lede: "AI giúp bạn viết nhanh hơn, nhưng bạn vẫn phải tự làm. Hermes là đội AI tự làm việc lặp lại và học thêm mỗi ngày — như có thêm cả một phòng ban.",
    cta: "Bắt đầu với Hermes",
    see: "Xem 5 trợ lý AI",
    pillars: [
      { title: "Ra lệnh, không thao tác", body: "Một câu qua Telegram, AI tự lập báo giá, gửi email, đăng bài." },
      { title: "Việc lặp tự chạy", body: "Làm xong một việc, AI ghi lại cách làm. Lần sau tự làm, không cần dạy lại." },
      { title: "4 tuần, AI chạy 24/7", body: "Không phải khoá học. Kết thúc là 1–2 trợ lý AI làm việc thật mỗi ngày." },
    ],
    toolsTitle: "Một Hermes, nối mọi công cụ.",
    toolsBody: "Bạn vẫn dùng công cụ quen thuộc. Hermes nối chúng lại và trả kết quả mỗi ngày.",
    tools: ["Telegram", "Gmail", "Google Sheets", "Facebook", "Canva", "CRM / Zalo"],
    outcomes: ["Bài đăng đa kênh", "Video ngắn", "Đề xuất dự án", "Báo giá khách hàng", "Bản tin hằng ngày", "Lịch đăng bài"],
    agentsTitle: "5 trợ lý AI. Ít mà sâu.",
    agentsLede: "Mỗi trợ lý là một năng lực thật — làm một mình mà như có cả đội.",
    agents: [
      { dept: "Kinh doanh", name: "Hermès Sales", role: "Báo giá và email", body: "Lập báo giá, soạn email, cập nhật CRM/Excel, làm hợp đồng." },
      { dept: "Kinh doanh", name: "Hermès Funnel", role: "Khách tiềm năng và lịch hẹn", body: "Phân loại khách, tự nhắc chăm sóc, tìm hiểu trước khi gọi." },
      { dept: "Tiếp thị", name: "Hermès Voice", role: "Viết nội dung", body: "Viết bài đăng, bài blog đúng giọng thương hiệu." },
      { dept: "Tiếp thị", name: "Hermès Visual", role: "Thiết kế và dựng video", body: "Làm ảnh quảng cáo, áp phích, video ngắn." },
      { dept: "Điều hành", name: "Hermès Daily", role: "Chánh văn phòng", body: "Bản tin 7h sáng, báo cáo tuần, tin quan trọng." },
    ],
    compareTitle: "Hai cách dùng AI. Khác nhau ở phương pháp.",
    before: {
      label: "Biết dùng AI · 90% chủ doanh nghiệp hiện nay",
      items: ["Sáng nào cũng chép dán vào ChatGPT", "Viết nhanh hơn, vẫn tự làm", "Gặp việc khó lại mua thêm công cụ", "6 tháng sau vẫn đứng yên"],
    },
    after: {
      label: "Điều hành bằng AI · sau Hermes",
      items: ["Ra lệnh một câu, AI tự làm", "Việc lặp tự chạy, không cần người", "AI nhớ cách làm cho việc mới", "6 tháng sau có hơn 5 trợ lý AI"],
    },
    costTitle: "Một mình gánh cả kinh doanh, tiếp thị và vận hành thì mất gì?",
    costs: [
      { value: "↓45%", label: "năng suất khi CEO tự ngồi viết nội dung" },
      { value: "8h", label: "mỗi ngày cho việc hành chính lặp lại" },
      { value: "30+", label: "yêu cầu báo giá cần trả lời mỗi ngày" },
    ],
  },
  en: {
    titleA: "Turn",
    titleHighlight: "repetitive work",
    titleB: "into self-running agents in 4 weeks.",
    lede: "AI helps you write faster. But you're still the one doing the work. Hermes helps you build an AI team that runs repetitive tasks and learns every day — so you operate like you have a whole department.",
    cta: "Start with Hermes",
    see: "See the 5 agents at work",
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
    lede: "Tôi quan tâm đến cách doanh nghiệp biến chiến lược thành việc làm mỗi ngày. Đây là nơi tôi ghi lại quan sát, dự án và phương pháp dùng được ngay.",
    topicsTitle: "Tôi thường viết về gì?",
    topics: [
      "Đặt mục tiêu, OKR và cách đo lường rõ ràng.",
      "Nhịp họp, bảng điều hành và trách nhiệm theo vai trò.",
      "Dùng AI Agent để gỡ điểm nghẽn trong vận hành.",
      "Văn hoá minh bạch để đội ngũ phối hợp tốt hơn.",
    ],
    timelineTitle: "Hành trình",
    timeline: [
      { label: "Giáo dục", title: "Dạy học quy mô lớn", body: "Bài giảng kỹ thuật đạt hơn 1 triệu lượt xem." },
      { label: "IoT công nghiệp", title: "Sáng lập iLotusLand", body: "Quan trắc môi trường hơn 1.000 trạm cho nhà máy FDI và cơ quan nhà nước." },
      { label: "SaaS", title: "Sáng lập Simplamo", body: "Nền tảng quản trị mục tiêu cho ban lãnh đạo, 200.000 người dùng." },
      { label: "AI Agent", title: "Sale AI và Hermes", body: "Đưa AI Agent vào bán hàng và vận hành thật." },
    ],
    principleTitle: "Simple & More X10",
    principleBody:
      "Mỗi bài đi thẳng vào bối cảnh, vấn đề, cách làm và bài học. Ý nào không giúp đội ngũ hành động rõ hơn, tôi cắt.",
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
