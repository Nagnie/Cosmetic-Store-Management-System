# Cosmetic Store Management System

### Thành viên:

    1. Nguyễn Thị Huyền - 22120143

    2. Đoàn Thị Minh Anh - 22120213

    3. Trần Thảo Ngân - 22120225

## 1. UI/UX
Hoàn thành giao diện cho các trang:

- **Login** (Đăng nhập) - 0.5h

- **Overviews** (Tổng quan): Bao gồm phần header chứa thời gian, phần Analytics Overview hiển thị được code cứng, và danh sách sản phẩm tổng quát, ấn vào nút More ở dưới cùng sẽ đến trang Product Data. - 1h

- **Product Data**: hiển thị danh sách tất cả sản phẩm, bao gồm ID, Name, Quantity, Price, Category và Manufacturer. Có các chức năng:
    
    + Thêm sản phẩm mới - 1h

    + Tìm kiếm bằng tên - 1h

    + Lọc sản phẩm theo Category và Manufacturer. - 1h

    + Sắp Xếp Sản Phẩm theo ID, Tên, Số Lượng, Giá, Category, và Manufacturer, có thể chọn tăng hoặc giảm dần. - 1h

    + Khi ấn vào tên một sản phẩm thì sẽ hiện ra trang Product, hiển thị thông tin chi tiết của sản phẩm đó.

- **Product**: hiển thị hình ảnh, tên, ID, số lượng, giá cả, danh mục và nhà sản xuất, trạng thái (còn hàng hay hết hàng) và mô tả. Bên dưới hình ảnh là hai nút Delete (dùng để xóa sản phẩm) và Edit (dùng để chỉnh sửa thông tin sản phẩm). - 2h

- **Data Binding**: Đã thực hiện data binding dạng văn bản, và đang tiếp tục tìm hiểu cách ràng buộc dữ liệu hình ảnh. - 2h

Các trang còn lại nhóm đã lên ý tưởng nhưng chưa làm hoàn chỉnh.

## 2. Design patterns / architecture

- Kiến Trúc: Được xây dựng theo mẫu **MVVM (Model-View-ViewModel)**

- Tài Liệu Ghi Chú: Mỗi lớp và hàm đều có ghi chú chi tiết, giúp dễ hiểu và phát triển thêm.

## 3. Advanced topics

- **Đồng bộ thời gian thực:** Ứng dụng đồng bộ thời gian nội bộ với thời gian thực ở trang Overviews. Cụ thể:

    + Dòng chữ "Good Morning/Afternoon/Evening" sẽ thay đổi theo thời gian trong ngày.

    + Bên góc phải màn hình hiển thị ngày tháng năm theo thời gian của máy tính.

    + Số giờ làm việc: 0,5h

- Sắp Xếp Sản Phẩm theo ID, Tên, Số Lượng, Giá, Category, và Manufacturer, có thể chọn tăng hoặc giảm dần.

- Tạo các file migration và seed cho databse. - 0.5h

## 4. Teamwork - Git flow

- Công Cụ Hợp Tác:

    + Họp nhóm được thực hiện qua **Discord**.

    + **Jira** được sử dụng để phân chia công việc và theo dõi tiến độ dự án.

- Git flow:

    + Các thành viên đẩy mã nguồn lên branch riêng.

    + Leader nhóm sẽ kiểm tra và hợp nhất mã đã kiểm duyệt vào nhánh chính (master).

## 5. Quality assurance

Quy Trình Kiểm Duyệt Mã Nguồn: Mã nguồn được leader kiểm duyệt trước khi hợp nhất, đảm bảo tuân thủ tiêu chuẩn chất lượng.