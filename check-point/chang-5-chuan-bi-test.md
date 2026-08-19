# Chặng 5 — Chuẩn bị test (Day 18)

## 1. Context và task

### Context

> “Bạn đang làm Lab tối ưu prompt phân tích cảm xúc. Kết quả hiện chỉ đạt khoảng 35% và mô hình trả về văn bản tự do thay vì JSON hợp lệ. Hãy xử lý tình huống như cách bạn sẽ làm thật.”

Không giải thích trước option nào là tốt hơn. Với Trợ giảng, hỏi thêm cách họ thường phát hiện và hỗ trợ một Learner bị kẹt. Với Learner, hỏi thêm họ thường làm gì trước khi nhờ người khác.

### Outcome task

> “Hãy dùng lần lượt ba phương án để đưa prompt về trạng thái chạy được, hoặc gửi yêu cầu hỗ trợ khi bạn thấy cần. Sau đó nói cho tôi biết phương án nào bạn muốn dùng trong một buổi lab thật và vì sao.”

Không nói trước nút cần bấm hay hướng xử lý.

## 2. Người tham gia

- 3 tester ngoài dự án: 2 Learner và 1 Trợ giảng.
- Ghi riêng vai trò, mức độ quen thuộc với prompt engineering và kinh nghiệm hỗ trợ trong Lab.
- Không dùng feedback của tester để kết luận độ chính xác của Radar; đây là usability/prototype test, chưa phải kiểm định mô hình.

## 3. Observation focus

1. **First action:** Tester bắt đầu bằng tự sửa, tìm SOS hay chạy thử nghiệm?
2. **Comprehension:** Tester có hiểu lỗi JSON và vai trò của từng option mà không cần giải thích không?
3. **Agency and privacy:** Tester có thấy Radar can thiệp quá sớm hoặc SOS đủ an toàn/ẩn danh không?
4. **Evidence and uncertainty:** Tester có nhận ra vì sao Radar đưa cảnh báo và hiểu đó chỉ là gợi ý không?
5. **Recovery and choice:** Tester có biết áp dụng/bỏ qua/reset gợi ý, huỷ SOS hoặc từ chối kết nối không?

Ghi lại hành vi, thời điểm do dự, câu hỏi tester tự đặt ra và câu nói nguyên văn. Không chỉ ghi đánh giá cảm tính như “thích” hoặc “không thích”.

## 4. Luật facilitation

1. Tester tự điều khiển prototype; facilitator không chạm chuột/bàn phím thay họ.
2. Dùng cùng một task và cùng trạng thái lỗi cho cả A/B/C.
3. Không giải thích icon, nút hoặc kết quả trước khi tester thử.
4. Cho phép im lặng; chỉ nhắc tester nói to suy nghĩ khi cần.
5. Khi tester hỏi “cái này hoạt động thế nào?”, hỏi lại: **“Theo bạn, nó nên hoạt động như thế nào?”**

### Câu cứu hộ

- “Bạn sẽ làm gì tiếp theo?”
- “Bạn đang dựa vào dấu hiệu nào để quyết định?”
- “Nếu gặp tình huống này khi học thật, bạn muốn hệ thống làm gì?”

## 5. Checklist

- [X] Có 3 tester ngoài dự án, gồm Learner và Trợ giảng.
- [X] Có kịch bản lỗi JSON/accuracy thấp thống nhất.
- [X] Có ghi chép feedback của từng tester trong `prototype-feedback-note.md`.
- [ ] Ghi thời gian hoàn thành task và số lần facilitator phải cứu hộ cho từng option.
- [ ] Kiểm tra riêng cảm giác bị giám sát ở Option A và khả năng quá tải hàng đợi ở Option B.

---

> **GATE 5 — Test readiness:** Task kiểm tra được cả khả năng tự lực, quyền chủ động gửi SOS, mức độ tin cậy của Radar và các đường recovery của prototype.
