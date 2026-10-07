# Website giới thiệu sách — Mộc Books

Trang web tĩnh giới thiệu cuốn sách minh họa **Những trang ngày mới**. Giao diện tiếng Việt, sử dụng HTML5, CSS3, Bootstrap 5.3.8 và JavaScript thuần.

## Chạy bài

Mở `index.html` trực tiếp bằng trình duyệt, hoặc mở thư mục bằng VS Code và dùng Live Server. Có thể chạy máy chủ tĩnh bằng `python -m http.server 8000`, rồi truy cập `http://localhost:8000`.

Không cần npm, không cần build. Bootstrap, hình ảnh SVG và chương đọc thử đều lưu trong dự án; trang hoạt động không phụ thuộc CDN.

## Các phần theo đề

| Yêu cầu | Vị trí |
| --- | --- |
| Header | Logo, navigation, menu thu gọn trên điện thoại |
| Book Overview | Giới thiệu sách, bìa, thông tin và nút đọc thử |
| Author | Giới thiệu tác giả |
| Features | Ba điểm nổi bật và thông tin sách |
| Prices | Ba phiên bản và giá minh họa |
| Download | Tải hoặc mở chương đọc thử thực tế `.txt` |
| Reader’s Say | Ba thẻ cảm nhận minh họa |
| Footer | Thông tin, liên kết, nút về đầu trang |

## Responsive và tương tác

- Bootstrap grid: một cột trên điện thoại; nhiều cột trên tablet và desktop.
- Menu thu gọn ở màn hình dưới 992 px; nút menu cập nhật `aria-expanded`, đóng sau khi chọn liên kết và hỗ trợ phím Escape.
- Chọn phiên bản chuyển tới khu vực đọc thử và hiển thị thông tin tương ứng.
- Liên kết điều hướng tới các phần; tải chương mẫu miễn phí.
- Có viewport, ảnh có alt, skip link, trạng thái focus và hỗ trợ giảm chuyển động.

## Cấu trúc

- `index.html`: toàn bộ nội dung.
- `css/style.css`: giao diện và media queries.
- `js/main.js`: menu, thông tin phiên bản, năm bản quyền.
- `assets/book-cover.svg`, `assets/favicon.svg`: hình vector tự tạo.
- `downloads/chuong-doc-thu.txt`: chương đọc thử tự sáng tác.
- `vendor/bootstrap.min.css`, `vendor/LICENSE-bootstrap.txt`: Bootstrap và giấy phép MIT.

## Nguồn tham khảo

Tham khảo cách tổ chức các phần từ https://github.com/hoanv7169/bootstrap-demo theo gợi ý của đề bài. Nội dung, mã HTML/CSS/JS tùy chỉnh và SVG của bài này được viết mới; không sao chép ảnh hoặc văn bản từ repo mẫu.

Bootstrap chính thức: https://github.com/twbs/bootstrap/tree/v5.3.8 — MIT.

Cuốn sách, tác giả, giá và cảm nhận là minh họa, không có thanh toán hoặc đặt hàng thật. Chương đọc thử là tệp thật có thể tải. Đây là website tĩnh; không có backend.
