# Prototype Feedback Note

**Dự án:** Case C — AI Support Radar  
**Ngày thực hiện:** 18/08/2026  

---

## 1. Danh sách Thành viên nhóm hoàn thành Prototype Feedback Note
- **Thành viên 1:** Nguyễn Châu Thanh - 2A202601382
- **Thành viên 2:** Hoàng Văn Thành - 2A202601428
- **Thành viên 3:** Lê Ngọc Khánh - 2A202601487

---

## 2. Ghi chép chi tiết phản hồi (Feedback Logs)

### Tester/context: Nguyễn Châu Thanh - 2A202601382

| Observation | Note |
|---|---|
| First action | Chỉnh sửa prompt để đầu ra trả về định dạng JSON của Sentiment Classifier (thử với Option A). |
| Chỗ dừng, do dự hoặc hiểu sai | Liên tục gặp lỗi khi sửa prompt; đến lần thử thứ 4 thì pop-up kết nối của Trợ giảng bất ngờ xuất hiện, khiến tester khựng lại. |
| Evidence được đọc hay bỏ qua | Có đọc cảnh báo gạch chân màu cam dưới khung soạn thảo prompt (Option C), rê chuột vào để xem hướng dẫn sửa. |
| Cách tester sửa hoặc lấy lại control | Đồng ý kết nối với TA qua pop-up và được hướng dẫn chỉnh sửa prompt rất nhanh (Option A); ở Option C, bấm "Áp dụng" để AI tự sửa lỗi ngay. |
| Option được chọn | B |
| Lý do và trade-off | Option B cho cảm giác an tâm, chủ động nhờ TA, ẩn danh nên không sợ bị đánh giá — sẵn sàng dùng thường xuyên. Đánh đổi: khi gửi yêu cầu thì bị kẹt ở màn hình chờ, không thoát ra làm tiếp được, phải chờ hoặc huỷ, làm gãy mạch làm việc. |
| Evidence chống lại kỳ vọng của nhóm | Option A (kỳ vọng chủ động phát hiện sớm) lại gây bất ngờ/khó chịu vì tự mở cửa sổ chat mà không hỏi ý kiến trước; Option C tuy nhanh nhưng đưa lời giải ngay từ lần đầu, không có giải thích cụ thể — trái với kỳ vọng giúp học viên tự học. |

### Tester/context: Hoàng Văn Thành - 2A202601428

| Observation | Note |
|---|---|
| First action | Quan sát Radar tự động phát hiện học viên gặp khó khăn với Sentiment Classifier và tự mở cửa sổ chat kết nối. |
| Chỗ dừng, do dự hoặc hiểu sai | Không có; TA quan sát và đánh giá từng option dưới góc độ người hỗ trợ thay vì tự thao tác gặp lỗi. |
| Evidence được đọc hay bỏ qua | Theo dõi cảnh báo gạch chân của Option C và cách học viên bấm "Áp dụng" mà không qua bước giải thích hay kiểm tra lại kiến thức. |
| Cách tester sửa hoặc lấy lại control | Nhận yêu cầu SOS gửi đến, chờ phản hồi và trực tiếp hướng dẫn học viên xử lý lỗi (Option B). |
| Option được chọn | B |
| Lý do và trade-off | Option B giúp học viên nhanh và dễ hiểu nhất nhờ được hỗ trợ trực tiếp từ TA. Đánh đổi: Option A bị đánh giá kém nhất, chỉ phù hợp với người cố chấp; Option C cần bổ sung quiz để học viên nhớ lại kiến thức thay vì nhận kết quả ngay. |
| Evidence chống lại kỳ vọng của nhóm | Từ góc nhìn TA, Option A — vốn được kỳ vọng là giải pháp chủ động — lại là phương án kém nhất; Option C tuy nhanh nhưng thiếu cơ chế củng cố kiến thức, trái với kỳ vọng hỗ trợ học tập lâu dài của nhóm. |

### Tester/context: Lê Ngọc Khánh - 2A202601487 

| Observation | Note |
|---|---|
| First action | Trải nghiệm Option A trước, cảm thấy như có người đứng sau lưng giám sát khi làm bài. |
| Chỗ dừng, do dự hoặc hiểu sai | Hơi áp lực với Option A nên muốn tự giải quyết trước khi nhờ hỗ trợ. |
| Evidence được đọc hay bỏ qua | Đọc và làm theo gợi ý sửa lỗi của Option C cho các lỗi cú pháp JSON (sai tên thuộc tính, thiếu dấu ngoặc). |
| Cách tester sửa hoặc lấy lại control | Dùng Option C để tự sửa lỗi cú pháp đơn giản; hình dung sẽ gọi Option B khi gặp lỗi logic prompt phức tạp hơn (ví dụ prompt bị bias). |
| Option được chọn | C |
| Lý do và trade-off | Option C là ok nhất vì xử lý nhanh phần lớn lỗi cú pháp/định dạng mà người mới hay gặp. Đánh đổi: với lỗi thiết kế logic prompt (bias), Option C không đủ, vẫn cần Option B để được TA cứu trợ. |
| Evidence chống lại kỳ vọng của nhóm | Option A, dù được kỳ vọng giúp phát hiện sớm và hỗ trợ chủ động, lại tạo cảm giác bị giám sát và gây áp lực cho người mới — ngược với kỳ vọng tạo môi trường an toàn để học. |

---

## 3. Tổng hợp Insights quan trọng
1. **Rào cản tâm lý cực lớn:** Sự e ngại và sợ bị phán xét là lý do hàng đầu khiến học viên im lặng khi gặp khó khăn. Do đó, nút SOS ẩn danh (Option B) là cực kỳ cần thiết.
2. **AI Co-pilot gỡ rối nhanh tại chỗ (Option C):** Giải quyết được hơn 75% các lỗi cú pháp và định dạng đơn giản, giảm đáng kể tải trọng cho Trợ giảng.
3. **Cải tiến Option A (Radar):** Thay vì tự động mở cửa sổ chat kết nối thô bạo, hệ thống AI Radar nên gửi một đề xuất kết nối tinh tế, cho phép học viên lựa chọn "Chấp nhận" hoặc "Tự giải quyết tiếp".
