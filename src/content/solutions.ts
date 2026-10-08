import type { Locale } from "@/i18n/config";

export type SolutionArt = "goals" | "agent" | "hermes" | "iot" | "analytics" | "coaching" | "learning" | "rhythm";
export type Tint = "orange" | "mint" | "lilac" | "butter" | "sky" | "rose";

export type Solution = {
  key: string;
  art: SolutionArt;
  tint: Tint;
  /** Path (without locale prefix) or absolute URL. */
  href: string;
  wide?: boolean;
  copy: Record<Locale, { name: string; tagline: string; body: string }>;
};

export const solutions: Solution[] = [
  {
    key: "simplamo",
    art: "goals",
    tint: "orange",
    href: "/projects/simplamo/",
    wide: true,
    copy: {
      vi: { name: "Simplamo OS", tagline: "Biến chiến lược thành việc làm mỗi tuần.", body: "Đồng bộ OGSM, BSC/KPI, OKR từ công ty đến từng đội, kèm bảng điều hành, nhịp họp và AI." },
      en: { name: "Simplamo OS", tagline: "Turn strategy into an execution rhythm.", body: "Align OGSM, BSC/KPI, and OKRs from company to every team — with dashboards, meeting rhythm, and AI." },
    },
  },
  {
    key: "sale-ai",
    art: "agent",
    tint: "mint",
    href: "/projects/sale-ai/",
    copy: {
      vi: { name: "Sale AI", tagline: "Báo giá dưới 60 giây.", body: "AI Agent cho 2.000 đại lý: từ ảnh công trình ra báo giá và đơn hàng vào thẳng SAP/CRM." },
      en: { name: "Sale AI", tagline: "Quotes in under 60 seconds.", body: "An AI Agent for 2,000 dealers: from a site photo to a quote and an order synced to SAP/CRM." },
    },
  },
  {
    key: "hermes",
    art: "hermes",
    tint: "lilac",
    href: "/hermes/",
    copy: {
      vi: { name: "Đội AI Hermes", tagline: "AI tự làm việc lặp lại.", body: "5 trợ lý AI cho kinh doanh, tiếp thị và điều hành. Ra lệnh một câu qua Telegram là xong." },
      en: { name: "Hermes AI Team", tagline: "An AI team that runs repetitive work.", body: "5 agents for Sales, Marketing, and Operations — one Telegram command and the agent does the rest." },
    },
  },
  {
    key: "ilotusland",
    art: "iot",
    tint: "sky",
    href: "/projects/ilotusland/",
    copy: {
      vi: { name: "iLotusLand IoT", tagline: "Hơn 1.000 trạm quan trắc theo thời gian thực.", body: "Nối thiết bị đo, bộ ghi dữ liệu và camera về một bảng cảnh báo cho nhà máy và cơ quan nhà nước." },
      en: { name: "iLotusLand IoT", tagline: "1,000+ real-time monitoring stations.", body: "Connect sensors, dataloggers, and cameras to alerting dashboards for factories and public agencies." },
    },
  },
  {
    key: "analytics",
    art: "analytics",
    tint: "butter",
    href: "/projects/simplamo/",
    copy: {
      vi: { name: "Bảng điều hành", tagline: "Một màn hình, đủ để quyết định.", body: "Gom KPI, OKR và số liệu vận hành vào một chỗ để lãnh đạo quyết định theo dữ liệu." },
      en: { name: "Executive dashboards", tagline: "One screen, enough to decide.", body: "Bring KPIs, OKRs, and operating signals into one glanceable layer so leaders act on data." },
    },
  },
  {
    key: "rhythm",
    art: "rhythm",
    tint: "rose",
    href: "/playbooks/",
    copy: {
      vi: { name: "Triển khai OKR · 4DX", tagline: "Nhịp tuần có người phụ trách và chỉ số.", body: "Đồng hành 4–12 tuần: mục tiêu, người phụ trách, nhịp họp và đánh giá, đến khi đội ngũ tự chạy." },
      en: { name: "OKR · 4DX rollout", tagline: "A weekly rhythm with owners and metrics.", body: "4–12 weeks hands-on: goals, owners, meetings, and reviews — until the team runs it on its own." },
    },
  },
  {
    key: "coaching",
    art: "coaching",
    tint: "orange",
    href: "/about/",
    copy: {
      vi: { name: "Huấn luyện lãnh đạo", tagline: "Quyết định nhanh hơn nhờ AI.", body: "Kèm riêng CEO và ban điều hành, hội thảo cho đội sản phẩm: từ biết dùng AI đến điều hành bằng AI." },
      en: { name: "Leadership coaching", tagline: "Decide faster with AI.", body: "1:1 for CEOs and C-level, workshops for product teams: build an AI-operator mindset, not just AI-aware." },
    },
  },
  {
    key: "education",
    art: "learning",
    tint: "mint",
    href: "/projects/education/",
    copy: {
      vi: { name: "Đào tạo", tagline: "Bài học được làm như sản phẩm.", body: "Biến chủ đề khô thành bài học cuốn hút, hơn 1 triệu lượt xem." },
      en: { name: "Education", tagline: "Lessons designed like products.", body: "Turn dry subjects into engaging learning — reaching more than one million views." },
    },
  },
];

export const solutionsPage: Record<
  Locale,
  {
    title: string;
    lede: string;
    primary: string;
    secondary: string;
    overview: string;
    overviewTitle: string;
    overviewLede: string;
    tour: string;
    storiesPill: string;
    storiesTitle: string;
    story: string;
    prev: string;
    next: string;
  }
> = {
  vi: {
    title: "Giải pháp của David Tung",
    lede: "Các hệ thống tôi đã xây và triển khai, từ chiến lược, dữ liệu đến AI Agent.",
    primary: "Trao đổi về giải pháp",
    secondary: "Xem dự án",
    overview: "Giải pháp",
    overviewTitle: "Nơi đội ngũ giỏi được xây nên",
    overviewLede: "Mỗi giải pháp gỡ một điểm nghẽn giữa chiến lược và vận hành, và chúng chạy cùng nhau.",
    tour: "Đặt lịch trao đổi 30 phút",
    storiesPill: "Dự án",
    storiesTitle: "Đang chạy ở quy mô thật",
    story: "Xem dự án",
    prev: "Trước",
    next: "Tiếp",
  },
  en: {
    title: "The David Tung solution platform",
    lede: "From strategy and data to AI agents — the systems I've built and deployed to help growth teams operate faster.",
    primary: "Discuss a solution",
    secondary: "See case studies",
    overview: "Solutions overview",
    overviewTitle: "High-performing teams are built here",
    overviewLede: "Each solution removes a specific point of friction between strategy and daily operations — and they're designed to work together.",
    tour: "Book a 30-minute call",
    storiesPill: "Deployment stories",
    storiesTitle: "Running at real scale",
    story: "Read the case study",
    prev: "Previous",
    next: "Next",
  },
};
