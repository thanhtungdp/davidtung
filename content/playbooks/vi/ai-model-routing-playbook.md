---
title: "AI Model Routing — Lựa chọn model AI cho AI Agent"
description: "Claude, ChatGPT/OpenAI, GLM, Kimi và DeepSeek — nhìn theo vai trò vận hành, không theo bảng xếp hạng. Năng suất không đến từ một model mạnh, nó đến từ một hệ thống phân công thông minh."
date: "2026-08-08"
series: "CẨM NANG 08/2026"
pages: 13
pdf: "/playbooks/AI-Model-Routing-Playbook-David-Tung.pdf"
image: "/playbooks/ai-model-routing-cover.webp"
summary: ["Đừng dùng model đắt tiền cho công việc đơn giản. Chi phí model chỉ là phần nổi — chi phí thật là chi phí để hoàn thành một kết quả đạt chuẩn.", "Năm nhóm model trọng tâm, bốn chế độ công việc: sáng tạo, chiến lược, suy luận sâu, lặp lại quy mô lớn.", "Quy tắc nâng cấp: chỉ chuyển lên model đắt hơn khi độ mơ hồ, hậu quả sai hoặc yêu cầu tự chủ tăng.", "Mẫu thực thi: model nhanh làm phần lớn công việc → model cân bằng xử lý trường hợp khó → model cao cấp hoặc con người duyệt quyết định quan trọng."]
keyTakeaway: "Không tìm model tốt nhất. Hãy thiết kế một hệ thống biết dùng đúng bộ não cho đúng loại công việc."
toc: [{"id": "01", "title": "Vấn đề thật sự", "description": "Model mạnh nhất vẫn có thể là lựa chọn tệ — chi phí thật là chi phí cho một kết quả đạt yêu cầu"}, {"id": "02", "title": "Cách chọn trong 5 bước", "description": "Chọn bộ não theo bản chất tác vụ: rõ hay mơ hồ, sai có đắt không, sáng tạo hay nhất quán"}, {"id": "03", "title": "Claude & OpenAI", "description": "Nhóm mạnh nhất: chất lượng cao, giá cao — Claude Opus 5, GPT-5.6 Sol"}, {"id": "04", "title": "GLM, Kimi, DeepSeek", "description": "Nhóm cân bằng & tiết kiệm — Kimi K3, DeepSeek V4 Pro, GLM"}, {"id": "05", "title": "Ma trận chọn model", "description": "Theo tác vụ: sáng tạo, chiến lược, suy luận sâu, lặp lại quy mô lớn"}, {"id": "06", "title": "Playbook theo tác vụ", "description": "Mẫu thực thi: route by risk, not by hype"}, {"id": "07", "title": "Kiến trúc Hermes Agent", "description": "Cách Hermes điều phối nhiều model trong một pipeline"}, {"id": "08", "title": "Lộ trình triển khai", "description": "Từ zero đến hệ thống multi-model routing"}]
topic: "AI Agent"
audience: ["CEO", "Đội vận hành"]
tint: "sky"
cover: "rings"
---

## Vấn đề thật sự

Nếu dùng model cao cấp cho mọi việc, doanh nghiệp mua sự yên tâm bằng chi phí và độ trễ. Nếu dùng model rẻ cho mọi việc, doanh nghiệp tiết kiệm token nhưng trả bằng rework, sai quyết định và giám sát thủ công.

## Cách chọn trong 5 bước

1. **Tác vụ rõ hay mơ hồ?** Rõ tiêu chí đầu ra → model nhanh/rẻ. Mơ hồ, cần đặt lại vấn đề → model chiến lược.
2. **Sai một lần có đắt không?** Nội dung nháp có thể sửa; quyết định giá, pháp lý, bảo mật cần model mạnh + kiểm tra.
3. **Cần sáng tạo hay tính nhất quán?** Sáng tạo cần không gian khám phá. Tác vụ lặp lại cần định dạng, nhiệt độ thấp, eval.
4. **Cần đọc bao nhiêu ngữ cảnh?** Đừng nhét mọi dữ liệu vào lời giao việc. Ngữ cảnh càng dài càng cần chọn lọc.
5. **Có dùng công cụ và hành động thật không?** Agent gọi công cụ cần tuân thủ format, biết dừng, phục hồi lỗi.

## Nguyên tắc cốt lõi

Một model có thể làm nhiều việc, nhưng "làm được" không đồng nghĩa "nên giao". Chọn theo mức rủi ro, độ mơ hồ, chi phí sửa sai và tần suất lặp.
