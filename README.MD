# Giới thiệu về Reverse Engineering để lấy Token API từ web qldt ptit

Repo này chứa mã nguồn và tài liệu hướng dẫn về cách reverse engineering để lấy token nhằm sử dụng API. Reverse engineering là quá trình phân tích một hệ thống để hiểu rõ cấu trúc, chức năng và hoạt động của nó. Trong trường hợp này, chúng ta sẽ tập trung vào việc lấy token từ các ứng dụng web hoặc di động để có thể truy cập và sử dụng các API mà không cần thông qua giao diện người dùng.

## Tác giả
- [duyvu871](https://www.facebook.com/du.bui.380683)

## Mục tiêu
- File target: 4.js, 7.js
- Hiểu rõ cách hoạt động của các API và cách chúng bảo vệ dữ liệu thông qua việc sử dụng token.
- Học cách phân tích và trích xuất token từ các ứng dụng web hoặc di động.
- Sử dụng token để thực hiện các yêu cầu API một cách tự động và hiệu quả.

## Nội dung

- Giới thiệu về reverse engineering và các công cụ cần thiết.
- Hướng dẫn chi tiết về cách phân tích và trích xuất token từ các ứng dụng.
- Ví dụ minh họa và các bài tập thực hành.

## Kết quả

```javascript
const ge = new UaGenerate(null);

const isapi = ge.isapi("https://qldt.ptit.edu.vn/api/auth/login");
const mc = ge.mc(ge.cn, 5, 3);
const gc = ge.gc(isapi);

console.log("isapi", isapi); // AUTH/LOGIN
console.log("header key", mc); // ua
console.log("ua token", gc); // token

```

## Lưu ý

Việc reverse engineering và sử dụng token API cần tuân thủ các quy định pháp luật và điều khoản dịch vụ của các nhà cung cấp API. Hãy đảm bảo rằng bạn có quyền hợp pháp để thực hiện các hoạt động này và không vi phạm bất kỳ quy định nào.

Chúc các bạn học tập và nghiên cứu hiệu quả!
