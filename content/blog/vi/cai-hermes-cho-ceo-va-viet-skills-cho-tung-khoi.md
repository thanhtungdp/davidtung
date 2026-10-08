---
title: "Hermes: trợ lý thực thi tự tiến hóa, không chỉ trả lời Q&A"
description: "Doanh nghiệp không cần thêm một chatbot trả lời dài hơn. CEO cần một trợ lý thực thi được việc, biết đóng gói cách làm đúng thành skill và mở rộng năng lực đó xuống Sales, Marketing, Triển khai."
date: "Jun 17 2026"
image: "/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-hero.webp"
tags: ["AI"]
---

Nhiều doanh nghiệp đang triển khai AI ở mức rất thấp: **hỏi — đáp**.

Nhân sự mở một chatbot, hỏi vài câu, copy câu trả lời, rồi tự làm tiếp phần còn lại. Nghe thì có AI. Nhưng thực tế công việc vẫn nằm trên vai con người: tự gom bối cảnh, tự tạo file, tự kiểm tra lỗi, tự gửi khách, tự nhớ lần sau phải làm thế nào.

Đó là AI ở mức **Q&A**. Chưa phải AI ở mức **job to be done** — hoàn thành một công việc.

Co-work, coding assistant, chat trong IDE hay chatbot nội bộ đều đang hỗ trợ tốt hơn trước. Nhưng nếu CEO muốn chạy AI cho nhiều phòng ban, nhiều workflow, nhiều kênh giao tiếp, và đặc biệt muốn agent thực thi trên cloud mà không cần máy tính cá nhân luôn mở, thì cần một lớp khác.

Đó là lúc Hermes đáng chú ý.

Hermes không nên được nhìn như một chatbot nữa. Hermes nên được nhìn như một **trợ lý thực thi tự tiến hóa**: biết dùng công cụ, chạy script, tạo file, kiểm tra đầu ra, ghi nhớ quy trình, và biến một lần làm đúng thành một skill để lần sau làm nhanh hơn.

## Luận điểm chính: thiết kế trợ lý như thiết kế tổ chức

![Hermes operating layer kết nối CEO, workflow và các nhóm vận hành](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-conclusion.webp)

Nếu chỉ cần trả lời câu hỏi, một chatbot là đủ.

Nhưng nếu muốn AI đi vào vận hành, CEO phải thiết kế nó như thiết kế tổ chức:

```text
CEO định nghĩa việc cần hoàn thành
→ Hermes thực thi bằng tool/script/file
→ Kết quả được kiểm tra
→ Cách làm đúng được đóng gói thành skill
→ Skill mở rộng xuống từng khối
→ Mỗi lần làm đúng trở thành năng lực lặp lại
```

Điểm khác biệt không nằm ở câu trả lời hay hơn. Điểm khác biệt nằm ở **khả năng hoàn thành việc**.

Một trợ lý thực thi tốt phải làm được ít nhất 5 việc:

1. hiểu mục tiêu và bối cảnh;
2. biết gọi đúng công cụ;
3. tạo ra output thật: file, video, báo cáo, checklist, script;
4. tự kiểm tra output;
5. học từ lần làm đúng để lần sau chạy lại tốt hơn.

Đây là chỗ Hermes khác một chatbot Q&A thông thường.

## Vì sao doanh nghiệp đang kẹt ở Q&A, chưa tới job to be done

![Doanh nghiệp cần đi từ hỏi đáp sang hoàn thành công việc bằng AI](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-hero.webp)

Phần lớn doanh nghiệp bắt đầu AI bằng câu hỏi:

> “Nhân viên nên dùng ChatGPT làm gì?”

Câu hỏi đó không sai. Nhưng nó dễ dẫn đến một kiểu triển khai rất rời rạc:

- Marketing dùng để viết caption;
- Sales dùng để soạn email;
- Triển khai dùng để hỏi lỗi;
- CEO dùng để brainstorm;
- mỗi người một kiểu, không skill, không QA, không chuẩn output.

Kết quả là AI giúp từng cá nhân nhanh hơn một chút, nhưng **tổ chức không thông minh hơn đáng kể**.

Muốn đi xa hơn, câu hỏi phải đổi thành:

> “Công việc nào cần được hoàn thành từ đầu đến cuối?”

Ví dụ:

