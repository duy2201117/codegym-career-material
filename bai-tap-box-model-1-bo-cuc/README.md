# Bài tập: Sử dụng Box Model 1

Bài thực hành so sánh `box-sizing: content-box` và `box-sizing: border-box` với ba thẻ `.card`.

## Kích thước theo đề bài

Mỗi thẻ khai báo:

- `width: 280px`
- `height: 150px`
- `padding: 20px`
- `border: 5px solid #3498db`
- `margin: 20px`

### Thẻ 1 - content-box

Kích thước thực tế của phần hộp, chưa tính margin:

- Rộng: `280 + 20 + 20 + 5 + 5 = 330px`
- Cao: `150 + 20 + 20 + 5 + 5 = 200px`

Nếu tính cả margin ở hai phía:

- Rộng chiếm chỗ: `370px`
- Cao chiếm chỗ: `240px`

### Thẻ 2 và 3 - border-box

`width: 280px` và `height: 150px` đã bao gồm padding và border.

Nếu tính cả margin ở hai phía:

- Rộng chiếm chỗ: `320px`
- Cao chiếm chỗ: `190px`

Mở Developer Tools (F12) và xem tab **Computed** để đối chiếu kích thước thực tế.
