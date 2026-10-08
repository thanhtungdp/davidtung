---
title: "CRM Agentic vs Truyền Thống"
description: "Hai thế hệ CRM đang tồn tại song song. Một loại coi con người là bộ nhập liệu và AI là cái hộp chat gắn thêm. Loại kia coi agent là người vận hành chính, còn CRM chỉ là nơi agent lưu lại những gì nó đã xác minh. Sự khác biệt không nằm ở tính năng — nó nằm ở ai là chủ thể thao tác."
date: "2026-08-07"
series: "VOL.01"
pages: 13
pdf: "/playbooks/CRM-Agentic-vs-Truyen-Thong.pdf"
image: "/playbooks/crm-agentic-cover.webp"
summary: ["Mọi CRM đều hứa pipeline sạch, dự báo chuẩn, khách không rơi. Điều kiện để lời hứa đó đúng là: có người chịu ngồi nhập đủ và nhập đúng.", "Gắn một hộp chat vào cạnh form nhập liệu không đổi được mô hình vận hành. Mô hình agentic đảo ngược quan hệ: agent chạy trước, con người chỉ xử lý phần agent không dám tự quyết.", "MCP chuẩn hoá cách một AI assistant khám phá và gọi công cụ của hệ thống bên ngoài. Nếu CRM có MCP, anh không cần build 'tính năng chat với CRM'.", "Với doanh nghiệp nhỏ và Solo CEO, luận điểm an toàn là: agent đọc và soạn thảo, con người duyệt trước khi ghi."]
keyTakeaway: "Một ô dữ liệu sai nhưng trông tự tin còn tệ hơn một ô để trống — vì không ai biết nó sai."
toc: [{"id": "01", "title": "Hai mô hình, một khác biệt gốc", "description": "Ai là chủ thể thao tác: con người hay agent"}, {"id": "02", "title": "Giải phẫu CRM truyền thống — Odoo CRM", "description": "ORM, form, quyền, và cái giá của việc mở API"}, {"id": "03", "title": "Twenty — CRM hiện đại, MCP-native", "description": "REST + GraphQL + MCP server, Claude skills, Codex plugin"}, {"id": "04", "title": "Comp AI CRM — agentic-first thuần", "description": "Agent là một deployment riêng, có lịch riêng, có hàng đợi riêng"}, {"id": "05", "title": "Bảng so sánh 3 chiều", "description": "18 tiêu chí, có chú giải màu, có ô \\\"chưa xác minh\\\""}, {"id": "06", "title": "MCP — lớp tích hợp quyết định cuộc chơi", "description": "Vì sao \\\"dễ cắm vào Hermes / ChatGPT / Claude\\\" là lợi thế cấu trúc"}, {"id": "07", "title": "Bối cảnh: ông lớn tự phá giao diện của mình", "description": "Agentforce, Headless 360, Agent 365 — và số liệu thật kèm nguồn"}, {"id": "08", "title": "Mặt trái không ai in lên brochure", "description": "Prompt injection, lỗ hổng MCP, ghi sai tự tin, dữ liệu rác"}, {"id": "09", "title": "Chọn cái nào — ma trận theo bối cảnh", "description": "Khi nào Odoo vẫn đúng, khi nào agentic thắng, khi nào chạy song song"}, {"id": "10", "title": "Lộ trình 4 tuần cho Solo CEO", "description": "Từ zero tới agent tự cập nhật pipeline, mỗi tuần mở thêm một mức quyền"}, {"id": "11", "title": "Nguồn & những gì không xác minh được", "description": "Toàn bộ URL, ngày truy xuất, và các khoảng trống thừa nhận"}]
topic: "Sales & CRM"
audience: ["Đội Sales", "CEO"]
tint: "mint"
cover: "waves"
---

## Luận đề

**CRM không thất bại vì thiếu tính năng. Nó thất bại vì trống dữ liệu.**

Mọi CRM đều hứa pipeline sạch, dự báo chuẩn, khách không rơi. Điều kiện để lời hứa đó đúng là: có người chịu ngồi nhập đủ và nhập đúng. Đó là điều kiện gần như không bao giờ được thoả — và với Solo CEO thì "người đó" chính là anh.

## Không phải "có AI" hay "không AI". Là ai ngồi ghế lái.

Gắn một hộp chat vào cạnh form nhập liệu không đổi được mô hình vận hành. Người dùng vẫn phải mở CRM, vẫn phải quyết định điền gì, vẫn là nút thắt. Mô hình agentic đảo ngược quan hệ: agent chạy trước, con người chỉ xử lý phần agent không dám tự quyết.

## Vì sao MCP là cái ổ cắm quyết định

Model Context Protocol chuẩn hoá cách một AI assistant khám phá và gọi công cụ của hệ thống bên ngoài. Một server MCP khai báo tool của mình; client nào nói MCP cũng dùng được — không phải viết lại tích hợp cho từng nơi.

Nếu CRM có MCP, anh không cần build "tính năng chat với CRM". Anh trỏ Hermes hoặc Claude vào endpoint MCP đó, và toàn bộ khả năng hỏi/ghi xuất hiện ngay trong Telegram — nơi anh vốn đã ở sẵn.

## Kết luận vận hành

Với doanh nghiệp nhỏ và Solo CEO, luận điểm an toàn là: agent đọc và soạn thảo, con người duyệt trước khi ghi. Đúng như cách Comp AI CRM thiết kế — bằng chứng mạnh thì ghi, bằng chứng yếu thì thành gợi ý. Toàn quyền ghi tự động là bước sau, sau khi anh đã thấy agent làm đúng vài trăm lần và có audit log để soi lại.
