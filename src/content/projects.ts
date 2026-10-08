import type { Locale } from "@/i18n/config";
import type { CaseArtKey } from "@/components/mockups/CaseArt";
import type { Tint } from "./solutions";

export type ProjectVisual = "dashboard" | "agent" | "iot" | "education";

type ProjectCopy = {
  tag: string;
  role: string;
  name: string;
  summary: string;
  metric: string;
  category: string;
  headline: string;
  lede: string;
  stats: { value: string; label: string }[];
  storyTitle: string;
  storyLede: string;
  story: { kicker: string; title: string; body: string }[];
  highlightsTitle: string;
  highlights: { title: string; body: string }[];
  closingTitle: string;
  closingBody: string;
};

export type Project = {
  slug: string;
  visual: ProjectVisual;
  tint: Tint;
  /** One prototype per story step, in order. */
  storyArt: CaseArtKey[];
  copy: Record<Locale, ProjectCopy>;
};

export const projects: Project[] = [
  {
    slug: "simplamo",
    tint: "orange",
    storyArt: ["goalTree", "execDashboard", "aiAssistant", "meetingAgenda", "integrations"],
    visual: "dashboard",
    copy: {
      vi: {
        tag: "SaaS Platform",
        role: "Founder / CEO / Product Architect",
        name: "Simplamo OS",
        summary:
          "Hệ điều hành quản trị giúp HĐQT và Ban điều hành đồng bộ OGSM/BSC/KPI/OKRs, dashboard, nhịp họp và AI.",
        metric: "200K users",
        category: "Strategy Execution",
        headline: "Tôi không chỉ xây feature. Tôi xây một nhịp vận hành.",
        lede: "Simplamo biến chiến lược thành mục tiêu, KPI, OKR, cuộc họp, dashboard và AI để ban lãnh đạo nhìn thấy nhịp thực thi thật thay vì chỉ nhìn kế hoạch trên giấy.",
        stats: [
          { value: "200K", label: "khách hàng / người dùng" },
          { value: "60+", label: "thị trường và quốc gia" },
          { value: "500", label: "đối tác triển khai" },
          { value: ">30%", label: "tăng trưởng doanh thu trong một case 5 công ty con" },
        ],
        storyTitle: "Năm nhóm năng lực, một outcome",
        storyLede:
          "Mỗi nhóm năng lực đều kéo về cùng một kết quả: lãnh đạo rõ mục tiêu hơn, đội ngũ bám số hơn và vấn đề được xử lý sớm hơn.",
        story: [
          { kicker: "Alignment", title: "Đồng bộ mục tiêu từ công ty xuống từng đội nhóm", body: "Biến chiến lược thành hệ thống mục tiêu liên kết giữa công ty, phòng ban và cá nhân để mọi người nhìn cùng một bức tranh." },
          { kicker: "Visibility", title: "Dashboard điều hành cho ban lãnh đạo", body: "Tập trung KPI, OKR, BSC và trạng thái thực thi vào một lớp nhìn nhanh, giúp lãnh đạo ra quyết định theo dữ liệu." },
          { kicker: "AI leverage", title: "AI assistant cho mục tiêu và hành động", body: "AI hỗ trợ tạo mục tiêu, gợi ý hành động, phát hiện rủi ro và giúp người quản lý không bị mắc kẹt ở trang giấy trắng." },
          { kicker: "Execution", title: "Meeting rhythm để mục tiêu thật sự chạy", body: "Không dừng ở setup mục tiêu. Simplamo đưa mục tiêu vào nhịp họp tuần, issue solving và accountability." },
          { kicker: "Integration", title: "Kết nối dữ liệu vận hành sẵn có", body: "Tích hợp Excel, Odoo, HubSpot, Teams, Slack hoặc hệ thống nội bộ để mục tiêu không bị tách khỏi vận hành." },
        ],
        highlightsTitle: "Bằng chứng từ triển khai thật",
        highlights: [
          { title: "Austdoor Group", body: "Triển khai BSC/KPI trên Simplamo cho tập đoàn top 500 doanh nghiệp, tăng tốc thực thi." },
          { title: "BNI Vietnam", body: "Áp dụng 4 Nguyên tắc thực thi, số hoá quản trị mục tiêu cho vùng, khu vực và chapter." },
          { title: "SolarBK", body: "Hoàn thiện hệ thống KPI, OKRs, BSC và liên kết mục tiêu chiến lược với hoạt động hằng ngày." },
        ],
        closingTitle: "Từ method đến adoption.",
        closingBody:
          "Từ hệ tư duy quản trị, data model, dashboard, AI đến nhịp triển khai với khách hàng — đây là project thể hiện rõ nhất cách tôi biến một vấn đề vận hành phức tạp thành sản phẩm dùng thật.",
      },
      en: {
        tag: "SaaS Platform",
        role: "Founder / CEO / Product Architect",
        name: "Simplamo Management OS",
        summary:
          "A management operating system for boards and executives to align OGSM/BSC/KPI/OKRs, dashboards, meeting rhythm, and AI.",
        metric: "200K users",
        category: "Strategy Execution",
        headline: "I don't just build features. I build an operating rhythm.",
        lede: "Simplamo turns strategy into goals, KPIs, OKRs, meetings, dashboards, and AI so leadership sees the real pulse of execution instead of a plan on paper.",
        stats: [
          { value: "200K", label: "customers / users" },
          { value: "60+", label: "markets and countries" },
          { value: "500", label: "implementation partners" },
          { value: ">30%", label: "revenue growth in a 5-subsidiary case" },
        ],
        storyTitle: "Five capability groups, one outcome",
        storyLede:
          "Every capability pulls toward the same result: leaders see goals more clearly, teams track numbers more closely, and issues get solved earlier.",
        story: [
          { kicker: "Alignment", title: "Cascade goals from company to every team", body: "Turn strategy into a linked goal system across company, departments, and individuals so everyone sees the same picture." },
          { kicker: "Visibility", title: "Executive dashboards for leadership", body: "Bring KPIs, OKRs, BSC, and execution status into one glanceable layer so leaders decide on data." },
          { kicker: "AI leverage", title: "AI assistant for goals and actions", body: "AI drafts goals, suggests actions, flags risks, and keeps managers from staring at a blank page." },
          { kicker: "Execution", title: "Meeting rhythm that makes goals run", body: "It doesn't stop at goal setup. Simplamo moves goals into weekly meetings, issue solving, and accountability." },
          { kicker: "Integration", title: "Connect existing operating data", body: "Integrates with Excel, Odoo, HubSpot, Teams, Slack, or internal systems so goals never drift from operations." },
        ],
        highlightsTitle: "Proof from real deployments",
        highlights: [
          { title: "Austdoor Group", body: "Rolled out BSC/KPI on Simplamo for a top-500 enterprise to accelerate execution." },
          { title: "BNI Vietnam", body: "Applied the 4 Disciplines of Execution and digitized goal management across regions and chapters." },
          { title: "SolarBK", body: "Completed its KPI, OKR, and BSC system, linking strategic goals to daily work." },
        ],
        closingTitle: "From method to adoption.",
        closingBody:
          "From management thinking, data model, dashboards, and AI to the rollout rhythm with customers — this project shows most clearly how I turn a complex operating problem into a product people actually use.",
      },
    },
  },
  {
    slug: "sale-ai",
    tint: "mint",
    storyArt: ["photoIntake", "optionCompare", "quoteDoc", "orderSync", "adoption"],
    visual: "agent",
    copy: {
      vi: {
        tag: "AI Agent",
        role: "Product Architect",
        name: "ADG Sale AI",
        summary:
          "AI Agent cho mạng lưới 2.000 đại lý, giúp tư vấn từ hình ảnh, tạo báo giá và đơn hàng dưới 60 giây.",
        metric: "<60s báo giá",
        category: "Sales AI / Distribution",
        headline: "Từ ảnh công trình đến đơn hàng trong 120 giây.",
        lede: "ADG Sale AI đặt một lớp giao tiếp tự nhiên lên SAP/CRM để 2.000 đại lý tra cứu sản phẩm, dựng cấu hình, tạo báo giá và lên đơn ngay tại điểm bán.",
        stats: [
          { value: "2.000", label: "đại lý C1/C2 cùng một chuẩn tư vấn" },
          { value: "5–15'", label: "thời gian phản hồi cũ tại điểm bán" },
          { value: "<60s", label: "mục tiêu cho mỗi bước báo giá và tạo đơn" },
          { value: "70–80%", label: "mục tiêu giảm thời gian tư vấn" },
        ],
        storyTitle: "Một flow bán hàng. Năm điểm kiểm soát.",
        storyLede:
          "Agent không thay thế hệ thống lõi. Nó gom đúng dữ liệu, đúng quyền và đúng thời điểm thành một luồng đại lý hoàn thành ngay trước mặt khách.",
        story: [
          { kicker: "0–15 giây", title: "Nhận bối cảnh", body: "Đại lý tải ảnh công trình, nhập kích thước, ngân sách và nhu cầu sử dụng thay vì mô tả qua nhiều cuộc gọi." },
          { kicker: "15–40 giây", title: "Đề xuất cấu hình", body: "Sale AI đối chiếu catalogue, tài liệu kỹ thuật, điều kiện thi công và chính sách để thu hẹp phương án phù hợp." },
          { kicker: "40–60 giây", title: "Tạo báo giá", body: "Bảng giá và quyền đại lý được áp dụng tự động; sales chỉ rà soát ngoại lệ thay vì dựng báo giá từ đầu." },
          { kicker: "60–120 giây", title: "Lên đơn", body: "Dữ liệu đã xác nhận chuyển thành đơn hàng và đồng bộ về SAP/CRM, giữ nguyên vai trò kiểm soát của hệ thống lõi." },
          { kicker: "Hàng tuần", title: "Đo adoption", body: "Dashboard theo dõi tốc độ phản hồi, mức sử dụng, conversion và các bước thường cần con người can thiệp." },
        ],
        highlightsTitle: "AI ở giữa. Quyền quyết định vẫn ở hai đầu.",
        highlights: [
          { title: "Đại lý & Sales", body: "Cung cấp bối cảnh, chọn phương án và duyệt trước khi gửi khách." },
          { title: "Sale AI", body: "Hiểu yêu cầu, truy xuất tri thức, áp chính sách và điều phối workflow." },
          { title: "SAP / CRM", body: "Giữ master data, bảng giá, đơn hàng, phân quyền và lịch sử giao dịch." },
        ],
        closingTitle: "AI Agent chỉ có giá trị khi đi hết đường tới giao dịch.",
        closingBody:
          "Tôi thiết kế Sale AI như một lớp vận hành đo được — kết nối knowledge, quyền dữ liệu, hành động nghiệp vụ và nhịp cải tiến hàng tuần.",
      },
      en: {
        tag: "AI Agent",
        role: "Product Architect",
        name: "ADG Sale AI",
        summary:
          "An AI Agent for a 2,000-dealer network, enabling image-based consultation, quotes, and orders in under 60 seconds.",
        metric: "<60s quotes",
        category: "Sales AI / Distribution",
        headline: "From a site photo to a sales order in 120 seconds.",
        lede: "ADG Sale AI puts a natural-language layer on top of SAP/CRM so 2,000 dealers can look up products, configure, quote, and order right at the point of sale.",
        stats: [
          { value: "2,000", label: "C1/C2 dealers on one consulting standard" },
          { value: "5–15'", label: "previous response time at point of sale" },
          { value: "<60s", label: "target per quote and order step" },
          { value: "70–80%", label: "targeted cut in consulting time" },
        ],
        storyTitle: "One sales flow. Five control points.",
        storyLede:
          "The agent doesn't replace core systems. It gathers the right data, permissions, and timing into one flow a dealer completes in front of the customer.",
        story: [
          { kicker: "0–15 sec", title: "Capture context", body: "Dealers upload a site photo, enter dimensions, budget, and usage instead of describing it over several calls." },
          { kicker: "15–40 sec", title: "Recommend configuration", body: "Sale AI matches the catalogue, technical docs, installation conditions, and policy to narrow down options." },
          { kicker: "40–60 sec", title: "Generate quote", body: "Price lists and dealer permissions apply automatically; sales only reviews exceptions instead of building quotes from scratch." },
          { kicker: "60–120 sec", title: "Place order", body: "Confirmed data becomes an order synced to SAP/CRM, preserving the control role of the core system." },
          { kicker: "Weekly", title: "Measure adoption", body: "Dashboards track response speed, usage, conversion, and the steps that most often need a human." },
        ],
        highlightsTitle: "AI in the middle. Decisions stay at both ends.",
        highlights: [
          { title: "Dealers & Sales", body: "Provide context, choose the option, and approve before sending to the customer." },
          { title: "Sale AI", body: "Understands requests, retrieves knowledge, applies policy, and orchestrates the workflow." },
          { title: "SAP / CRM", body: "Holds master data, price lists, orders, permissions, and transaction history." },
        ],
        closingTitle: "An AI Agent only matters when it goes all the way to the transaction.",
        closingBody:
          "I designed Sale AI as a measurable operating layer — connecting knowledge, data permissions, business actions, and a weekly improvement cadence.",
      },
    },
  },
  {
    slug: "ilotusland",
    tint: "sky",
    storyArt: ["sensorList", "dataStream", "alertConsole", "publicAqi"],
    visual: "iot",
    copy: {
      vi: {
        tag: "IoT Platform",
        role: "Founder / Architect",
        name: "iLotusLand IoT",
        summary:
          "Nền tảng quan trắc công nghiệp với hơn 1.000 trạm, phục vụ FDI, nhà máy và cơ quan nhà nước.",
        metric: "1,000+ trạm",
        category: "Industrial IoT",
        headline: "IoT môi trường cho mọi thiết bị quan trắc.",
        lede: "Kết nối trạm quan trắc, camera, datalogger và API vào dashboard web/mobile để giám sát, cảnh báo và công khai dữ liệu.",
        stats: [
          { value: "1,000+", label: "trạm quan trắc tự động" },
          { value: "600+", label: "khu công nghiệp và nhà máy FDI" },
          { value: "30+", label: "Sở Tài nguyên & Môi trường" },
          { value: "24/7", label: "hỗ trợ vận hành On Cloud" },
        ],
        storyTitle: "Từ thiết bị đo tới dashboard điều hành",
        storyLede:
          "Một lớp tích hợp trung tâm nhận dữ liệu từ nhiều hãng thiết bị, chuẩn hoá luồng truyền và đưa lên web/mobile, LED, website công khai hoặc API bên thứ ba.",
        story: [
          { kicker: "01", title: "Thiết bị đo", body: "Nước thải, khí thải, nước mặt, nước ngầm, không khí xung quanh — từ nhiều hãng khác nhau." },
          { kicker: "02", title: "Datalogger", body: "Chuẩn hoá và truyền dữ liệu liên tục, chống mất mẫu khi đường truyền gián đoạn." },
          { kicker: "03", title: "Server", body: "On Premise hoặc On Cloud, cảnh báo vượt ngưỡng, quản lý sự cố và phân quyền." },
          { kicker: "04", title: "Web / Mobile / LED", body: "Giám sát real-time, báo cáo PDF/Excel, công khai AQI/WQI và chia sẻ API." },
        ],
        highlightsTitle: "Dấu ấn triển khai",
        highlights: [
          { title: "372 trạm · Sở TNMT Bình Dương", body: "Nước ngầm, nước thải, khí thải, nước mặt và khí tượng thuỷ văn." },
          { title: "163 trạm · Sở TNMT Quảng Ninh", body: "Giám sát đa lớp cho tỉnh công nghiệp ven biển." },
          { title: "27 điểm · Formosa Hà Tĩnh", body: "22 hệ thống ống khói và 5 trạm xử lý nước thải." },
        ],
        closingTitle: "Từ platform tới năng lực xây sản phẩm.",
        closingBody:
          "Bắt đầu từ bài toán vận hành thật, kết nối phần cứng và phần mềm, rồi biến dữ liệu thành quyết định có thể hành động.",
      },
      en: {
        tag: "IoT Platform",
        role: "Founder / Architect",
        name: "iLotusLand Industrial IoT",
        summary:
          "An industrial monitoring platform with 1,000+ stations serving FDI factories and public agencies.",
        metric: "1,000+ stations",
        category: "Industrial IoT",
        headline: "Environmental IoT for every monitoring device.",
        lede: "Connect monitoring stations, cameras, dataloggers, and APIs into web/mobile dashboards to monitor, alert, and publish data.",
        stats: [
          { value: "1,000+", label: "automated monitoring stations" },
          { value: "600+", label: "industrial parks and FDI factories" },
          { value: "30+", label: "provincial environment departments" },
          { value: "24/7", label: "On Cloud operations support" },
        ],
        storyTitle: "From sensor to executive dashboard",
        storyLede:
          "A central integration layer ingests data from many device vendors, normalizes transmission, and serves web/mobile apps, LED boards, public sites, or third-party APIs.",
        story: [
          { kicker: "01", title: "Sensors", body: "Wastewater, emissions, surface water, groundwater, ambient air — from many different vendors." },
          { kicker: "02", title: "Datalogger", body: "Normalizes and streams data continuously, with no sample loss when links drop." },
          { kicker: "03", title: "Server", body: "On Premise or On Cloud, threshold alerts, incident management, and permissions." },
          { kicker: "04", title: "Web / Mobile / LED", body: "Real-time monitoring, PDF/Excel reports, public AQI/WQI, and API sharing." },
        ],
        highlightsTitle: "Deployment footprint",
        highlights: [
          { title: "372 stations · Binh Duong DONRE", body: "Groundwater, wastewater, emissions, surface water, and hydro-meteorology." },
          { title: "163 stations · Quang Ninh DONRE", body: "Multi-layer monitoring for a coastal industrial province." },
          { title: "27 points · Formosa Ha Tinh", body: "22 stack systems and 5 wastewater treatment stations." },
        ],
        closingTitle: "From platform to product-building capability.",
        closingBody:
          "Start from a real operating problem, connect hardware and software, then turn data into decisions people can act on.",
      },
    },
  },
  {
    slug: "education",
    tint: "lilac",
    storyArt: ["lessonOutline", "quizFeedback", "viewsChart"],
    visual: "education",
    copy: {
      vi: {
        tag: "Education",
        role: "Educator",
        name: "Đào tạo",
        summary:
          "Biến một chủ đề khô thành trải nghiệm học cuốn hút, đạt hơn 1 triệu lượt xem và tiếp cận học sinh quy mô lớn.",
        metric: "1M+ lượt xem",
        category: "Learning at scale",
        headline: "Biến chủ đề khô nhất thành bài học được xem triệu lần.",
        lede: "Trước khi xây sản phẩm, tôi dạy lập trình Pascal cho học sinh. Bài học được thiết kế như một sản phẩm: đơn giản, có nhịp, có phản hồi — và lan toả tới hơn một triệu người học.",
        stats: [
          { value: "1M+", label: "lượt xem bài giảng" },
          { value: "Pascal", label: "chủ đề kỹ thuật nền tảng" },
          { value: "Simple", label: "nguyên tắc thiết kế bài học" },
          { value: "X10", label: "tư duy nhân bản qua nội dung" },
        ],
        storyTitle: "Bài học cũng là một sản phẩm",
        storyLede:
          "Những nguyên tắc tôi dùng để dạy học sinh vẫn là nguyên tắc tôi dùng để thiết kế sản phẩm và đào tạo đội ngũ hôm nay.",
        story: [
          { kicker: "Simple", title: "Cắt tới phần cốt lõi", body: "Nếu một ý không giúp người học hành động rõ hơn, nó bị cắt bớt." },
          { kicker: "Rhythm", title: "Có nhịp và có phản hồi", body: "Mỗi bài có mục tiêu nhỏ, bài tập ngay và phản hồi nhanh để giữ động lực." },
          { kicker: "Scale", title: "Nhân bản qua nội dung", body: "Một bài giảng tốt chạy thay bạn hàng triệu lần — đó là đòn bẩy đầu tiên." },
        ],
        highlightsTitle: "Bài học mang theo đến hôm nay",
        highlights: [
          { title: "Coaching lãnh đạo", body: "Biến framework quản trị phức tạp thành bước đi rõ ràng cho CEO." },
          { title: "Onboarding sản phẩm", body: "Thiết kế trải nghiệm học ngay trong sản phẩm SaaS." },
          { title: "Playbook", body: "Viết sổ tay ngắn, có nguồn, dùng được ngay trong đội nhóm." },
        ],
        closingTitle: "Dạy là cách nhanh nhất để hiểu sâu.",
        closingBody: "Mỗi framework tôi viết ra đều phải dạy được — nếu không dạy được, nó chưa đủ đơn giản.",
      },
      en: {
        tag: "Education",
        role: "Educator",
        name: "Pascal to 1M learners",
        summary:
          "Turned a dry technical subject into engaging lessons that reached more than one million views.",
        metric: "1M+ views",
        category: "Learning at scale",
        headline: "Turning the driest subject into lessons watched a million times.",
        lede: "Before building products, I taught Pascal programming to students. Lessons were designed like a product: simple, rhythmic, with feedback — and they reached over a million learners.",
        stats: [
          { value: "1M+", label: "lesson views" },
          { value: "Pascal", label: "foundational technical subject" },
          { value: "Simple", label: "lesson design principle" },
          { value: "X10", label: "scaling through content" },
        ],
        storyTitle: "A lesson is a product, too",
        storyLede:
          "The principles I used to teach students are the same ones I use to design products and train teams today.",
        story: [
          { kicker: "Simple", title: "Cut to the core", body: "If an idea doesn't help the learner act more clearly, it gets cut." },
          { kicker: "Rhythm", title: "Pace and feedback", body: "Each lesson has a small goal, an immediate exercise, and fast feedback to keep momentum." },
          { kicker: "Scale", title: "Scale through content", body: "A great lesson runs for you a million times — that's the first lever." },
        ],
        highlightsTitle: "Lessons carried into today",
        highlights: [
          { title: "Leadership coaching", body: "Turn complex management frameworks into clear steps for CEOs." },
          { title: "Product onboarding", body: "Design learning experiences inside SaaS products." },
          { title: "Playbooks", body: "Write short, sourced manuals teams can use immediately." },
        ],
        closingTitle: "Teaching is the fastest way to understand deeply.",
        closingBody: "Every framework I write must be teachable — if it can't be taught, it isn't simple enough yet.",
      },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
