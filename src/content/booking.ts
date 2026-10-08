import type { Locale } from "@/i18n/config";

export type Question =
  | { id: string; type: "text" | "email" | "tel"; title: string; help?: string; placeholder: string; required: boolean }
  | { id: string; type: "textarea"; title: string; help?: string; placeholder: string; required: boolean }
  | { id: string; type: "choice" | "multi"; title: string; help?: string; options: string[]; required: boolean };

type BookingCopy = {
  title: string;
  lede: string;
  start: string;
  duration: string;
  pressEnter: string;
  ok: string;
  required: string;
  invalidEmail: string;
  chooseMany: string;
  optional: string;
  back: string;
  next: string;
  reviewTitle: string;
  reviewLede: string;
  edit: string;
  submit: string;
  sending: string;
  error: string;
  doneTitle: string;
  doneBody: string;
  doneMailto: string;
  calendar: string;
  home: string;
  questions: Question[];
};

export const booking: Record<Locale, BookingCopy> = {
  vi: {
    title: "Đặt lịch trao đổi 30 phút với David",
    lede: "Trả lời vài câu hỏi ngắn để buổi trao đổi đi thẳng vào điểm ma sát lớn nhất của doanh nghiệp bạn.",
    start: "Bắt đầu",
    duration: "Mất khoảng 2 phút",
    pressEnter: "nhấn Enter ↵",
    ok: "OK",
    required: "Vui lòng trả lời câu này",
    invalidEmail: "Email chưa đúng định dạng",
    chooseMany: "Chọn một hoặc nhiều",
    optional: "Không bắt buộc",
    back: "Câu trước",
    next: "Câu tiếp",
    reviewTitle: "Kiểm tra lại thông tin",
    reviewLede: "Bấm vào câu bất kỳ để sửa.",
    edit: "Sửa",
    submit: "Gửi & đặt lịch",
    sending: "Đang gửi…",
    error: "Chưa gửi được, bạn thử lại giúp mình nhé.",
    doneTitle: "Cảm ơn {name}! 🎉",
    doneBody: "David đã nhận thông tin và sẽ liên hệ xác nhận lịch trong vòng 24 giờ làm việc.",
    doneMailto: "Ứng dụng email của bạn sẽ mở với nội dung đã điền sẵn — bấm Gửi để hoàn tất.",
    calendar: "Chọn giờ trên lịch ngay",
    home: "Về trang chủ",
    questions: [
      { id: "name", type: "text", title: "Chào bạn 👋 Mình nên gọi bạn là gì?", placeholder: "Họ và tên", required: true },
      { id: "email", type: "email", title: "Email để David gửi lịch hẹn cho {name}?", placeholder: "ten@congty.vn", required: true },
      { id: "phone", type: "tel", title: "Số điện thoại hoặc Zalo?", help: "Không bắt buộc — tiện khi cần đổi lịch gấp.", placeholder: "09xx xxx xxx", required: false },
      { id: "company", type: "text", title: "Bạn đang ở công ty nào, vai trò gì?", placeholder: "VD: ACME · CEO", required: true },
      { id: "size", type: "choice", title: "Đội ngũ của bạn có bao nhiêu người?", options: ["1–10", "11–50", "51–200", "Trên 200"], required: true },
      {
        id: "interests",
        type: "multi",
        title: "Bạn quan tâm đến giải pháp nào?",
        help: "Chọn một hoặc nhiều",
        options: ["Simplamo OS · OKR/BSC/KPI", "Sale AI cho đội bán hàng", "Hermes AI Team", "IoT & dữ liệu vận hành", "Dashboard điều hành", "Coaching lãnh đạo", "Đào tạo đội ngũ", "Khác"],
        required: true,
      },
      { id: "challenge", type: "textarea", title: "Thách thức lớn nhất của bạn lúc này là gì?", help: "Shift + Enter để xuống dòng.", placeholder: "Kể ngắn gọn bối cảnh và điều bạn muốn thay đổi…", required: true },
      { id: "timeline", type: "choice", title: "Bạn muốn bắt đầu khi nào?", options: ["Ngay trong tháng này", "Trong 1–3 tháng", "Trong 3–6 tháng", "Đang tìm hiểu"], required: true },
      { id: "format", type: "choice", title: "Bạn muốn trao đổi theo hình thức nào?", options: ["Google Meet", "Gọi Zalo", "Gặp trực tiếp tại TP.HCM"], required: true },
      { id: "slot", type: "choice", title: "Khung giờ nào tiện cho bạn?", options: ["Sáng (9h–12h)", "Chiều (14h–17h)", "Tối (19h–21h)"], required: true },
    ],
  },
  en: {
    title: "Book a 30-minute call with David",
    lede: "Answer a few quick questions so the conversation goes straight to the biggest point of friction in your business.",
    start: "Start",
    duration: "Takes about 2 minutes",
    pressEnter: "press Enter ↵",
    ok: "OK",
    required: "Please answer this question",
    invalidEmail: "That email doesn't look right",
    chooseMany: "Choose as many as you like",
    optional: "Optional",
    back: "Previous",
    next: "Next",
    reviewTitle: "Review your answers",
    reviewLede: "Click any answer to edit it.",
    edit: "Edit",
    submit: "Send & book",
    sending: "Sending…",
    error: "Couldn't send that — please try again.",
    doneTitle: "Thanks, {name}! 🎉",
    doneBody: "David has your details and will confirm a time within one business day.",
    doneMailto: "Your email app will open with everything filled in — just hit Send.",
    calendar: "Pick a time on the calendar",
    home: "Back to home",
    questions: [
      { id: "name", type: "text", title: "Hi there 👋 What should we call you?", placeholder: "Full name", required: true },
      { id: "email", type: "email", title: "Where should David send the invite, {name}?", placeholder: "name@company.com", required: true },
      { id: "phone", type: "tel", title: "Phone or WhatsApp/Zalo?", help: "Optional — handy if the schedule changes.", placeholder: "+84 9xx xxx xxx", required: false },
      { id: "company", type: "text", title: "Which company are you with, and what's your role?", placeholder: "e.g. ACME · CEO", required: true },
      { id: "size", type: "choice", title: "How big is your team?", options: ["1–10", "11–50", "51–200", "200+"], required: true },
      {
        id: "interests",
        type: "multi",
        title: "Which solutions are you interested in?",
        help: "Choose as many as you like",
        options: ["Simplamo OS · OKR/BSC/KPI", "Sale AI for sales teams", "Hermes AI Team", "IoT & operating data", "Executive dashboards", "Leadership coaching", "Team training", "Other"],
        required: true,
      },
      { id: "challenge", type: "textarea", title: "What's your biggest challenge right now?", help: "Shift + Enter for a new line.", placeholder: "Share a bit of context and what you'd like to change…", required: true },
      { id: "timeline", type: "choice", title: "When would you like to start?", options: ["This month", "In 1–3 months", "In 3–6 months", "Just exploring"], required: true },
      { id: "format", type: "choice", title: "How would you like to meet?", options: ["Google Meet", "Zalo / WhatsApp call", "In person in Ho Chi Minh City"], required: true },
      { id: "slot", type: "choice", title: "Which time of day works best?", options: ["Morning (9–12)", "Afternoon (2–5pm)", "Evening (7–9pm)"], required: true },
    ],
  },
};