| Q&A | Job to be done |
|---|---|
| Viết vài ý tưởng video | Tạo script, visual spec, voice, subtitle, render, QA, caption |
| Soạn nội dung báo giá | Tạo DOCX, PDF, mã báo giá, QR thanh toán, gửi file |
| Hỏi lỗi server | Đọc log, đề xuất lệnh kiểm tra, sửa lỗi, viết checklist lần sau |
| Tóm tắt cuộc họp | Chốt quyết định, phân việc, tạo checklist, theo dõi follow-up |

Q&A là bước đầu. Nhưng CEO cần Hermes ở bước sau: **việc được giao phải có đầu ra hoàn chỉnh**.

## Hermes phù hợp khi CEO muốn agent chạy như một môi trường thực thi

![Môi trường Hermes kết nối terminal, messaging, cloud gateway và tool execution](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-install.webp)

Một chatbot thường chỉ sống trong khung chat.

Hermes có thể sống ở nhiều môi trường hơn:

- terminal;
- Telegram hoặc các kênh nhắn tin;
- server/cloud;
- repo code;
- file system;
- workflow có script;
- tool tìm kiếm, tạo ảnh, tạo voice, kiểm tra video, đọc screenshot.

Điểm quan trọng là: CEO không phải lúc nào cũng muốn mở máy cá nhân để chạy từng tác vụ. Với một agent chạy được qua gateway hoặc trên server, CEO có thể giao việc từ chat, còn môi trường thực thi nằm ở cloud/server.

Nếu muốn tự cài và thử, có thể bắt đầu từ tài liệu chính thức của Hermes tại [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs) hoặc repository [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent). Lệnh cài nhanh:

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Sau khi cài:

```bash
hermes setup
hermes model
hermes doctor
```

Về model, cách dễ nhất cho người mới là dùng **OpenRouter** vì một API key có thể thử nhiều model khác nhau và đổi model nhanh theo nhu cầu. Nếu doanh nghiệp đã có API riêng thì vẫn gắn trực tiếp được: có **Claude API** thì dùng Anthropic, có **ChatGPT/OpenAI API** thì dùng OpenAI. Cách chọn thực dụng:

| Tình huống | Gợi ý |
|---|---|
| Muốn bắt đầu nhanh, thử nhiều model | OpenRouter |
| Đã có Claude API, cần reasoning tốt | Anthropic / Claude |
| Đã có OpenAI API, cần hệ sinh thái ChatGPT/OpenAI | OpenAI |
| Có endpoint nội bộ hoặc proxy riêng | Custom provider |

CEO không cần khóa mình vào một model. Hermes nên được cấu hình để đổi model theo việc: việc chiến lược dùng model mạnh, việc lặp lại dùng model nhanh/rẻ hơn.

Ví dụ:

```text
Anh gửi yêu cầu qua Telegram.
Hermes nhận việc.
Hermes đọc file/template cần thiết.
Hermes chạy script.
Hermes tạo DOCX/PDF/video.
Hermes kiểm tra output.
Hermes gửi lại kết quả.
```

Đây là cách tiếp cận đúng hơn cho doanh nghiệp: AI không chỉ là nơi hỏi đáp, mà là một **lớp thực thi** nằm giữa con người, dữ liệu, công cụ và quy trình.

## Năng lực tự tiến hóa: Hermes học từ cách làm đúng

![Skill modules giúp Hermes đóng gói cách làm đúng thành năng lực lặp lại](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-skills.webp)

Điểm đáng giá của Hermes không chỉ là “biết dùng tool”.

Điểm đáng giá hơn là: khi một việc đã được làm đúng, Hermes có thể đóng gói cách làm đó thành **skill**.

Skill không nên hiểu là tài liệu kỹ thuật khô cứng. Với CEO, skill nên được hiểu đơn giản là:

> “Cách công ty mình muốn AI làm một việc cụ thể.”

Ví dụ:

- cách tạo báo giá chuẩn;
- cách dựng một video reel đúng tone CEO;
- cách viết blog từ một video/script;
- cách kiểm tra server sau triển khai;
- cách import một bài viết vào website;
- cách tạo báo cáo tuần cho ban điều hành.

Lần đầu Hermes làm việc, CEO có thể chỉnh qua lại. Lần thứ hai, Hermes tối ưu. Khi cách làm đã ổn, CEO yêu cầu:

