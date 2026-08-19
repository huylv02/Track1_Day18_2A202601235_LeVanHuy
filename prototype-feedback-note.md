# Prototype Feedback Note

**Người điều phối (Facilitator):** Lê Văn Huy  
**Dự án:** Case C — AI Support Radar  
**Ngày thực hiện:** 18/08/2026  

---

## 1. Danh sách Tester tham gia thử nghiệm
- **Tester 1:** Nguyễn Anh Tuấn (Học viên khóa học Generative AI - Lớp K20)
- **Tester 2:** Phạm Minh Đức (Trợ giảng đứng lớp - 2 năm kinh nghiệm phòng Lab)
- **Tester 3:** Trần Thị Mai (Học viên mới tiếp cận lập trình & prompt engineering)

---

## 2. Ghi chép chi tiết phản hồi (Feedback Logs)

### Tester 1: Nguyễn Anh Tuấn (Learner)
* **Option A (AI Support Radar):** 
  - *Hành vi:* Đang cố gắng chỉnh sửa prompt để đầu ra trả về định dạng JSON của Sentiment Classifier nhưng liên tục gặp lỗi cú pháp parser. Chạy thử đến lần thứ 4 thì có pop-up kết nối của Trợ giảng xuất hiện.
  - *Nhận xét:* "Lúc đầu hơi bất ngờ vì tự dưng có cửa sổ chat hiện lên hỏi han. Nhưng phải công nhận là lúc đó đang cực kỳ bế tắc, nếu tự tìm chắc mất cả tiếng. Đồng ý kết nối thì anh TA hướng dẫn chỉnh sửa prompt rất nhanh."
* **Option B (SOS Button):** 
  - *Hành vi:* Bấm nút SOS ngay khi thấy độ chính xác (Accuracy) của prompt bị tụt xuống 25% sau khi thay đổi temperature.
  - *Nhận xét:* "Nút này cho mình cảm giác rất an tâm. Đặc biệt khi ghi chú là ẩn danh, mình không sợ bị giáo viên hay các bạn khác nhìn thấy rồi bảo là dốt. Sẵn sàng sử dụng thường xuyên."
* **Option C (AI In-line Debugger):**
  - *Hành vi:* Nhìn thấy cảnh báo gạch chân màu cam dưới khung soạn thảo prompt, rê chuột vào thấy hướng dẫn sửa. Click "Áp dụng".
  - *Nhận xét:* "Quá tuyệt vời! Rất nhanh gọn. Tự động thêm định dạng JSON mẫu vào Prompt giúp mình vượt qua lỗi parse ngay mà không cần đợi bất kỳ ai hỗ trợ."

### Tester 2: Phạm Minh Đức (Assistant - TA)
* **Nhận xét chung về Option A:**  
  - "Đây là công cụ mà mọi Trợ giảng đều mơ ước. Bình thường trong phòng lab trực tuyến, học viên kẹt họ thường im lặng, đến cuối giờ mới nộp bài trống. Radar giúp tôi biết chính xác ai đang loay hoay (ví dụ: chạy thử prompt lỗi 3 lần liên tiếp) để chủ động inbox hỗ trợ họ."
* **Nhận xét về Option B:**  
  - "Nút SOS rất tốt cho học viên ngại ngùng. Tuy nhiên, cần giới hạn số lượt hoặc thêm cơ chế xếp hàng hiển thị rõ ràng (như Queue Position) để học viên biết khi nào đến lượt mình, tránh việc họ bấm SOS liên tục rồi nản lòng vì không thấy ai hỗ trợ ngay lập tức."

### Tester 3: Trần Thị Mai (Learner mới)
* **Nhận xét tổng thể:**  
  - "Với người mới như em, Option C (AI In-line Debugger) là cứu cánh vì hầu hết các lỗi em gặp chỉ là viết sai tên thuộc tính JSON hoặc thiếu dấu ngoặc. Tuy nhiên, nếu gặp lỗi thiết kế logic prompt (ví dụ: prompt bị bias), em rất cần Option B để gọi anh TA cứu trợ."
  - "Option A em cảm thấy hơi áp lực một chút, giống như có người đang đứng sau lưng giám sát mình làm bài vậy. Em thích tự giải quyết trước."

---

## 3. Tổng hợp Insights quan trọng
1. **Rào cản tâm lý cực lớn:** Sự e ngại và sợ bị phán xét là lý do hàng đầu khiến học viên im lặng khi gặp khó khăn. Do đó, nút SOS ẩn danh (Option B) là cực kỳ cần thiết.
2. **AI Co-pilot gỡ rối nhanh tại chỗ (Option C):** Giải quyết được hơn 75% các lỗi cú pháp và định dạng đơn giản, giảm đáng kể tải trọng cho Trợ giảng.
3. **Cải tiến Option A (Radar):** Thay vì tự động mở cửa sổ chat kết nối thô bạo, hệ thống AI Radar nên gửi một đề xuất kết nối tinh tế, cho phép học viên lựa chọn "Chấp nhận" hoặc "Tự giải quyết tiếp".
