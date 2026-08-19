# Track1_Day18_2A202601235_LeVanHuy

## 1. Thông tin cá nhân
- **MHV:** 2A202601235
- **Họ tên:** Lê Văn Huy
- **Case:** Case C — AI Support Radar

## 2. Hypothesis Problem
- **Problem Statement:** Khi thực hành các bài học kỹ thuật phức tạp về AI và Lập trình (Situation), Trợ giảng gặp khó khăn trong việc nhận diện học viên đang bị kẹt và Learner gặp rào cản trong việc chủ động yêu cầu trợ giúp (Barrier), dẫn đến việc học viên mất nhiều thời gian tự xoay sở vô ích và Trợ giảng can thiệp quá muộn khi học viên đã nản lòng hoặc bỏ cuộc (Consequence).
- **Evidence ban đầu hỗ trợ giả thuyết:** Learner thường im lặng, liên tục thử nghiệm các tham số/prompt khác nhau hoặc dừng thao tác rất lâu khi bị lỗi; Trợ giảng chỉ biết khi buổi học kết thúc hoặc khi học viên nộp bài trắng/báo cáo trống.
- **Điều vẫn chưa được chứng minh:** Liệu các "tín hiệu hành vi" (thử sai liên tục với độ chính xác không đổi, dừng màn hình lâu) có thực sự phản ánh chính xác trạng thái "bế tắc" thực sự của Learner hay chỉ là quá trình thử nghiệm tự nhiên?

## 3. Three Solution Options (Chủ đề: Phòng Lab Tối ưu Prompt - Sentiment Analysis)
- **Option A (AI Support Radar):** AI phân tích log tương tác (số lần chạy thử prompt thất bại, độ chính xác dưới 40%, lỗi phân tách JSON), gợi ý danh sách học viên cần can thiệp cho Trợ giảng. Trợ giảng sẽ chủ động kết nối trực tiếp để hỗ trợ.
- **Option B (SOS Button):** Nút SOS ẩn danh nổi bật trên thanh công cụ để Learner gửi tín hiệu cứu trợ ẩn danh đến Trợ giảng phòng Lab mà không sợ bị đánh giá năng lực.
- **Option C (AI In-line Debugger):** Trình gỡ lỗi prompt tích hợp trực tiếp, phát hiện lỗi định dạng đầu ra (ví dụ: thiếu định dạng JSON) hoặc prompt không hiệu quả và chủ động đưa ra gợi ý sửa lỗi ngay trong trình soạn thảo cho Learner.

## 4. Đóng góp cá nhân
- **Thực hiện:** Tôi thực hiện toàn bộ quy trình thiết kế, lập trình và thử nghiệm cá nhân (nhóm 1 mình).
- **Nghiên cứu & Thiết kế:** Phát triển 3 giải pháp tương tác (Radar, SOS, Co-pilot) xung quanh chủ đề thực hành Prompt Engineering, thiết kế giao diện đa trang (Tab Workspace & Tab Analytics) để tạo trải nghiệm chân thực.
- **Xây dựng:** Dựng bản mẫu Unified Prototype hoàn chỉnh (gộp 3 phương án Radar, SOS, Co-pilot) bằng HTML, CSS và JavaScript thuần túy, đặt trong thư mục `prototype/`.
- **Thử nghiệm:** Tiến hành kiểm thử trực tiếp với 3 tester ngoài dự án, ghi nhận chi tiết phản hồi về trải nghiệm người dùng và tổng hợp dữ liệu (Chi tiết trong `prototype/prototype-feedback-note.md`).

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
- **AI đã giúp gì:** Hỗ trợ cấu trúc tài liệu thiết kế, gợi ý phương án xây dựng các chỉ số đánh giá độ chính xác của prompt (Accuracy, Latency, Token Cost) để đưa vào tab Dashboard của prototype.
- **AI sai/hời hợt:** Gợi ý các kịch bản HTML/JS quá phức tạp, sử dụng các thư viện ngoài không cần thiết.
- **Tôi đã tự sửa:** Tự tay viết lại toàn bộ giao diện bằng Vanilla CSS và JS thuần túy, tối ưu hóa thành giao diện 2 trang (2 Tabs: Workspace và Evaluation Analytics) trực quan, gọn nhẹ và hoạt động mượt mà.
