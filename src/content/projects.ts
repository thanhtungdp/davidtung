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
        tag: "Nền tảng SaaS",
        role: "Nhà sáng lập · CEO · Kiến trúc sư sản phẩm",
        name: "Simplamo OS",
        summary:
          "Nền tảng quản trị giúp HĐQT và ban điều hành đồng bộ OGSM, BSC/KPI, OKR, bảng điều hành, nhịp họp và AI.",
        metric: "200.000 người dùng",
        category: "Thực thi chiến lược",
        headline: "Không chỉ xây tính năng. Tôi xây nhịp vận hành.",
        lede: "Simplamo biến chiến lược thành mục tiêu, chỉ số, cuộc họp và AI, để lãnh đạo thấy việc thực thi thật chứ không chỉ kế hoạch trên giấy.",
        stats: [
          { value: "200.000", label: "người dùng" },
          { value: "60+", label: "thị trường và quốc gia" },
          { value: "500", label: "đối tác triển khai" },
          { value: ">30%", label: "tăng doanh thu ở một tập đoàn 5 công ty con" },
        ],
        storyTitle: "Năm năng lực, một kết quả",
        storyLede: "Lãnh đạo rõ mục tiêu hơn, đội ngũ bám số hơn, vấn đề được xử lý sớm hơn.",
        story: [
          { kicker: "Đồng bộ", title: "Mục tiêu từ công ty đến từng đội", body: "Mục tiêu công ty, phòng ban và cá nhân liên kết với nhau, ai cũng thấy cùng một bức tranh." },
          { kicker: "Minh bạch", title: "Bảng điều hành cho lãnh đạo", body: "KPI, OKR, BSC và tiến độ trên một màn hình để quyết định theo dữ liệu." },
          { kicker: "AI", title: "Trợ lý AI cho mục tiêu", body: "AI gợi ý mục tiêu, hành động và cảnh báo rủi ro, không để quản lý bí ý tưởng." },
          { kicker: "Thực thi", title: "Nhịp họp giữ mục tiêu chạy", body: "Mục tiêu đi vào họp tuần, gỡ vướng và cam kết của từng người." },
          { kicker: "Kết nối", title: "Nối dữ liệu sẵn có", body: "Kết nối Excel, Odoo, HubSpot, Teams, Slack hay hệ thống nội bộ, mục tiêu không tách khỏi vận hành." },
        ],
        highlightsTitle: "Đã triển khai thật",
        highlights: [
          { title: "Tập đoàn Austdoor", body: "Triển khai BSC/KPI trên Simplamo cho doanh nghiệp top 500, tăng tốc thực thi." },
          { title: "BNI Việt Nam", body: "Áp dụng 4 nguyên tắc thực thi, số hoá quản trị mục tiêu đến từng chi hội." },
          { title: "SolarBK", body: "Hoàn thiện KPI, OKR, BSC và nối mục tiêu chiến lược với việc hằng ngày." },
        ],
        closingTitle: "Từ phương pháp đến người dùng thật.",
        closingBody:
          "Từ tư duy quản trị, mô hình dữ liệu, bảng điều hành, AI đến cách triển khai cùng khách hàng — dự án cho thấy rõ nhất cách tôi biến bài toán vận hành phức tạp thành sản phẩm dùng thật.",
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
        role: "Kiến trúc sư sản phẩm",
        name: "ADG Sale AI",
        summary:
          "AI Agent cho 2.000 đại lý: tư vấn từ hình ảnh, lập báo giá và đơn hàng dưới 60 giây.",
        metric: "Báo giá <60 giây",
        category: "AI bán hàng · Phân phối",
        headline: "Từ ảnh công trình đến đơn hàng trong 120 giây.",
        lede: "Sale AI đặt một lớp trò chuyện lên SAP/CRM để 2.000 đại lý tra sản phẩm, chọn cấu hình, báo giá và lên đơn ngay tại cửa hàng.",
        stats: [
          { value: "2.000", label: "đại lý cấp 1 và 2, chung một chuẩn tư vấn" },
          { value: "5–15'", label: "thời gian phản hồi trước đây" },
          { value: "<60s", label: "mục tiêu cho mỗi bước báo giá, lên đơn" },
          { value: "70–80%", label: "mục tiêu giảm thời gian tư vấn" },
        ],
        storyTitle: "Một luồng bán hàng. Năm điểm kiểm soát.",
        storyLede: "AI không thay hệ thống lõi. Nó gom đúng dữ liệu, đúng quyền, đúng lúc để đại lý xong việc ngay trước mặt khách.",
        story: [
          { kicker: "0–15 giây", title: "Nhận yêu cầu", body: "Đại lý gửi ảnh công trình, kích thước, ngân sách và nhu cầu, không cần gọi nhiều lần." },
          { kicker: "15–40 giây", title: "Đề xuất cấu hình", body: "Sale AI đối chiếu danh mục, tài liệu kỹ thuật, điều kiện thi công và chính sách để chọn phương án." },
          { kicker: "40–60 giây", title: "Lập báo giá", body: "Bảng giá và quyền đại lý áp tự động. Nhân viên kinh doanh chỉ duyệt ngoại lệ." },
          { kicker: "60–120 giây", title: "Lên đơn", body: "Báo giá đã duyệt thành đơn hàng, vào thẳng SAP/CRM, hệ thống lõi vẫn giữ quyền kiểm soát." },
          { kicker: "Hằng tuần", title: "Đo mức sử dụng", body: "Theo dõi tốc độ phản hồi, mức sử dụng, tỷ lệ chốt đơn và các bước cần người can thiệp." },
        ],
        highlightsTitle: "AI ở giữa. Quyền quyết định ở hai đầu.",
        highlights: [
          { title: "Đại lý và kinh doanh", body: "Đưa yêu cầu, chọn phương án, duyệt trước khi gửi khách." },
          { title: "Sale AI", body: "Hiểu yêu cầu, tra cứu tri thức, áp chính sách, điều phối quy trình." },
          { title: "SAP / CRM", body: "Giữ dữ liệu gốc, bảng giá, đơn hàng, phân quyền và lịch sử giao dịch." },
        ],
        closingTitle: "AI Agent chỉ có giá trị khi đi đến tận giao dịch.",
        closingBody:
          "Sale AI là một lớp vận hành đo được: nối tri thức, quyền dữ liệu, nghiệp vụ và nhịp cải tiến hằng tuần.",
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
        tag: "Nền tảng IoT",
        role: "Nhà sáng lập · Kiến trúc sư",
        name: "iLotusLand IoT",
        summary:
          "Nền tảng quan trắc công nghiệp hơn 1.000 trạm cho nhà máy FDI và cơ quan nhà nước.",
        metric: "1.000+ trạm",
        category: "IoT công nghiệp",
        headline: "Quan trắc môi trường cho mọi thiết bị đo.",
        lede: "Nối trạm quan trắc, camera, bộ ghi dữ liệu và API về một bảng điều hành trên web và điện thoại để giám sát, cảnh báo và công khai dữ liệu.",
        stats: [
          { value: "1.000+", label: "trạm quan trắc tự động" },
          { value: "600+", label: "khu công nghiệp và nhà máy FDI" },
          { value: "30+", label: "Sở Tài nguyên và Môi trường" },
          { value: "24/7", label: "hỗ trợ vận hành trên đám mây" },
        ],
        storyTitle: "Từ thiết bị đo đến bảng điều hành",
        storyLede: "Một lớp tích hợp nhận dữ liệu từ nhiều hãng, chuẩn hoá rồi đưa lên web, điện thoại, bảng LED hoặc hệ thống khác.",
        story: [
          { kicker: "01", title: "Thiết bị đo", body: "Nước thải, khí thải, nước mặt, nước ngầm, không khí — từ nhiều hãng khác nhau." },
          { kicker: "02", title: "Bộ ghi dữ liệu", body: "Chuẩn hoá và truyền liên tục, không mất mẫu khi đứt kết nối." },
          { kicker: "03", title: "Máy chủ", body: "Đặt tại chỗ hoặc trên đám mây; cảnh báo vượt ngưỡng, xử lý sự cố, phân quyền." },
          { kicker: "04", title: "Web · điện thoại · bảng LED", body: "Giám sát theo thời gian thực, báo cáo PDF/Excel, công khai chỉ số AQI/WQI." },
        ],
        highlightsTitle: "Dấu ấn triển khai",
        highlights: [
          { title: "372 trạm · Sở TNMT Bình Dương", body: "Nước ngầm, nước thải, khí thải, nước mặt và khí tượng thuỷ văn." },
          { title: "163 trạm · Sở TNMT Quảng Ninh", body: "Giám sát nhiều lớp cho tỉnh công nghiệp ven biển." },
          { title: "27 điểm · Formosa Hà Tĩnh", body: "22 ống khói và 5 trạm xử lý nước thải." },
        ],
        closingTitle: "Từ nền tảng đến năng lực làm sản phẩm.",
        closingBody: "Bắt đầu từ bài toán vận hành thật, nối phần cứng với phần mềm, rồi biến dữ liệu thành quyết định.",
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
        tag: "Giáo dục",
        role: "Người dạy",
        name: "Đào tạo",
        summary: "Biến chủ đề khô thành bài học cuốn hút, hơn 1 triệu lượt xem.",
        metric: "1 triệu+ lượt xem",
        category: "Học tập quy mô lớn",
        headline: "Chủ đề khô nhất, bài giảng triệu lượt xem.",
        lede: "Trước khi làm sản phẩm, tôi dạy lập trình Pascal cho học sinh. Mỗi bài được làm như một sản phẩm: đơn giản, có nhịp, có phản hồi — và đến được hơn một triệu người học.",
        stats: [
          { value: "1 triệu+", label: "lượt xem bài giảng" },
          { value: "Pascal", label: "môn lập trình nền tảng" },
          { value: "Đơn giản", label: "nguyên tắc thiết kế bài học" },
          { value: "X10", label: "nhân rộng nhờ nội dung" },
        ],
        storyTitle: "Bài học cũng là sản phẩm",
        storyLede: "Nguyên tắc dạy học sinh ngày ấy vẫn là nguyên tắc tôi làm sản phẩm và đào tạo đội ngũ hôm nay.",
        story: [
          { kicker: "Đơn giản", title: "Cắt đến phần cốt lõi", body: "Ý nào không giúp người học làm được, ý đó bị cắt." },
          { kicker: "Có nhịp", title: "Có nhịp, có phản hồi", body: "Mục tiêu nhỏ, bài tập ngay, phản hồi nhanh để giữ động lực." },
          { kicker: "Nhân rộng", title: "Nhân rộng qua nội dung", body: "Một bài giảng tốt dạy thay bạn hàng triệu lần — đòn bẩy đầu tiên." },
        ],
        highlightsTitle: "Những gì còn dùng đến hôm nay",
        highlights: [
          { title: "Huấn luyện lãnh đạo", body: "Biến khung quản trị phức tạp thành từng bước rõ ràng cho CEO." },
          { title: "Hướng dẫn trong sản phẩm", body: "Thiết kế trải nghiệm học ngay trong phần mềm." },
          { title: "Playbook", body: "Sổ tay ngắn, có nguồn, dùng được ngay." },
        ],
        closingTitle: "Dạy là cách nhanh nhất để hiểu sâu.",
        closingBody: "Phương pháp nào tôi viết ra cũng phải dạy được. Chưa dạy được là chưa đủ đơn giản.",
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
