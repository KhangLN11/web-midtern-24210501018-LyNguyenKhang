# CODEHUB - WEBSITE ĐĂNG KÝ KHÓA HỌC LẬP TRÌNH

## Thông tin sinh viên

* Họ và tên: Lý Khang
* Ngành học: Công nghệ Thông tin
* Môn học: Lập trình Web
* Bài tập: Giữa kỳ

---

## Giới thiệu dự án

CodeHub là website giới thiệu và đăng ký các khóa học lập trình dành cho sinh viên.

Website được xây dựng bằng:

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6)
* LocalStorage

Mục tiêu của dự án là giúp người dùng:

* Xem danh sách khóa học
* Tìm kiếm khóa học
* Lọc khóa học theo danh mục
* Xem chi tiết khóa học
* Đăng ký khóa học
* Lưu dữ liệu đăng ký bằng LocalStorage
* Xem danh sách người đã đăng ký

---

## Chức năng chính

### 1. Trang chủ

* Giới thiệu website
* Hiển thị banner
* Giới thiệu các khóa học nổi bật
* Giới thiệu lợi ích của việc học lập trình

### 2. Danh sách khóa học

* Hiển thị 8 khóa học
* Tìm kiếm theo tên khóa học
* Lọc theo danh mục
* Lọc theo cấp độ
* Reset bộ lọc
* Xem chi tiết bằng Modal Bootstrap

### 3. Đăng ký khóa học

* Nhập họ tên
* Nhập email
* Nhập số điện thoại
* Nhập lớp học
* Chọn khóa học
* Ghi chú

### 4. Kiểm tra dữ liệu

* Họ tên tối thiểu 3 ký tự
* Email đúng định dạng
* Số điện thoại từ 9 đến 11 chữ số
* Không được bỏ trống lớp học
* Phải chọn khóa học

### 5. LocalStorage

* Lưu thông tin đăng ký
* Dữ liệu không mất khi tải lại trang

### 6. Danh sách đăng ký

* Hiển thị dữ liệu từ LocalStorage
* Xóa từng đăng ký
* Xóa toàn bộ đăng ký

---

## Cấu trúc thư mục

```text
project/
│
├── index.html
├── courses.html
├── register.html
├── registrations.html
│
├── assets/
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── data.js
│   │   └── main.js
│   │
│   └── images/
│       ├── logo.png
│       ├── banner.jpg
│       ├── course-1.jpg
│       ├── course-2.jpg
│       ├── course-3.jpg
│       ├── course-4.jpg
│       ├── course-5.jpg
│       ├── course-6.jpg
│       ├── course-7.jpg
│       └── course-8.jpg
```

---

## Công nghệ sử dụng

### HTML5

Sử dụng các thẻ semantic:

* header
* nav
* main
* section
* footer

### CSS3

* Responsive Design
* Flexbox
* Hover Effect
* Media Query

### Bootstrap 5

* Navbar
* Grid System
* Card
* Modal
* Form
* Button
* Table

### JavaScript

* DOM Manipulation
* Event Handling
* Search
* Filter
* Form Validation
* LocalStorage

---

## Hướng dẫn chạy dự án

### Cách 1

Mở file:

```text
index.html
```

bằng trình duyệt.

### Cách 2

Sử dụng VS Code:

1. Cài đặt Live Server
2. Chuột phải vào index.html
3. Chọn Open with Live Server

---

## Kết quả đạt được

* Xây dựng website hoàn chỉnh bằng HTML, CSS, Bootstrap và JavaScript.
* Áp dụng LocalStorage để lưu trữ dữ liệu phía trình duyệt.
* Thiết kế giao diện Responsive trên Desktop và Mobile.
* Thực hiện đầy đủ các chức năng theo yêu cầu đề bài.

---

## Tài liệu tham khảo

* https://getbootstrap.com
* https://developer.mozilla.org
* https://www.w3schools.com
* https://stackoverflow.com

---

## Kết luận

Dự án giúp sinh viên vận dụng các kiến thức HTML, CSS, Bootstrap và JavaScript vào việc xây dựng một website thực tế. Qua đó nâng cao kỹ năng thiết kế giao diện, xử lý sự kiện, thao tác DOM và lưu trữ dữ liệu bằng LocalStorage.