```text
Cách làm này ổn rồi. Đóng gói thành skill để lần sau chạy lại.
```

Từ đó, agent không chỉ trả lời trong một phiên chat. Nó bắt đầu tích lũy năng lực vận hành.

Đây là ý “tự tiến hóa” quan trọng: AI agent không tự nhiên giỏi hơn bằng phép màu. Nó giỏi hơn vì tổ chức biết biến kinh nghiệm đúng thành skill có thể tái sử dụng.

## Kiến trúc chuyên sâu, nhưng CEO không cần biết quá nhiều kỹ thuật

![Hermes giúp CEO thiết kế agent bằng ngôn ngữ tự nhiên thay vì phải biết sâu kỹ thuật](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-guardrails.webp)

Đằng sau Hermes có nhiều thứ kỹ thuật: model provider, toolsets, terminal, memory, gateway, file system, cron, skills, plugins.

Nhưng CEO không cần bắt đầu bằng tất cả khái niệm đó.

CEO chỉ cần học một cách giao việc đúng:

```text
Đây là việc cần hoàn thành.
Đây là đầu vào.
Đây là đầu ra mong muốn.
Đây là cách kiểm tra.
Nếu làm ổn, hãy đóng gói thành skill.
```

Phần còn lại Hermes có thể được hướng dẫn dần bằng ngôn ngữ tự nhiên.

Điểm này rất quan trọng. Vì nếu triển khai AI mà bắt CEO hoặc trưởng phòng hiểu quá nhiều kỹ thuật ngay từ đầu, dự án sẽ chậm. Ngược lại, nếu cho họ giao việc bằng ngôn ngữ tự nhiên, rồi để agent tự đề xuất workflow, tự tạo script, tự đóng gói skill, tổ chức sẽ học nhanh hơn.

Không phải không cần kỹ thuật. Mà là kỹ thuật nên nằm phía sau để hỗ trợ vận hành, không trở thành rào cản cho người dùng doanh nghiệp.

## Kịch bản 1: từ một yêu cầu báo giá ngẫu nhiên đến skill báo giá

![Workflow báo giá: từ yêu cầu tự nhiên đến file DOCX, PDF, QR và batch](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-quote.webp)

Thay vì dạy đội ngũ viết file skill ngay từ đầu, CEO có thể bắt đầu bằng một việc thật.

Ví dụ Sales gửi:

```text
Tạo giúp anh báo giá cho khách Công ty Minh Anh.
Khách cần 20 gói phần mềm triển khai trong 12 tháng.
Dùng template báo giá hiện tại.
Xuất DOCX và PDF.
Thêm QR thanh toán.
```

Hermes nên làm việc theo hướng thực thi:

```text
Em sẽ kiểm tra template báo giá hiện có,
chuẩn hóa thông tin khách hàng,
tạo mã báo giá,
điền dữ liệu vào DOCX,
export PDF,
tạo QR thanh toán,
rồi gửi lại cả hai file để anh kiểm tra.
```

Sau lần chạy đầu tiên, CEO không nên vội đóng gói skill ngay. Hãy hỏi tiếp:

```text
Em tự review lại quy trình vừa làm.
Có bước nào đang thủ công, dễ lỗi, hoặc có thể tối ưu cho lần sau không?
```

Hermes có thể phát hiện:

- thiếu rule đặt mã báo giá;
- cần chuẩn hóa tên khách hàng;
- cần kiểm tra tổng tiền;
- cần verify QR;
- cần export PDF từ DOCX thay vì tạo song song;
- nếu nhiều khách thì nên chạy batch.

Sau khi tối ưu, CEO hỏi tiếp:

```text
Nếu lần sau anh chỉ gửi tên khách hàng và line items,
em cần hỏi thêm thông tin gì để tạo báo giá chuẩn?
```

Đây là bước biến một tác vụ ngẫu nhiên thành quy trình có cấu trúc.

Cuối cùng, khi cách làm đã ổn:

```text
Đóng gói quy trình này thành skill tạo báo giá.
Skill cần nhớ:
- dùng template hiện tại
- mã báo giá theo quy ước công ty
- luôn xuất DOCX trước rồi export PDF
- có QR thanh toán
- nếu có nhiều khách thì chạy batch
- xong báo giá nào gửi báo giá đó, không đợi cả batch
```

