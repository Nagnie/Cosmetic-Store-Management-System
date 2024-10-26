using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Cosmetic_Store_Management_System.Core.Contracts.Services;
using Cosmetic_Store_Management_System.Core.Models;

namespace Cosmetic_Store_Management_System.Core.Services;
public class SampleProductDataService : ISampleProductDataService
{
    private List<SampleProduct> _allProducts;

    public SampleProductDataService()
    {
    }

    private static IEnumerable<SampleProduct> AllProducts()
    {
        return new List<SampleProduct>()
        {
            new SampleProduct()
            {
                ProductID = "001",
                ProductName = "Son Tint Lì Romand Juicy Lasting Tint Starry Edition Màu 23 Nucadamia - Màu đỏ nâu nude",
                StockStatus = "In stock",
                Price = 164000,
                Description = "Son Tint Lì Romand Juicy Lasting Tint Starry Edition Màu 23 Nucadamia - Màu đỏ nâu nude là cây son luôn dẫn đầu về lượt bán kể từ khi ra mắt tại Việt Nam. Vì thế Romand đã ra mắt phiên bản chỉ dành riêng cho fan Việt Nam với thiết kế những ngôi sao có màu son 23 đang tỏa sáng, rực rỡ cùng với điểm nhấn thân son mạ rose gold, thiết kế chưa từng có tại Romand.",
                Quantity = 10,
                Category = "Son",
                Manufacturer = "Romand",
                ImagePath = "../Assets/Product/001.jpg"
            },
            new SampleProduct()
            {
                ProductID = "002",
                ProductName = "Son Kem Lì, Lên Màu Chuẩn, Mịn Môi Romand Blur Fudge Tint 5g",
                StockStatus = "In stock",
                Price = 174000,
                Description = "Son Kem Lì, Lên Màu Chuẩn, Mịn Môi Romand Blur Fudge Tint là son kem đến từ thương hiệu Romand có chất son fudge mướt mịn, dễ dàng lướt nhẹ trên đôi môi, mang đến cho bạn đôi môi mịn lì rạng rỡ đầy thu hút.\r\n\r\n",
                Quantity = 10,
                Category = "Son",
                Manufacturer = "Romand",
                ImagePath = "../Assets/Product/002.jpg"
            },
            new SampleProduct()
            {
                ProductID = "003",
                ProductName = "Phấn Nước Trang Điểm Che Phủ Tự Nhiên, Căng Bóng Thuần Chay Romand Bare Water Cushion SPF38/PA++++ 20g",
                StockStatus = "In stock",
                Price = 369000,
                Description = "Phấn Nước Trang Điểm Căng Bóng Thuần Chay Romand Bare Water Cushion là phấn nước trang điểm đến từ thương hiệu Romand che phủ hoàn hảo các khuyết điểm trên da đồng thời mang đến lớp finish với độ căng bóng vừa phải cho bạn lớp trang điểm nền hoàn hảo, rạng rỡ xinh đẹp căng tràn sức sống. ",
                Quantity = 06,
                Category = "Cushion",
                Manufacturer = "Romand",
                ImagePath = "../Assets/Product/003.jpg"
            },
            new SampleProduct()
            {
                ProductID = "004",
                ProductName = "Bảng Phấn Mắt 9 Ô Ngọt Ngào, Trong Trẻo Etude Play Color Eyes Milky New Year #BLUEBERRY MILK",
                StockStatus = "In stock",
                Price = 199000,
                Description = "Bảng Phấn Mắt 9 Ô Etude House Play Color Eyes Milky New Year phiên bản giới hạn nằm trong bộ sưu tập Milky New Year 2021 của thương hiệu Etude House lấy cảm hứng từ màu sắc trái cây ngọt ngào hòa quyện với sữa tươi trắng ngần, chất phấn mềm và mỏng nhẹ, màu lên rõ nét và độ bám màu tốt giúp bạn hoàn thành lớp trang điểm trong trẻo ngọt ngào không kém phần lấp lánh, rạng rỡ.",
                Quantity = 08,
                Category = "Trang điểm mắt",
                Manufacturer = "ETUDE ",
                ImagePath = "../Assets/Product/004.jpg"
            },
            new SampleProduct()
            {
                ProductID = "005",
                ProductName = "Kem Chống Nắng Kiềm Dầu, Nâng Tone Cho Da Sáng Hồng The Saem Pink Sun Cream EX SPF50+/PA++++",
                StockStatus = "In stock",
                Price = 128000,
                Description = "Kem Chống Nắng Kiềm Dầu, Nâng Tone Cho Da Sáng Hồng The Saem Pink Sun Cream EX SPF50+/PA++++ với công thức kem chống nắng thuộc thương hiệu The Saem. Thành phần bột Calamine màu hồng có khả năng làm dịu nhạy cảm, nâng tone, kiềm dầu, bảo vệ da thoải mái tránh tia UV, tia cực tím.",
                Quantity = 12,
                Category = "Kem chống nắng",
                Manufacturer = "The Seam",
                ImagePath = "../Assets/Product/005.jpg"
            },
            new SampleProduct()
            {
                ProductID = "006",
                ProductName = "Son Kem Lì, Mịn Mượt Nhẹ Môi Black Rouge Double Layer Over Velvet 4.1g",
                StockStatus = "Out of stock",
                Price = 169000,
                Description = "Son Kem Lì, Mịn Mượt Nhẹ Môi Black Rouge Double Layer Over Velvet 4.1g là son kem lì đến từ thương hiệu Black Rouge có kết cấu chất son mịn mượt, giúp đôi môi mịn màng và căng tràn sức sống cả ngày bởi chức năng cấp ẩm sâu.",
                Quantity = 10,
                Category = "Son",
                Manufacturer = "Black Rouge",
                ImagePath = "../Assets/Product/006.jpg"
            },
            new SampleProduct()
            {
                ProductID = "007",
                ProductName = "Bảng Phấn Mắt 9 Ô Xinh Xắn Black Rouge Colordation Mood Palette",
                StockStatus = "In stock",
                Price = 217000,
                Description = "Bảng Phấn Mắt 9 Ô Xinh Xắn Black Rouge Colordation Mood Palette là phấn mắt thuộc thương hiệu Black Rouge với thiết kế 9 ô màu xinh xắn, bảng màu trendy với đủ cấp độ và phân cấp rõ ràng: 3 cấp Light – Point – Deep cho bạn thỏa sức sáng tạo phong cách makeup khác nhau. Bảng màu với kết cấu mềm mịn, bền màu giúp giữ đôi mắt luôn lung linh, cuốn hút mọi ánh nhìn. ",
                Quantity = 10,
                Category = "Trang điểm mắt",
                Manufacturer = "Black Rouge",
                ImagePath = "../Assets/Product/007.jpg"
            },
            new SampleProduct()
            {
                ProductID = "008",
                ProductName = "Bút Kẻ Mắt Nước Chống Trôi Black Rouge Power Proof Pen Liner 0.5g",
                StockStatus = "In stock",
                Price = 149000,
                Description = "Bút Kẻ Mắt Nước Chống Trôi Black Rouge Power Proof Pen Liner là bút  kẻ mắt nước đến từ thương hiệu Black Rouge vừa cho ra mắt bộ sưu tập Pool Party. Trong đó Power Proof Pen Liner là dòng kẻ mắt nằm trong bộ sưu tập lần này của Black Rouge với đường kẻ cực kì sắc nét & khó lem, lên màu rõ ngay lần di bút đầu tiên.",
                Quantity = 18,
                Category = "Trang điểm mắt",
                Manufacturer = "Black Rouge",
                ImagePath = "../Assets/Product/008.jpg"
            },
            new SampleProduct()
            {
                ProductID = "009",
                ProductName = "Kem Nền Kiềm Dầu, Che Phủ Mỏng Nhẹ, Lâu Trôi The Saem Saemmul Perfect Pore BB SPF30/PA++ 30g",
                StockStatus = "In stock",
                Price = 92000,
                Description = "Kem Nền Kiềm Dầu, Che Phủ Mỏng Nhẹ, Lâu Trôi The Saem Saemmul Perfect Pore BB là kem nền trang điểm đến từ thương hiệu The Saem sản phẩm là sự kết hợp giữa kem lót và kem BB giúp che phủ lỗ chân lông mịn mượt, mang đến lớp nền trang điểm mềm mại được che phủ mỏng nhẹ, tự nhiên.",
                Quantity = 10,
                Category = "Kem nền",
                Manufacturer = "The Saem",
                ImagePath = "../Assets/Product/009.jpg"
            },
            new SampleProduct()
            {
                ProductID = "010",
                ProductName = "Kem Dưỡng Ẩm Cấp Nước Từ Nguồn Nước Khoáng Sông Băng The Saem Iceland Aqua Moist Cream 60ml",
                StockStatus = "Out of stock",
                Price = 99000,
                Description = "Kem Dưỡng Ẩm Cấp Nước Từ Nguồn Nước Khoáng Sông Băng The Saem Iceland Aqua Moist Cream là kem dưỡng với thành phần nước từ nguồn nước khoáng tinh khiết Iceland giàu khoáng chất và các chiết xuất thực vật như rêu Iceland, quả mọng, tảo bẹ,... giúp bảo vệ da tránh các tác nhân gây kích ứng bên ngoài và củng cố hàng rào độ ẩm tự nhiên cho da thuộc thương hiệu The Saem đến từ Hàn Quốc",
                Quantity = 10,
                Category = "Son",
                Manufacturer = "The Saem",
                ImagePath = "../Assets/Product/010.jpg"
            },
            new SampleProduct()
            {
                ProductID = "011",
                ProductName = "Phấn Má Hồng Mịn Lì Siêu Xinh 3CE Face Blush 5.5g",
                StockStatus = "In stock",
                Price = 332000,
                Description = "Phấn Má Hồng 3CE Face Blush là má hồng thuộc thương hiệu 3CE với kết cấu phấn mềm mịn cùng bảng màu tông ấm hài hòa, tươi tắn tạo điểm nhấn cho gương mặt bạn thêm rạng rỡ, đáng yêu tỏa sáng thu hút mọi ánh nhìn.",
                Quantity = 06,
                Category = "Son",
                Manufacturer = "3CE",
                ImagePath = "../Assets/Product/011.jpg"
            },
            new SampleProduct()
            {
                ProductID = "012",
                ProductName = "Kem Nền Kiềm Dầu, Che Phủ Tự Nhiên Catrice HD Liquid Coverage Foundation 30ml",
                StockStatus = "In stock",
                Price = 199000,
                Description = "Kem Nền Kiềm Dầu, Che Phủ Tự Nhiên Catrice HD Liquid Coverage Foundation là kem nền đến từ thương hiệu Catrice. Với công thức hạn chế thấm nước và mồ hôi, kem nền giúp lớp trang điểm bền màu, lâu trôi. Kết cấu mỏng nhẹ cho độ che phủ cao giúp tạo lớp nền mịn màng, tự nhiên, không gây nặng mặt.",
                Quantity = 12,
                Category = "Kem nền",
                Manufacturer = "Catrice",
                ImagePath = "../Assets/Product/012.jpg"
            },
            new SampleProduct()
            {
                ProductID = "013",
                ProductName = "Kem Đánh Răng Hỗ Trợ Làm Trắng Răng, Sạch Mảng Bám Marvis Mint Toothpaste",
                StockStatus = "In stock",
                Price = 185000,
                Description = "Kem Đánh Răng Hỗ Trợ Làm Trắng Răng, Sạch Mảng Bám Marvis Mint Toothpaste là kem đánh răng thuộc thương hiệu Marvis đến từ tập đoàn nổi tiếng Unilever. Làm trắng răng, đánh bay mảng bám, làm sạch khoang miệng, cùng các mùi hương mát lạnh, thơm tho.",
                Quantity = 15,
                Category = "Kem đánh răng",
                Manufacturer = "Marvis",
                ImagePath = "../Assets/Product/013.jpg"
            },
            new SampleProduct()
            {
                ProductID = "014",
                ProductName = "Kem Dưỡng Sáng Da Ngày & Đêm Olay Luminous Light Perfecting Cream 50g",
                StockStatus = "Out of stock",
                Price = 189000, 
                Description = "Kem Dưỡng Sáng Da Ngày & Đêm Olay Luminous Light Perfecting Cream là kem dưỡng thuộc thương hiệu OLAY đến từ Mỹ. Kem dưỡng sử dụng phức hợp làm sáng da từ Niacinamide tinh khiết 99%, Vitamin E, Vitamin B5 giúp làm sáng & đều màu da, ngăn ngừa tăng sắc tố đen và thúc đẩy quá trình tái tạo da giúp da tươi sáng tự nhiên.",
                Quantity = 02,
                Category = "Son",
                Manufacturer = "Olay",
                ImagePath = "../Assets/Product/014.jpg"
            },
            new SampleProduct()
            {
                ProductID = "015",
                ProductName = "Bảng Phấn Mắt 10 Ô Siêu Lấp Lánh Romand Better Than Eye Palette",
                StockStatus = "In stock",
                Price = 399000,
                Description = "Bảng Phấn Mắt 10 Ô Siêu Lấp Lánh Romand Better Than Eye Palette là bảng phấn mắt 10 ô đầu tiên của thương hiệu Romand với 5 mức độ màu sắc khác nhau tạo nên đôi mắt chiều sâu cuốn hút mọi ánh nhìn.",
                Quantity = 14,
                Category = "Son",
                Manufacturer = "Romand",
                ImagePath = "../Assets/Product/015.jpg"
            },
            new SampleProduct()
            {
                ProductID = "016",
                ProductName = "Phấn Nước Dưỡng Ẩm Cho Lớp Nền Căng Bóng Laneige Neo Cushion Glow SPF 46 PA++",
                StockStatus = "In stock",
                Price = 889000,
                Description = "Phấn Nước Dưỡng Ẩm Cho Lớp Nền Căng Bóng Laneige Neo Cushion Glow SPF 46 PA++ là phấn nước đến từ thương hiệu Laneige, chứa thành phần dưỡng ẩm giúp dưỡng ẩm 5 lần suốt cả ngày, tạo nên lớp nền sáng bóng tự nhiên, hoàn hảo đến không ngờ.",
                Quantity = 06,
                Category = "Cushion",
                Manufacturer = "Laneige",
                ImagePath = "../Assets/Product/016.jpg"
            },
            new SampleProduct()
            {
                ProductID = "017",
                ProductName = "Kem Chống Nắng, Chống Tia Hồng Ngoại, Quang Phổ Rộng Cho Da Mụn Nhạy Cảm Dr.G R.E.D Blemish Soothing Up Sun SPF50+ PA++++ 50ml",
                StockStatus = "In stock",
                Price = 367000,
                Description = "Kem Chống Nắng Dr.G Chống Tia Hồng Ngoại, Phổ Rộng Cho Da Mụn Nhạy Cảm là kem chống nắng thuộc thương hiệu Dr.G với chỉ số chống nắng cao cùng các màng lọc tiên tiến giúp bảo vệ da trước các tác động xấu từ tia UV, tia hồng ngoại và bụi mịn. Đồng thời sản phẩm còn chứa chiết xuất rau má, ngải cứu, diếp cá giúp bổ sung độ ẩm và làm dịu da, an toàn cho làn da mụn nhạy cảm.",
                Quantity = 10,
                Category = "Kem chống nắng",
                Manufacturer = "Dr.G",
                ImagePath = "../Assets/Product/017.jpg"
            },
            new SampleProduct()
            {
                ProductID = "018",
                ProductName = "Mascara Chuốt Mi Giúp Làm Tơi & Dày Mi Lemonade Soaring Mascara 6ml",
                StockStatus = "Out of stock",
                Price = 155000,
                Description = "Mascara Chuốt Mi Giúp Làm Tơi & Dày Mi Lemonade Soaring Mascara là mascara chuốt mi của thương hiệu Lemonade với khả năng làm tơi mi và dày mi và cho đôi mi cong vút cả ngày dài tạo điểm nhấn chiều sâu cho đôi mắt thêm sắc sảo cuốn hút mọi ánh nhìn.",
                Quantity = 13,
                Category = "Trang điểm mắt",
                Manufacturer = "Lemonade",
                ImagePath = "../Assets/Product/018.jpg"
            },
            new SampleProduct()
            {
                ProductID = "019",
                ProductName = "Dầu Tẩy Trang Làm Sạch Sâu Ma:nyo Pure Cleansing Oil 200ml",
                StockStatus = "In stock",
                Price = 449000,
                Description = "Dầu Tẩy Trang Làm Sạch Sâu Ma:nyo Pure Cleansing Oil là dầu tẩy trang thuộc thương hiệu Ma:nyo đến từ Hàn Quốc. Với kết cấu nhẹ, dễ dàng hòa tan và lấy đi mọi bụi bẩn, bã nhờn cặn trang điểm trên bề mặt da. Đồng thời công thức chứa 12 nguồn thành phần dầu thực vật, vitamin giúp dưỡng ẩm, hỗ trợ phục hồi, củng cố hàng rào bảo vệ da, nuôi dưỡng làn da tươi trẻ, đều màu.",
                Quantity = 04,
                Category = "Tẩy trang",
                Manufacturer = "Ma:nyo",
                ImagePath = "../Assets/Product/019.jpg"
            },
            new SampleProduct()
            {
                ProductID = "020",
                ProductName = "Sữa Tắm Dưỡng Ẩm, Hỗ Trợ Làm Trắng Da, Tẩy Tế Bào Chết Grace And Glow Body Wash 400ml",
                StockStatus = "In stock",
                Price = 88000, 
                Description = "Sữa Tắm Dưỡng Ẩm, Hỗ Trợ Làm Trắng Da, Tẩy Tế Bào Chết Grace And Glow Body Wash là dòng sữa tắm đến từ thương hiệu Grace And Glow. Sữa tắm có kết cấu dạng gel dễ dàng tạo bọt, giúp len lỏi sâu vào da làm sạch bụi bẩn, mà không bị khô căng nhờ các dưỡng chất cần thiết cho da giúp da luôn mềm mịn. Cùng với hương thơm như nước hoa nhẹ nhàng, sang trọng và cao cấp mang đến cảm giác thư giãn, sảng khoái.",
                Quantity = 09,
                Category = "Sữa tắm",
                Manufacturer = "Grace And Glow",
                ImagePath = "../Assets/Product/020.jpg"
            },
            new SampleProduct()
            {
                ProductID = "021",
                ProductName = "Má Hồng Dạng Thỏi Cho Đôi Má Hồng Hào, Xinh Xắn I'm Meme I'm Multi Stick Blusher 7g",
                StockStatus = "In stock",
                Price = 179000,
                Description = "Má Hồng Dạng Thỏi Cho Đôi Má Hồng Hào, Xinh Xắn I'm Meme I'm Multi Stick Blusher là má hồng dạng thỏi đến từ thương hiệu I'm Meme với chất kem mềm mịn hiệu ứng má hồng tự nhiên, độ bám màu cao và lâu trôi và dạng thỏi dễ sử dụng giúp cho đôi má luôn rạng rỡ, tươi tắn.",
                Quantity = 16,
                Category = "Phấn má",
                Manufacturer = "I'm Meme",
                ImagePath = "../Assets/Product/021.jpg"
            },
            new SampleProduct()
            {
                ProductID = "022",
                ProductName = "Kem Dưỡng Ẩm, Hỗ Trợ Làm Sáng Da Chiết Xuất Gạo 9 Wishes Rice Radiance Cream 50ml",
                StockStatus = "Out of stock",
                Price = 322000,
                Description = "Kem Dưỡng Ẩm, Hỗ Trợ Làm Sáng Da Chiết Xuất Gạo 9 Wishes Rice Radiance Cream là kem dưỡng thuộc thương hiệu 9 Wishes chứa tới 72% thành phần từ nước gạo và các chiết xuất lên men từ gạo có khả năng thanh lọc, hỗ trợ làm sáng da nuôi dưỡng làn da căng mịn đầy sức sống. Cùng các chiết xuất thực vật khác như rau sam, cam thảo hỗ trợ làm sáng và cải thiện hàng rào bảo vệ da.",
                Quantity = 03,
                Category = "Kem dưỡng",
                Manufacturer = "9 Wishes",
                ImagePath = "../Assets/Product/022.jpg"
            },
            new SampleProduct()
            {
                ProductID = "023",
                ProductName = "Nước Hoa Hồng Dưỡng Ẩm By Merzy V-Hyaluronic Acid Moisture Toner 500ml",
                StockStatus = "In stock",
                Price = 239000,
                Description = "Nước Hoa Hồng Dưỡng Ẩm By Merzy V-Hyaluronic Acid Moisture Toner là nước hoa hồng thuộc thương hiệu By Merzy đến từ Hàn Quốc. Chứa 11 loại axit Hyaluronic và 6 loại thảo mộc giúp chăm sóc làm dịu da, cấp ẩm và cân bằng độ ẩm - dầu, mang lại cảm giác ẩm mượt và trong trẻo.",
                Quantity = 07,
                Category = "Toner",
                Manufacturer = "Merzy",
                ImagePath = "../Assets/Product/023.jpg"
            },
        };
    
    }

    public async Task<IEnumerable<SampleProduct>> GetListDetailsDataAsync()
    {
        _allProducts ??= new List<SampleProduct>(AllProducts());

        await Task.CompletedTask;
        return _allProducts;
    }


}
