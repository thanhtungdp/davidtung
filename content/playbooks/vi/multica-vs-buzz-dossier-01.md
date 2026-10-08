---
title: "Multica vs Buzz — Một người, nhiều agent"
description: "Hai nền tảng mã nguồn mở để điều phối một đội agent chạy song song, mổ ra theo kiến trúc, mô hình vận hành và chi phí token. Kèm phương án thứ ba: dựng mô hình tương tự bằng Hermes Agent trên Telegram group."
date: "2026-08-07"
series: "DOSSIER 01"
pages: 12
pdf: "/playbooks/Multica-vs-Buzz-Dossier-01.pdf"
summary: ["Hai nền tảng giải cùng một nhu cầu — một người điều phối nhiều agent chạy song song nhiều dự án — nhưng chọn hai đơn vị nguyên thuỷ khác nhau. Chọn sai đơn vị nguyên thuả là chọn sai nền tảng.", "Multica: đơn vị nguyên thuỷ là issue. Buzz: đơn vị nguyên thuỷ là event có chữ ký. Cả hai đều đã có mặt trong hệ Hermes.", "Multica hiển thị token usage theo từng run, agent, issue — thấy run nào đắt và cắt đúng chỗ.", "Buzz: mọi thao tác là event Nostr ký số, audit log hash-chain, danh tính bằng keypair."]
keyTakeaway: "Chọn sai đơn vị nguyên thuỷ là chọn sai nền tảng — Multica coi việc là ticket, Buzz coi việc là event có chữ ký."
toc: [{"id": "01", "title": "Kết luận trước, bằng chứng sau", "description": "Hai nền tảng, hai đơn vị nguyên thuỷ, ba câu hỏi quyết định"}, {"id": "02", "title": "Multica — hồ sơ kỹ thuật", "description": "Multiplexed Information and Computing Agent, Go backend, 44k+ star"}, {"id": "03", "title": "Multica — điều phối nhiều agent", "description": "Squad, autopilot, ranh giới dữ liệu, self-host"}, {"id": "04", "title": "Buzz — hồ sơ kỹ thuật", "description": "Workspace self-host, relay Nostr, Rust, Apache-2.0"}, {"id": "05", "title": "Buzz — vận hành và workflow", "description": "Channel, workflow trigger, audit hash-chain, giới hạn repo tự thừa nhận"}, {"id": "06", "title": "Bảng so sánh 14 tiêu chí", "description": "Đọc được cả khi in đen trắng"}, {"id": "07", "title": "Token đi đâu — bảy đòn tiết kiệm", "description": "Dựa trên tài liệu, không suy diễn"}, {"id": "08", "title": "Phương án thứ ba: Hermes Agent + Telegram group", "description": "Không buộc phải chọn một — có đường ghép cả ba"}, {"id": "09", "title": "Lộ trình 30 ngày", "description": "Từ zero đến đội agent chạy song song"}, {"id": "10", "title": "Nguồn & những gì không xác minh được", "description": "Mọi con số đều dẫn nguồn, kèm danh sách khoảng trống"}]
topic: "Công cụ"
audience: ["Nhà sáng lập", "Đội vận hành"]
tint: "rose"
cover: "dots"
---

## Kết luận trước, bằng chứng sau

Hai nền tảng giải cùng một nhu cầu — một người điều phối nhiều agent chạy song song nhiều dự án — nhưng chọn hai đơn vị nguyên thuỷ khác nhau. Multica: đơn vị nguyên thuỷ là issue. Buzz: đơn vị nguyên thuả là event có chữ ký.

## Ba câu hỏi quyết định

1. Việc của bạn có hình dạng "ticket"? Nếu công việc chia được thành phần rời, có tiêu chí xong, Multica đúng hình dạng.
2. Bạn cần audit tới mức nào? Buzz cho hash-kiểm chứng và chữ ký số trên từng event. Multica trả lời "tốn bao nhiêu"; Buzz trả lời "ai ký, không sửa được".
3. Bạn chịu được bao nhiêu đầu việc rời? Multica ở nhịp release gần như hằng ngày nhưng giấy phép không phải OSI thuần.

## Phương án thứ ba

Cả hai đều đã có mặt trong hệ Hermes. Multica coi hermes là một trong 20 agent CLI chạy được, còn Hermes coi Buzz là một kênh messaging chính thức. Nghĩa là bạn không buộc phải chọn một — có đường ghép cả ba.