CEO không cần viết `SKILL.md` bằng tay. CEO chỉ cần dẫn Hermes qua một chuỗi hội thoại đủ rõ để agent tự thiết kế skill.

## Kịch bản 2: từ ý tưởng video đến skill sản xuất nội dung

![Workflow video: ý tưởng, storyboard, voice, subtitle, render, QA và caption](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-video.webp)

Một ví dụ khác là sản xuất video.

CEO giao việc:

```text
Làm cho anh một video reel tiếng Việt về Hermes cho CEO.
Hook phải mạnh, có logo Hermes, có giả lập chat tạo báo giá và tạo video,
CTA kéo sang blog chi tiết.
```

Hermes không nên render ngay. Nó nên phản hồi bằng plan:

```text
Em sẽ làm theo 5 bước:
1. Viết script để anh duyệt.
2. Viết visual animation spec.
3. Dựng video bằng Remotion.
4. Tạo voice và subtitle từ cùng transcript.
5. Render, QA contact sheet, rồi gửi MP4.
```

Sau khi có bản đầu, CEO review:

```text
Voice và transcript đã ổn, nhưng timeline scene chưa khớp.
Em sửa lại theo transcript thật, không theo storyboard ước lượng.
```

Hermes phải tự rút rule:

```text
Scene boundary phải map theo VTT/transcript.
Không được cắt scene theo cảm giác.
Khi speed audio thì subtitle timing phải scale theo.
```

Khi bản video đã ổn, CEO yêu cầu:

```text
Lưu cách làm này thành skill sản xuất video CEO.
Lần sau phải nhớ: script duyệt trước, visual spec chi tiết,
voice và subtitle cùng source, render xong phải QA contact sheet.
```

Đây chính là tự tiến hóa trong thực tế: không phải model tự nhiên thông minh hơn, mà workflow của tổ chức được đóng gói tốt hơn sau mỗi lần làm.

## Mở rộng xuống Sales, Marketing, Triển khai

![Các phòng ban có bộ skill riêng nhưng cùng chạy trên một lớp Hermes operating system](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-departments.webp)

Sau khi CEO đã có vài skill ổn, mới nên mở rộng xuống các khối.

Đừng phát một chatbot giống nhau cho tất cả.

Mỗi khối có job to be done khác nhau, nên cần skill khác nhau.

### Sales

Sales cần Hermes giúp rút ngắn đường đi từ nhu cầu đến đề xuất.

Các skill nên có:

- tạo báo giá;
- tóm tắt lịch sử khách hàng;
- đề xuất bước tiếp theo;
- chuẩn hóa follow-up;
- soạn email hoặc tin nhắn chăm sóc khách.

Một câu giao việc tốt:

```text
Đọc lịch sử trao đổi với khách này.
Tóm tắt nhu cầu, rủi ro deal, bước tiếp theo.
Sau đó tạo follow-up ngắn, giọng chuyên nghiệp, không dài dòng.
```

### Marketing

Marketing cần Hermes giúp biến insight thành nội dung có thể xuất bản.

Các skill nên có:

- viết script reel;
- chuyển blog thành carousel;
- tạo landing page outline;
- tạo visual brief;
- dựng video;
- viết caption theo giọng thương hiệu;
- đo phản hồi để rút insight.

Một câu giao việc tốt:

```text
Biến bài blog này thành 5 ý tưởng reel.
Mỗi ý tưởng gồm hook, key message, visual metaphor, CTA và caption ngắn.
Ưu tiên giọng CEO, thực chiến, không sáo rỗng.
```

### Triển khai

Triển khai cần Hermes giúp giảm lỗi lặp lại.

Các skill nên có:

- checklist cài đặt;
- script setup server;
- kiểm tra log lỗi;
- viết restore docs;
- health check;
- runbook bàn giao.

Một câu giao việc tốt:

```text
Dựa trên log lỗi này, phân tích nguyên nhân có khả năng nhất.
Sau đó đề xuất lệnh kiểm tra, cách fix,
và viết lại thành checklist để lần sau đội triển khai chạy lại.
```

Nếu mỗi khối đều có skill riêng, Hermes không còn là “một con chatbot chung chung”. Nó trở thành một lớp vận hành có khả năng học theo từng phòng ban.

