# Chặng 2 — Three Solution Options (Day 18)

Ba phương án cùng giải quyết một mục tiêu: giúp Learner gỡ lỗi bài Prompt Engineering sớm hơn và giúp Trợ giảng hỗ trợ đúng lúc, đúng người. Bối cảnh chung là Lab tối ưu prompt phân tích cảm xúc với đầu ra JSON.

## Những thứ phải giữ nguyên

| Thành phần | Quyết định chung cho A/B/C |
|---|---|
| Target user | Learner và Trợ giảng phòng Lab |
| Situation | Learner chạy thử prompt, gặp lỗi JSON hoặc kết quả thấp |
| Task | Xác định nguyên nhân, sửa prompt hoặc gửi tín hiệu hỗ trợ |
| Desired outcome | Prompt chạy đúng, Learner giữ quyền chủ động, Trợ giảng chỉ tham gia khi cần |

## Ba option

| Thành phần | Option A — AI Support Radar | Option B — SOS Button | Option C — AI In-line Debugger |
|---|---|---|---|
| Solution mechanism | AI phân tích log chạy thử, lỗi JSON và độ chính xác để phát hiện khả năng bế tắc; sau nhiều lần thất bại, gửi đề xuất kết nối nhẹ nhàng | Learner bấm SOS ẩn danh khi cần Trợ giảng; yêu cầu được đưa vào hàng đợi hỗ trợ | AI phát hiện lỗi cú pháp/định dạng ngay trong trình soạn thảo và đưa gợi ý sửa tại chỗ |
| User làm gì? | Xem đề xuất và chọn nhận hoặc từ chối hỗ trợ | Chủ động gửi hoặc huỷ yêu cầu SOS | Xem, áp dụng hoặc bỏ qua gợi ý |
| AI làm gì? | Ghi nhận tín hiệu, gợi ý kết nối và cung cấp bằng chứng cho Trợ giảng; không tự liên hệ khi chưa được đồng ý | Không suy đoán trạng thái; chỉ chuyển tín hiệu và quản lý hàng đợi | Phát hiện lỗi định dạng phổ biến và đề xuất chỉnh sửa; không tự thay đổi prompt nếu Learner chưa chọn |
| Trade-off chính | Phát hiện được Learner im lặng nhưng có nguy cơ suy đoán sai và gây cảm giác bị giám sát | Minh bạch, an toàn tâm lý nhưng phụ thuộc vào việc Learner dám bấm và có thể làm Trợ giảng quá tải | Nhanh, giữ quyền tự lực nhưng chưa đủ sâu cho lỗi logic hoặc bias trong prompt |

## Distance check

- **A khác B:** A dùng tín hiệu hành vi để gợi ý hỗ trợ; B chỉ dùng yêu cầu tường minh của Learner, không AI đoán.
- **B khác C:** B kết nối với người thật; C hỗ trợ tự động tại chỗ để Learner tự sửa.
- **A khác C:** A tối ưu việc phát hiện và điều phối hỗ trợ; C tối ưu việc sửa lỗi kỹ thuật ngay trong editor.

## Quyết định thiết kế sau feedback

Ba option được tổ hợp thành hệ thống lai 3 tầng: **C** là tự lực đầu tiên; sau ba lần thất bại, **A** đưa ra gợi ý nhẹ nhàng; **B** là kênh Learner chủ động gọi Trợ giảng khi vẫn cần hỗ trợ. Đây là cách giảm can thiệp bất ngờ nhưng vẫn không bỏ sót Learner im lặng.

---

> **GATE 2 — Meaningful options:** Ba option có cùng bối cảnh và mục tiêu, nhưng khác rõ ở cơ chế phát hiện, mức độ AI tham gia và quyền khởi tạo tín hiệu.
