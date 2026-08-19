# AI Support Log — Nhật ký hỗ trợ từ AI của nhóm

Tài liệu này ghi lại chi tiết trải nghiệm sử dụng AI hỗ trợ của từng thành viên trong nhóm trong suốt quá trình hoàn thành dự án Case C — AI Support Radar.

---

## 1. Thành viên: Nguyễn Quang Minh (Hypothesis & Research)

* **AI đã giúp tôi ở đâu?**
  AI giúp chuyển các ghi chép feedback rời rạc (hành vi, nhận xét của từng tester) thành đúng cấu trúc bảng theo template (`prototype-feedback-note.md` và `group-feedback-synthesis.md`), đồng thời tổng hợp pattern chung giữa 3 tester để đưa vào mục Next Change và Evidence.

* **AI sai, hời hợt hoặc làm các options giống nhau ở đâu?**
  Khi phải chọn "Option được chọn" cho từng tester (A/B/C), AI tự suy diễn từ giọng văn nhận xét thay vì có câu trả lời tường minh từ tester — đây là phán đoán chủ quan, cần người thật xác nhận lại. Ngoài ra phần "Pattern hoặc khác biệt" và "Evidence chống lại kỳ vọng của nhóm" bị AI viết hơi khuôn mẫu giống nhau giữa các dòng, chưa thực sự đào sâu khác biệt riêng của từng tester.

**Tôi đã tự sửa hoặc quyết định lại điều gì?**
Tôi cũng sẽ tự rà soát và xác nhận lại cột "Option được chọn" cùng phần "Pattern hoặc khác biệt" mà AI suy diễn, thay vì dùng nguyên như AI đề xuất, để đảm bảo đúng với ý kiến thật của từng tester.

---

## 2. Thành viên: Lê Văn Huy (Thiết kế & Xây dựng Prototype)

* **AI đã giúp tôi ở đâu?**
  AI hỗ trợ tư vấn các nguyên lý thiết kế giao diện (UI) và đề xuất các chỉ số đo lường hiệu năng quan trọng (Accuracy, Latency, Token Cost) để người dùng có cái nhìn tổng quan về hệ thống. AI cũng giúp tôi định hình luồng tương tác cơ bản cho các phương án hỗ trợ người dùng trong môi trường Lab.

* **AI sai, hời hợt hoặc làm các options giống nhau ở đâu?**
  AI thường đề xuất các phương án tiếp cận theo khuôn mẫu, không tối ưu cho trải nghiệm người dùng thực tế của dự án. Đặc biệt, AI có xu hướng áp đặt một cơ chế phản hồi đồng nhất cho tất cả các tình huống (ví dụ: dùng chung một cách hiển thị cảnh báo), điều này làm lu mờ sự khác biệt cần thiết giữa các cơ chế hỗ trợ (SOS ẩn danh vs. cảnh báo từ Radar) mà tôi muốn hướng tới.

* **Tôi đã tự sửa hoặc quyết định lại điều gì?**
  Tôi quyết định điều chỉnh lại luồng trải nghiệm (UX flow) để tạo sự tách biệt rõ rệt giữa tính năng "tự chủ động" (SOS) và tính năng "được hỗ trợ từ hệ thống" (Radar). Tôi ưu tiên thiết kế các điểm chạm (touchpoints) sao cho học viên cảm thấy quyền kiểm soát nằm trong tay họ, thay vì để hệ thống can thiệp một cách quá chủ động. Tôi đã đưa ra các quyết định thiết kế tập trung vào sự tinh gọn, nhằm giữ cho môi trường học tập không bị gây nhiễu bởi các thông báo không cần thiết.

## 3. Thành viên: Nguyễn Minh Hoàng (Thiết kế & Kiểm thử Prototype)

**Thành viên:** Nguyễn Minh Hoàng

**AI đã giúp tôi ở đâu?**
AI giúp tôi nhìn rõ hơn những vấn đề mà Learner có thể gặp khi thực hành Prompt Engineering. Từ đó, tôi tham khảo và phát triển ba hướng hỗ trợ chính là AI Support Radar, SOS Button và AI In-line Debugger. AI cũng hỗ trợ tôi lên ý tưởng về cách người dùng tương tác với các chức năng này và những chỉ số cần có trên màn hình Analytics.

**AI sai, hời hợt hoặc đưa ra đề xuất chưa phù hợp ở đâu?**
Ở một số phần, AI đề xuất cách làm HTML/JavaScript khá phức tạp, trong khi prototype của tôi chỉ cần ở mức đơn giản để demo ý tưởng. Ngoài ra, AI chưa đề cập đủ đến vấn đề quyền riêng tư, việc cần xác nhận trước khi Trợ giảng kết nối và trường hợp người dùng muốn hủy yêu cầu SOS.

**Tôi đã tự sửa hoặc quyết định lại điều gì?**
Tôi chủ động đơn giản hóa phần prototype và tự triển khai bằng HTML, CSS và JavaScript thuần. Tôi bổ sung các lựa chọn như chấp nhận, từ chối, áp dụng, bỏ qua và hủy để người dùng có quyền kiểm soát. Cuối cùng, tôi kết hợp ba phương án thành một luồng hỗ trợ theo ba mức độ, trong đó Learner vẫn là người đưa ra quyết định cuối cùng.