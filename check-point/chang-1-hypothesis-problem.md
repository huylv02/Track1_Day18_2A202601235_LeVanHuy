# Chặng 1 — Hypothesis Problem (Day 18)

## Hypothesis Problem

> Khi thực hành các bài học kỹ thuật phức tạp về AI và lập trình, Trợ giảng khó nhận diện học viên đang bị kẹt và Learner ngại chủ động yêu cầu trợ giúp vì các tín hiệu bế tắc chưa được phát hiện hoặc chia sẻ kịp thời, dẫn đến việc Learner mất nhiều thời gian tự xoay sở vô ích và Trợ giảng can thiệp quá muộn khi học viên đã nản lòng hoặc bỏ cuộc.

| Thành phần | Nội dung |
|---|---|
| Situation | Learner thực hành Prompt Engineering trong Lab, đặc biệt khi tối ưu prompt phân tích cảm xúc (Sentiment Analysis) |
| User | Learner và Trợ giảng phòng Lab |
| Job | Learner gỡ lỗi prompt; Trợ giảng nhận diện đúng người cần hỗ trợ và can thiệp đúng lúc |
| Barrier | Learner thường im lặng, ngại bị đánh giá hoặc không biết lỗi nằm ở đâu; Trợ giảng không có tín hiệu đủ rõ để phát hiện sớm |
| Consequence | Nhiều lần chạy thử thất bại, lỗi JSON/độ chính xác thấp kéo dài, Learner mất thời gian hoặc bỏ cuộc; Trợ giảng bị động và can thiệp muộn |

## Evidence ban đầu hỗ trợ giả thuyết

- Trong prototype, tình huống lỗi cụ thể là mô hình trả về văn bản tự do thay vì JSON hợp lệ, khiến `JSON.parse` thất bại.
- Các tín hiệu có thể quan sát gồm chạy prompt thất bại liên tiếp, độ chính xác khoảng 35% hoặc dưới 40%, lỗi phân tách JSON và thay đổi tham số nhưng kết quả không cải thiện.
- Feedback từ 3 tester cho thấy Learner muốn tự sửa lỗi trước; SOS ẩn danh giúp giảm sợ bị đánh giá; Trợ giảng cần biết khi Learner đã loay hoay nhiều lần.

## Điều vẫn chưa được chứng minh

- Các tín hiệu như dừng lâu hoặc thử sai liên tục có phân biệt được bế tắc thật với quá trình tự thử nghiệm bình thường hay không.
- Ngưỡng ba lần chạy thất bại có phù hợp với nhiều loại bài và nhiều Learner hay không.
- Cảnh báo Radar có giúp Trợ giảng can thiệp đúng lúc mà không khiến Learner cảm thấy bị giám sát quá mức hay không.

---

> **GATE 1 — Evidence continuity:** Giả thuyết đã nêu rõ situation, user, job, barrier, consequence; gắn với lỗi JSON/độ chính xác trong prototype và ghi rõ các phần còn cần kiểm chứng.
