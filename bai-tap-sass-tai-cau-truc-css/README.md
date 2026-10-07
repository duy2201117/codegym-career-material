# Bài tập: Tái cấu trúc CSS bằng SASS/SCSS

## Nội dung đã thực hiện

- Header + Navigation
- Hero Landing Page
- Sản phẩm nổi bật
- Số liệu thống kê
- Footer
- Responsive cho tablet/mobile

## Các kỹ thuật SASS đã sử dụng

- Variables cho màu sắc, kích thước, shadow và container.
- Nesting trong header, navigation, hero, product card và footer.
- Mixin: `flex-center`, `card`, `button`, `respond-tablet`, `respond-mobile`.
- `@content` cho responsive mixin.
- BEM naming để tổ chức class rõ ràng.

## Cấu trúc thư mục

```text
bai-tap-sass-tai-cau-truc-css/
├── index.html
├── README.md
├── scss/
│   └── style.scss
└── css/
    └── style.css
```

## Biên dịch SCSS sang CSS

Cài SASS:

```bash
npm install -g sass
```

Biên dịch một lần:

```bash
sass scss/style.scss css/style.css
```

Theo dõi và tự động biên dịch:

```bash
sass --watch scss/style.scss:css/style.css
```

## Chạy bài

Mở `index.html` trực tiếp trên trình duyệt hoặc sử dụng VS Code + Live Server.
