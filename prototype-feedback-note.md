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

### Tester 1: Nguyễn Châu Thanh - 2A202601382
* **Option A (AI Support Radar):** 
  - *Hành vi:* Đang cố gắng chỉnh sửa prompt để đầu ra trả về định dạng JSON của Sentiment Classifier nhưng liên tục gặp lỗi. Chạy thử đến lần thứ 4 thì có pop-up kết nối của Trợ giảng xuất hiện.
  - *Nhận xét:* "Lúc đầu hơi bất ngờ vì tự dưng có cửa sổ chat hiện lên hỏi han. Câu trả lời khá khó, lọ mọ mãi không xong. Đồng ý kết nối thì anh TA hướng dẫn chỉnh sửa prompt rất nhanh."
* **Option B (SOS Button):** 
  - *Hành vi:* Bấm nút SOS ngay khi thấy bài khó không làm được.
  - *Nhận xét:* Nút này cảm giác an tâm, mình có thể chủ động nhờ TA. Đặc biệt khi ghi chú là ẩn danh, mình không sợ bị giáo viên hay các bạn khác nhìn thấy rồi bảo là dốt. Sẵn sàng sử dụng thường xuyên. Tuy nhiên khi bấm gửi yêu cầu cho trợ giang thì lại ở màn hình chờ không thoát được ra để làm tiếp, phải chờ họ hoặc huỷ, làm gãy mạch làm việc.
* **Option C (AI In-line Debugger):**
  - *Hành vi:* Khi chạy thử, nhìn thấy cảnh báo gạch chân màu cam dưới khung soạn thảo prompt, rê chuột vào thấy hướng dẫn sửa. Click "Áp dụng".
  - *Nhận xét:* Tuyệt vời! Rất nhanh gọn. Tự động giải quyết vấn đề ngay mà không cần đợi bất kỳ ai hỗ trợ. Tuy nhiên chưa có giải thích cụ thể, dễ gây lạm dụng, không tự suy nghĩ để trả lời bài toán, đưa lời giaỉ cho luôn ngay từ lần đầu làm sai.

### Tester 2: Hoàng Văn Thành - 2A202601428
* **Option A (AI Support Radar):**
  - *Hành vi:* Quan sát Radar tự động phát hiện học viên đang gặp khó khăn với Sentiment Classifier và tự mở cửa sổ chat kết nối mà không hỏi ý kiến trước.
  - *Nhận xét:* Đây là phương án kém nhất trong 3 phương án, thích hợp cho những người cố chấp.
* **Option B (SOS Button):**
  - *Hành vi:* Bấm nút SOS để yêu cầu hỗ trợ, chờ phản hồi và trực tiếp hướng dẫn học viên xử lý lỗi.
  - *Nhận xét:* Phương án tốt nhất, có thể giúp học viên nhanh nhất và dễ hiểu nhất do nhận được sự hỗ trợ trực tiếp của trợ giảng.
* **Option C (AI In-line Debugger):**
  - *Hành vi:* Thử tính năng gạch chân cảnh báo lỗi và bấm "Áp dụng" để xem AI tự sửa lỗi ngay, không qua bước giải thích hay kiểm tra lại kiến thức.
  - *Nhận xét:* Nên bổ sung thêm các quiz câu hỏi để giúp người dùng có thể nhớ lại kiến thức thay vì đưa ra kết quả luôn.

### Tester 3: Lê Ngọc Khánh - 2A202601487
* **Nhận xét tổng thể:**  
  - Với người mới như em, Option C (AI In-line Debugger) là ok nhất vì hầu hết các lỗi em gặp chỉ là viết sai tên thuộc tính JSON hoặc thiếu dấu ngoặc. Tuy nhiên, nếu gặp lỗi thiết kế logic prompt (ví dụ: prompt bị bias), em rất cần Option B để gọi anh TA cứu trợ.
  - Option A em cảm thấy hơi áp lực một chút, giống như có người đang đứng sau lưng giám sát mình làm bài vậy. Em thích tự giải quyết trước hơn.

---

## 3. Tổng hợp Insights quan trọng
1. **Rào cản tâm lý cực lớn:** Sự e ngại và sợ bị phán xét là lý do hàng đầu khiến học viên im lặng khi gặp khó khăn. Do đó, nút SOS ẩn danh (Option B) là cực kỳ cần thiết.
2. **AI Co-pilot gỡ rối nhanh tại chỗ (Option C):** Giải quyết được hơn 75% các lỗi cú pháp và định dạng đơn giản, giảm đáng kể tải trọng cho Trợ giảng.
3. **Cải tiến Option A (Radar):** Thay vì tự động mở cửa sổ chat kết nối thô bạo, hệ thống AI Radar nên gửi một đề xuất kết nối tinh tế, cho phép học viên lựa chọn "Chấp nhận" hoặc "Tự giải quyết tiếp".
