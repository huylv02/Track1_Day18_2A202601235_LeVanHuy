# Track1_Day18_2A202601235_LeVanHuy

## 1. Thông tin nhóm
- **Case:** Case C — AI Support Radar
- **Thành viên:**

| MSSV | Họ tên | Giai đoạn phụ trách |
|---|---|---|
| 2A202601955 | Nguyễn Quang Minh | Hypothesis & Research |
| 2A202601235 | Lê Văn Huy | Thiết kế & Xây dựng Prototype |
| 2A202601609 | Nguyễn Minh Hoàng | Testing & Tổng hợp Feedback |

## 2. Hypothesis Problem
- **Problem Statement:** Khi thực hành các bài học kỹ thuật phức tạp về AI và Lập trình (Situation), Trợ giảng gặp khó khăn trong việc nhận diện học viên đang bị kẹt và Learner gặp rào cản trong việc chủ động yêu cầu trợ giúp (Barrier), dẫn đến việc học viên mất nhiều thời gian tự xoay sở vô ích và Trợ giảng can thiệp quá muộn khi học viên đã nản lòng hoặc bỏ cuộc (Consequence).
- **Evidence ban đầu hỗ trợ giả thuyết:** Learner thường im lặng, liên tục thử nghiệm các tham số/prompt khác nhau hoặc dừng thao tác rất lâu khi bị lỗi; Trợ giảng chỉ biết khi buổi học kết thúc hoặc khi học viên nộp bài trắng/báo cáo trống.
- **Điều vẫn chưa được chứng minh:** Liệu các "tín hiệu hành vi" (thử sai liên tục với độ chính xác không đổi, dừng màn hình lâu) có thực sự phản ánh chính xác trạng thái "bế tắc" thực sự của Learner hay chỉ là quá trình thử nghiệm tự nhiên?

## 3. Three Solution Options (Chủ đề: Phòng Lab Tối ưu Prompt - Sentiment Analysis)
- **Option A (AI Support Radar):** AI phân tích log tương tác (số lần chạy thử prompt thất bại, độ chính xác dưới 40%, lỗi phân tách JSON), gợi ý danh sách học viên cần can thiệp cho Trợ giảng. Trợ giảng sẽ chủ động kết nối trực tiếp để hỗ trợ.
- **Option B (SOS Button):** Nút SOS ẩn danh nổi bật trên thanh công cụ để Learner gửi tín hiệu cứu trợ ẩn danh đến Trợ giảng phòng Lab mà không sợ bị đánh giá năng lực.
- **Option C (AI In-line Debugger):** Trình gỡ lỗi prompt tích hợp trực tiếp, phát hiện lỗi định dạng đầu ra (ví dụ: thiếu định dạng JSON) hoặc prompt không hiệu quả và chủ động đưa ra gợi ý sửa lỗi ngay trong trình soạn thảo cho Learner.

## 4. Phân chia công việc

### 4.1. Nguyễn Quang Minh (2A202601955) — Hypothesis & Research
- Xây dựng Problem Statement, thu thập evidence ban đầu và xác định các điểm chưa được chứng minh (mục 2).
- Nghiên cứu và đề xuất khung 3 giải pháp tương tác (Radar, SOS, Co-pilot) xung quanh chủ đề thực hành Prompt Engineering (mục 3).

### 4.2. Lê Văn Huy (2A202601235) — Thiết kế & Xây dựng Prototype
- Thiết kế giao diện đa trang (Tab Workspace & Tab Analytics) để tạo trải nghiệm chân thực.
- Dựng bản mẫu Unified Prototype hoàn chỉnh (gộp 3 phương án Radar, SOS, Co-pilot) bằng HTML, CSS và JavaScript thuần túy, đặt trong thư mục `prototype/`.

### 4.3. Nguyễn Minh Hoàng (2A202601609) — Testing & Tổng hợp Feedback
- Tiến hành kiểm thử trực tiếp với 3 tester ngoài dự án, ghi nhận chi tiết phản hồi về trải nghiệm người dùng.
- Tổng hợp dữ liệu, rút ra pattern chung và đề xuất Next Change (Chi tiết trong `prototype/prototype-feedback-note.md`).

