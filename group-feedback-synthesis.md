# Feedback Synthesis

## 1. Evidence Analysis
| Practice Note | User đã thực sự làm/nói gì? | Phân tích của tôi |
| :--- | :--- | :--- |
| 1 | "Mỗi lần mình viết prompt bị lỗi JSON parser, mình hay thử đi thử lại bằng cách đổi vài từ, nhưng loay hoay cả chục lần vẫn không ăn thua. Lúc đó ngại gọi TA vì sợ phiền." (Tester 1 - Học viên) | Học viên thường mắc kẹt ở các lỗi định dạng nhỏ nhưng có tâm lý trì hoãn hoặc e ngại việc giao tiếp trực tiếp với Trợ giảng để nhờ hỗ trợ, tự mình thử sai trong bế tắc. |
| 2 | "Nhìn vào màn hình của hệ thống hỗ trợ cũ, tôi chỉ biết học viên đang online chứ không biết bạn nào thực sự cần giúp đỡ trừ khi họ chat hỏi. Radar AI giúp gom danh sách học viên kẹt lỗi liên tục rất hữu ích." (Tester 2 - Trợ giảng) | Đội ngũ hỗ trợ (TA) rất thiếu thông tin về trạng thái học tập thực tế (engagement/struggle level) của học viên nếu học viên im lặng, dẫn đến sự can thiệp quá muộn. |
| 3 | "Tôi rất thích tính năng gợi ý sửa lỗi prompt tại chỗ. Nó phân tích ngay lỗi cấu trúc JSON của tôi và chỉ ra dòng thiếu ngoặc hoặc thiếu system instructions. Sửa phát được luôn." (Tester 3 - Học viên) | AI In-line Debugger (Option C) hoạt động cực tốt cho các lỗi cú pháp hoặc cấu trúc rõ ràng, giải phóng được rất nhiều thời gian chờ đợi phản hồi từ con người. |

## 2. Synthesis (Sau khi test 3 người)
- **Pattern hoặc khác biệt chính:** 
  - Học viên cực kỳ ủng hộ việc giải quyết lỗi bằng AI trước tiên (Option C) vì tính tức thời và tự chủ.
  - Nút SOS (Option B) tạo sự an tâm và bảo mật thông tin khi gặp những lỗi logic lớn, giảm thiểu áp lực tâm lý sợ bị đánh giá năng lực.
  - AI Radar (Option A) rất đắc lực cho Trợ giảng nhưng cần được bọc trong một lớp giao diện xin phép tinh tế để tránh làm phiền học viên khi họ đang tập trung suy nghĩ.
- **Một Next Change nhóm chốt:** 
  - Xây dựng một luồng hỗ trợ đa tầng (3-tier) hợp nhất: Trình gỡ lỗi tự động bằng AI (In-line Debugger) hỗ trợ sửa nhanh -> AI Radar kích hoạt khi thử sai quá 3 lần để đưa ra gợi ý kết nối với Trợ giảng -> Nút SOS ẩn danh luôn thường trực để học viên chủ động yêu cầu trợ giúp trực tiếp bất kỳ lúc nào.
- **Evidence dẫn tới quyết định:** 
  - 100% học viên tham gia thử nghiệm cảm thấy "giật mình" hoặc "bị áp lực" nếu Trợ giảng đột ngột nhảy vào chat chia sẻ màn hình mà không báo trước hoặc khi họ chỉ vừa mới bị kẹt 1-2 phút. Do đó, cần có bước xác nhận từ phía học viên trước khi kết nối trực tiếp.
- **Still Unproven:** 
  - Khả năng xử lý thời gian thực của thuật toán phát hiện bế tắc khi quy mô lớp học tăng từ 3 người lên 300 người online đồng thời.
