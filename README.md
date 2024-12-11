# Cosmetic Store Management System
## Window Programming - FIT HCMUS - 22/31

### Thành viên:

    1. 22120143 - Nguyễn Thị Huyền

    2. 22120213 - Đoàn Thị Minh Anh

    3. 22120225 - Trần Thảo Ngân

## 1. UI/UX
Hoàn thành giao diện cho các trang:

- **Login** (Đăng nhập): (Username là admin, mật khẩu là 1234)

- **Overviews** (Tổng quan):
  
    + Có icon Thông báo để hiển thị các sản phẩm với số lượng tồn kho ít (không quá 10 sản phẩm). Nếu có sản phẩm với số lượng tồn kho ít, trên icon sẽ có hiện chấm đỏ để thông báo. Khi xem tên các sản phẩm còn số lượng ít, có thể chọn vào tên sản phẩm để đi đến trang thông tin của sản phẩm đó và thực hiện cập nhật số lượng. Số giờ làm việc: **0.5h**
    
    + Các thông tin chung như Today's order, Last week's order, Stock left và Running out items được hiển thị đúng theo dữ liệu. Số giờ làm việc: **0.5h**

- **Product**: Hoàn thiện việc hiển thị sản phẩm với đầy đủ thông tin, bao gồm ảnh sản phẩm. Số giờ làm việc: **0.5h**

    ![Product Page](image-6.png)

- **Create Order**:

  + Phần bên trái hiển thị danh sách sản phẩm, bao gồm các nội dung:
    - Hiển thị từng sản phẩm với hình ảnh, tên và số lượng sản phẩm.
    - Phân trang.
    - Tìm kiếm sản phẩm bằng tên.
    - Lọc tìm sản phẩm theo Category và Manufacturer.
    - Khi ấn vào một sản phẩm trong danh sách, sản phẩm đó sẽ được thêm vào đơn hàng bên phải chờ thanh toán.

  + Phần bên phải hiển thị khách hàng và chi tiết đơn hàng, cụ thể như sau:
    - Nhập tên và số điện thoại khách hàng để xem điểm và tích điểm.
    - Có thể đăng kí thành viên mới cho khách hàng.
    - Chi tiết đơn hàng bao gồm các sản phẩm được chọn vào đơn hàng, tên, hình ảnh và số lượng sản phẩm sẽ mua. Có nút tăng và giảm số lượng sản phẩm trong đơn hàng.
    - Đơn hàng thanh toán gồm tổng tiền sản phẩm, giảm giá theo khách hàng thân thiết và tiền thuế. Khách hàng sẽ phải thanh toán dựa theo số tiền Tổng thanh toán.

  + Tổng số giờ làm việc: **3.5h**
- **Category**:
  
- **Manufacturer**:
  
- **Costumer**:

Còn trang **Analytics** nhóm đã lên ý tưởng nhưng chưa làm hoàn chỉnh.

## 2. Design patterns / architecture

- Kiến Trúc: Được xây dựng theo mẫu **MVVM (Model-View-ViewModel)**

- Tài Liệu Ghi Chú: Mỗi lớp và hàm đều có ghi chú chi tiết, giúp dễ hiểu và phát triển thêm.

## 3. Advanced topics

- **Đồng bộ thời gian thực:** Ứng dụng đồng bộ thời gian nội bộ với thời gian thực ở trang Overviews. Cụ thể:

    + Dòng chữ "Good Morning/Afternoon/Evening" sẽ thay đổi theo thời gian trong ngày.

    + Bên góc phải màn hình hiển thị ngày tháng năm theo thời gian của máy tính.

    + Khi ấn vào icon bên cạnh thì sẽ hiện ra lịch.
    
    + Số giờ làm việc: **0,5h**

- Sắp Xếp Sản Phẩm theo ID, Tên, Số Lượng, Giá, Category, và Manufacturer, có thể chọn tăng hoặc giảm dần.

- Tạo các file migration và seed, thêm dữ liệu cho databse. Số giờ làm việc: **1.5h**

## 4. Teamwork - Git flow

- Công Cụ Hợp Tác:

    + Họp nhóm được thực hiện qua **Discord**.
    ![Kênh discord để họp nhóm và lưu trữ tài liệu](image-3.png)

    + **Jira** được sử dụng để phân chia công việc và theo dõi tiến độ dự án.
    ![Phân công công việc trên Jira](image-2.png)

- Git flow:

    + Các thành viên đẩy mã nguồn lên branch riêng.

    + Leader nhóm sẽ kiểm tra và hợp nhất mã đã kiểm duyệt vào nhánh chính (master).

    ![Quá trình commit trên git](image-1.png)![Quá trình commit trên git](image.png)

## 5. Quality assurance

Quy Trình Kiểm Duyệt Mã Nguồn: Mã nguồn được leader kiểm duyệt (giải quyết xung đột nếu có) trước khi hợp nhất.