## 5. Prototype Feedback
- **Observations:** 
  - **Option A (AI Support Radar):** Trợ giảng có thể chủ động can thiệp sớm ngay khi thấy hệ thống AI báo hiệu học viên bị kẹt (lỗi parse liên tục). Tuy nhiên, một số Learner cảm thấy hơi bị "giám sát quá mức" khi có người bất ngờ nhảy vào hỗ trợ khi họ mới chỉ đang tự mày mò.
  - **Option B (SOS Button):** Rất được ưa chuộng bởi những Learner có tâm lý rụt rè. Nút SOS ẩn danh giúp họ vượt qua nỗi sợ bị đánh giá. Trở ngại duy nhất là nếu nhiều người bấm cùng lúc, Trợ giảng sẽ bị quá tải trong hàng đợi.
  - **Option C (AI In-line Debugger):** Là giải pháp trực quan và nhanh chóng nhất. Học viên có thể tự khắc phục các lỗi định dạng prompt hoặc cấu trúc JSON mà không cần phiền đến Trợ giảng. Tuy nhiên, đối với các lỗi tư duy logic sâu sắc, gợi ý của AI chưa đủ sâu sắc.
- **Ba-feedback synthesis:** 
  - **Pattern nhận thấy:** Học viên luôn mong muốn có quyền kiểm soát tiến trình học của mình trước tiên. Họ muốn được tự thử thách bản thân và gỡ rối nhanh bằng AI hỗ trợ (Option C). Nếu thất bại nhiều lần, họ mới muốn chủ động yêu cầu trợ giúp (Option B), và chỉ muốn Trợ giảng chủ động tiếp cận (Option A) khi đã cạn kiệt giải pháp.
- **Next Change:** 
  - **Thiết kế hệ thống lai 3 tầng (3-Tier Hybrid Support System):** 
    - *Tầng 1 (Tự lực):* AI In-line Debugger hỗ trợ sửa nhanh các lỗi cú pháp/định dạng thông dụng tại chỗ.
    - *Tầng 2 (Gợi ý nhẹ nhàng):* Nếu học viên chạy thử prompt thất bại liên tiếp 3 lần, hệ thống sẽ kích hoạt AI Radar ghi nhận lỗi và gửi cảnh báo nhẹ nhàng cho học viên: "Có vẻ bạn đang gặp khó khăn, bạn có muốn chia sẻ màn hình với Trợ giảng không?".
    - *Tầng 3 (Can thiệp con người):* Chỉ khi học viên đồng ý hoặc chủ động nhấn nút SOS ẩn danh, Trợ giảng mới chính thức tham gia vào phiên làm việc trực tiếp để cùng gỡ rối.
- **Still Unproven:** 
  - Làm cách nào để tối ưu hóa thuật toán AI Radar nhằm phân biệt chính xác giữa học viên đang tư duy sâu (dừng lâu) với học viên thực sự bị kẹt (bế tắc hoàn toàn)?

## 6. AI Support Log
Dưới đây là tóm tắt kinh nghiệm sử dụng AI hỗ trợ của các thành viên trong nhóm. Chi tiết nhật ký đầy đủ được lưu trữ tại file [ai-support-log.md](ai-support-log.md).

### 6.1. Nguyễn Quang Minh (Hypothesis & Research)
- **AI giúp đỡ:** Chuẩn hóa dữ liệu feedback thô của các tester thành dạng bảng biểu có cấu trúc và tổng hợp pattern chung giữa họ.
- **AI hạn chế:** Tự ý suy đoán chủ quan về phương án tester lựa chọn và viết nội dung phân tích mang tính khuôn mẫu.
- **Tự điều chỉnh:** Kiểm tra thủ công và điều chỉnh lại toàn bộ suy đoán của AI để đảm bảo tính xác thực với ý kiến gốc của tester.

### 6.2. Lê Văn Huy (Thiết kế & Xây dựng Prototype)
- **AI giúp đỡ:** AI hỗ trợ tư vấn các nguyên lý thiết kế giao diện (UI) và đề xuất các chỉ số đo lường hiệu năng quan trọng (Accuracy, Latency, Token Cost) để người dùng có cái nhìn tổng quan về hệ thống. AI cũng giúp định hình luồng tương tác cơ bản cho các phương án hỗ trợ người dùng trong môi trường Lab.
- **AI hạn chế:** AI thường đề xuất các phương án tiếp cận theo khuôn mẫu, áp đặt một cơ chế phản hồi đồng nhất (ví dụ: dùng chung một cách hiển thị cảnh báo), làm lu mờ sự khác biệt cần thiết giữa các cơ chế hỗ trợ (SOS ẩn danh vs. cảnh báo từ Radar).
- **Tự điều chỉnh:** Điều chỉnh lại luồng trải nghiệm (UX flow) để tạo sự tách biệt rõ rệt giữa tính năng "tự chủ động" (SOS) và "được hỗ trợ" (Radar). Ưu tiên thiết kế sao cho học viên cảm thấy quyền kiểm soát nằm trong tay họ; tập trung vào sự tinh gọn để giữ môi trường học tập không bị gây nhiễu.

