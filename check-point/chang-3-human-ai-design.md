# Chặng 3 — Human–AI Design pass (Day 18)

## Critical interaction cần test

Learner vừa chạy prompt và nhận lỗi JSON hoặc độ chính xác thấp. Hệ thống phải giúp Learner chọn giữa tự sửa, nhận đề xuất hỗ trợ hoặc gửi SOS; Trợ giảng chỉ hành động sau khi có tín hiệu phù hợp.

## Bốn quyết định thiết kế

### Option A — AI Support Radar

- **Expectation:** Radar chỉ là cảnh báo dựa trên tín hiệu, không phải kết luận Learner đang bị kẹt.
- **Role and Agency:** AI phân tích số lần thất bại, lỗi JSON và độ chính xác; Learner chọn nhận hoặc từ chối đề xuất kết nối. Trợ giảng xem bằng chứng và quyết định có liên hệ.
- **Evidence and Uncertainty:** Hiển thị rõ các tín hiệu, ngưỡng kích hoạt và nhãn độ tin cậy; không dùng dừng lâu đơn lẻ để kết luận.
- **Control and Recovery:** Learner có thể chọn “Tự giải quyết tiếp” hoặc huỷ kết nối; Trợ giảng có thể bỏ qua cảnh báo và đánh dấu “không cần hỗ trợ”.

### Option B — SOS Button

- **Expectation:** SOS gửi yêu cầu ẩn danh đến Trợ giảng và hiển thị vị trí trong hàng đợi, không tự thay đổi điểm số.
- **Role and Agency:** Learner là người khởi tạo; AI chỉ chuyển tín hiệu, cập nhật hàng đợi và thông báo trạng thái, không suy đoán hay tự nhắn thay Trợ giảng.
- **Evidence and Uncertainty:** Màn hình xác nhận nêu rõ yêu cầu đã được gửi, trạng thái chờ và thời gian dự kiến; không phóng đại khả năng hỗ trợ tức thì.
- **Control and Recovery:** Learner có thể huỷ yêu cầu khi đã tự giải quyết; Trợ giảng xử lý từng mục và điều chỉnh thứ tự khi nhiều người gửi cùng lúc.

### Option C — AI In-line Debugger

- **Expectation:** AI Co-pilot đưa gợi ý cho lỗi cú pháp/định dạng phổ biến, không đảm bảo giải quyết lỗi tư duy logic sâu.
- **Role and Agency:** AI phát hiện và giải thích lỗi; Learner quyết định áp dụng hoặc bỏ qua. AI không tự ghi đè prompt.
- **Evidence and Uncertainty:** Gợi ý chỉ ra lỗi cụ thể, ví dụ thiếu yêu cầu trả về JSON thô, và ghi rõ đây là suggestion tự động.
- **Control and Recovery:** Có nút “Áp dụng sửa nhanh”, “Bỏ qua” và khả năng tiếp tục chỉnh sửa thủ công; áp dụng xong có thể reset để quay lại trạng thái ban đầu.

## Human–AI Decision Table

| Quyết định | Option A | Option B | Option C |
|---|---|---|---|
| AI Act / Ask / Don't Act | **Act** để phân tích và cảnh báo; **Ask** trước kết nối; **Don't Act** tự liên hệ | **Act** để chuyển yêu cầu và quản lý queue; **Don't Act** suy đoán hoặc tự liên hệ | **Act** để phát hiện và gợi ý; **Ask** qua nút áp dụng; **Don't Act** tự sửa prompt |
| User hiểu capability/limit bằng gì? | Nhãn “Gợi ý dựa trên tín hiệu, có thể sai” | Xác nhận ẩn danh và vị trí trong queue | Thẻ suggestion ghi rõ lỗi được phát hiện và giới hạn của gợi ý |
| Evidence/uncertainty | Log lỗi, số lần chạy, accuracy và độ tin cậy | Yêu cầu tường minh từ Learner, không cần suy luận | Đoạn prompt/lỗi cụ thể làm căn cứ cho gợi ý |
| Control/recovery | Nhận, từ chối hoặc huỷ kết nối | Huỷ SOS, theo dõi queue | Áp dụng, bỏ qua hoặc reset |

## Feedback và dữ liệu

Learner phải được thông báo trước nếu log lỗi, accuracy hoặc thời gian dừng được dùng cho Radar. Trong MVP, dữ liệu chỉ phục vụ buổi hiện tại; lựa chọn của Trợ giảng không tự động dùng để huấn luyện mô hình cho các buổi sau. Learner có thể từ chối phân tích hành vi và vẫn dùng SOS hoặc Debugger.

---

> **GATE 3 — Human control:** AI hỗ trợ phát hiện, điều phối và gợi ý, nhưng Learner giữ quyền chọn hỗ trợ/sửa lỗi và Trợ giảng giữ quyền quyết định can thiệp.