## Lộ trình 30 ngày cho CEO

![Roadmap 30 ngày để CEO triển khai Hermes từ workflow cá nhân đến skill library](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-roadmap.webp)

Nếu muốn bắt đầu gọn, tôi sẽ đi theo lộ trình này.

### Tuần 1: Dùng Hermes cho việc của CEO

Chọn 3 việc thật:

1. tóm tắt bối cảnh và dọn bàn quyết định;
2. tạo một output có file thật;
3. biến một ý tưởng thành workflow có QA.

Mục tiêu tuần 1 không phải là triển khai toàn công ty. Mục tiêu là để CEO hiểu Hermes nên được giao việc như thế nào.

### Tuần 2: Tạo 2–3 skill đầu tiên từ việc đã làm

Không viết skill từ phòng họp.

Hãy tạo skill từ việc thật đã chạy qua ít nhất một lần:

- báo giá;
- video/reel;
- blog;
- báo cáo tuần;
- review kế hoạch;
- kiểm tra triển khai.

Sau mỗi việc, hỏi:

```text
Quy trình này tối ưu chưa?
Nếu lần sau chạy lại, em cần nhớ những rule nào?
Đóng gói thành skill giúp anh.
```

### Tuần 3: Mở rộng cho một phòng ban

Chọn một khối có workflow rõ nhất.

- Sales nếu đang mất thời gian ở báo giá/follow-up.
- Marketing nếu đang cần sản xuất nội dung đều hơn.
- Triển khai nếu đang lặp lại lỗi kỹ thuật/tài liệu.

Đừng mở rộng ồ ạt. Mở rộng bằng một job to be done cụ thể.

### Tuần 4: Tạo thư viện skill nội bộ

Bắt đầu tổ chức lại skill library:

```text
CEO
- decision-briefing
- video-production
- blog-writing

Sales
- quotation-generation
- follow-up-assistant
- customer-history-summary

Marketing
- reel-production
- landing-page-outline
- content-repurposing

Triển khai
- server-checklist
- log-debugging
- restore-docs
```

Mỗi skill nên có owner, ngày cập nhật và checklist QA.

## Guardrails: tự tiến hóa nhưng không tự tung tự tác

![Guardrails cho AI agent: approval, audit, permission, QA và secret boundary](/blog/cai-hermes-cho-ceo-va-viet-skills-cho-tung-khoi/ai-guardrails.webp)

Hermes có thể dùng tool và chạy script, nên phải có nguyên tắc quản trị.

Tối thiểu cần 5 rule:

1. Không đưa API key, password, token vào prompt.
2. Việc có side effect như gửi email, xóa file, deploy, gửi báo giá cần phạm vi rõ ràng.
3. Output quan trọng phải có QA: file path, log, screenshot, contact sheet, test result.
4. Skill sai phải sửa ngay, không để skill trở thành tài liệu chết.
5. Con người vẫn giữ quyền duyệt ở các điểm rủi ro.

AI agent càng thực thi được nhiều, guardrails càng quan trọng.

Không phải để làm chậm. Mà để tổ chức tin được vào kết quả.

## Kết luận: Hermes không phải chatbot, Hermes là năng lực vận hành

Một chatbot tốt giúp trả lời nhanh hơn.

Một trợ lý thực thi tốt giúp công ty làm việc đúng hơn.

Hermes đáng giá ở chỗ nó không dừng ở Q&A. Nó có thể đi tiếp đến job to be done:

```text
Nhận yêu cầu
→ hiểu bối cảnh
→ dùng tool
→ tạo output
→ kiểm tra
→ đóng gói skill
→ lần sau làm tốt hơn
```

Nếu CEO chỉ xem Hermes như một chỗ hỏi đáp, giá trị sẽ nhỏ.

Nếu CEO thiết kế Hermes như một lớp operating system cho tổ chức, giá trị sẽ lớn hơn nhiều.

Bắt đầu từ CEO. Chạy một việc thật. Tối ưu qua hội thoại. Đóng gói thành skill. Sau đó mới mở rộng xuống Sales, Marketing và Triển khai.

Đừng triển khai AI kiểu “ai thích thì dùng”.

Hãy thiết kế trợ lý như thiết kế tổ chức.
