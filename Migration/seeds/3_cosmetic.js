exports.seed = async function (knex) {
  await knex('COSMETIC').del();
  await knex('COSMETIC').insert([
    {
      cosmetic_name: 'Romand Zero Velvet Tint',
      quantity: 100,
      price: 149000,
      category_id: 1,
      manufacturer_id: 1,
      description: 'Son Kem Lì Cực Nhẹ Môi Romand Zero Velvet Tint là son kem lì của thương hiệu Romand với kết cấu velvet xốp mềm cùng bảng màu đa dạng, dễ dùng cho đôi môi lên màu chuẩn, mịn mượt, nổi bật dù bạn ở bất cứ đâu.',
      image: 'images/001.jpg'
    },
    {
      cosmetic_name: 'Black Rouge Air Fit Velvet Tint',
      quantity: 150,
      price: 169000,
      category_id: 2,
      manufacturer_id: 2,
      description: 'Black Rouge Air Fit Velvet Tint là bộ sưu tập đầu tiên của dòng son kem đình đám đến từ Black Rouge Hàn Quốc. 7 màu sắc thời thượng hòa cùng xu hướng trang điểm ấn tượng đang cực kì thịnh hành trong thời gian gần đây, mang đến cho các cô gái nét cuốn hút khó cưỡng. ',
      image: 'images/002.jpg'
    },
    {
      cosmetic_name: '3CE Hazy Lip Clay 4g',
      quantity: 80,
      price: 349000,
      category_id: 1,
      manufacturer_id: 3,
      description: 'Son Kem Lì, Mịn Mượt Môi 3CE Hazy Lip Clay là son kem lì của thương hiệu 3CE với kết cấu son mịn lì, bám màu đẹp, lên màu chuẩn, không trôi và dễ tán đều lên môi. Bảng màu son đa dạng từ những tông màu đa dạng cho các bạn dễ lựa chọn những tông màu phù hợp với trang điểm của bạn.',
      image: 'images/003.jpg'
    },
    {
      cosmetic_name: 'The Saem Cover Perfection Tip Concealer',
      quantity: 200,
      price: 109000,
      category_id: 8,
      manufacturer_id: 4,
      description: 'Kem Che Khuyết Điểm Có Chống Nắng Hàn Quốc The Saem Cover Perfection Tip Concealer SPF28/PA++ là che khuyết điểm với khả năng che phủ cao giúp che hiệu quả các đốm tàn nhang, sẹo do mụn hay các đầu mụn bị ửng đỏ trên da, hiệu chỉnh tông màu da mang đến cho bạn lớp nền chuẩn không tì vết.',
      image: 'images/004.jpg'
    },
    {
      cosmetic_name: 'Romand Bare Water Cushion SPF38/PA++++ 20g',
      quantity: 120,
      price: 369000,
      category_id: 3,
      manufacturer_id: 1,
      description: 'Phấn Nước Trang Điểm Căng Bóng Thuần Chay Romand Bare Water Cushion là phấn nước trang điểm đến từ thương hiệu Romand che phủ hoàn hảo các khuyết điểm trên da đồng thời mang đến lớp finish với độ căng bóng vừa phải cho bạn lớp trang điểm nền hoàn hảo, rạng rỡ xinh đẹp căng tràn sức sống.',
      image: 'images/005.jpg'
    },
    {
      cosmetic_name: 'Etude Play Color Eyes Milky New Year #BLUEBERRY MILK',
      quantity: 130,
      price: 199000,
      category_id: 4,
      manufacturer_id: 7,
      description: 'Bảng Phấn Mắt 9 Ô Etude House Play Color Eyes Milky New Year phiên bản giới hạn nằm trong bộ sưu tập Milky New Year 2021 của thương hiệu Etude House lấy cảm hứng từ màu sắc trái cây ngọt ngào hòa quyện với sữa tươi trắng ngần, chất phấn mềm và mỏng nhẹ, màu lên rõ nét và độ bám màu tốt giúp bạn hoàn thành lớp trang điểm trong trẻo ngọt ngào không kém phần lấp lánh, rạng rỡ.',
      image: 'images/006.jpg'
    },
    {
      cosmetic_name: 'The Saem Pink Sun Cream EX SPF50+/PA++++',
      quantity: 90,
      price: 128000,
      category_id: 6,
      manufacturer_id: 4,
      description: 'Kem Chống Nắng Kiềm Dầu, Nâng Tone Cho Da Sáng Hồng The Saem Pink Sun Cream EX SPF50+/PA++++ với công thức kem chống nắng thuộc thương hiệu The Saem. Thành phần bột Calamine màu hồng có khả năng làm dịu nhạy cảm, nâng tone, kiềm dầu, bảo vệ da thoải mái tránh tia UV, tia cực tím.',
      image: 'images/007.jpg'
    },
    {
      cosmetic_name: 'Black Rouge Double Layer Over Velvet 4.1g',
      quantity: 60,
      price: 169000,
      category_id: 1,
      manufacturer_id: 2,
      description: 'Son Kem Lì, Mịn Mượt Nhẹ Môi Black Rouge Double Layer Over Velvet 4.1g là son kem lì đến từ thương hiệu Black Rouge có kết cấu chất son mịn mượt, giúp đôi môi mịn màng và căng tràn sức sống cả ngày bởi chức năng cấp ẩm sâu.',
      image: 'images/008.jpg'
    },
    {
      cosmetic_name: "Black Rouge Colordation Mood Palette",
      quantity: 10,
      price: 217000,
      category_id: 4,
      manufacturer_id: 2,
      image: 'images/009.jpg',
      description: "Bảng Phấn Mắt 9 Ô Xinh Xắn Black Rouge Colordation Mood Palette là phấn mắt thuộc thương hiệu Black Rouge với thiết kế 9 ô màu xinh xắn, bảng màu trendy với đủ cấp độ và phân cấp rõ ràng: 3 cấp Light – Point – Deep cho bạn thỏa sức sáng tạo phong cách makeup khác nhau. Bảng màu với kết cấu mềm mịn, bền màu giúp giữ đôi mắt luôn lung linh, cuốn hút mọi ánh nhìn."
    },
    {
      cosmetic_name: 'Black Rouge Power Proof Pen Liner 0.5g',
      quantity: 18,
      price: 149000,
      category_id: 4,
      manufacturer_id: 2,
      image: 'images/010.jpg',
      description: "Bút Kẻ Mắt Nước Chống Trôi Black Rouge Power Proof Pen Liner là bút kẻ mắt nước đến từ thương hiệu Black Rouge vừa cho ra mắt bộ sưu tập Pool Party. Trong đó Power Proof Pen Liner là dòng kẻ mắt nằm trong bộ sưu tập lần này của Black Rouge với đường kẻ cực kì sắc nét & khó lem, lên màu rõ ngay lần di bút đầu tiên."
    },
    {
      cosmetic_name: 'The Saem Saemmul Perfect Pore BB SPF30/PA++ 30g',
      quantity: 85,
      price: 92000,
      category_id: 2,
      manufacturer_id: 4,
      description: 'Kem Nền Kiềm Dầu, Che Phủ Mỏng Nhẹ, Lâu Trôi The Saem Saemmul Perfect Pore BB là kem nền trang điểm đến từ thương hiệu The Saem sản phẩm là sự kết hợp giữa kem lót và kem BB giúp che phủ lỗ chân lông mịn mượt, mang đến lớp nền trang điểm mềm mại được che phủ mỏng nhẹ, tự nhiên.',
      image: 'images/011.jpg'
    },
    {
      cosmetic_name: 'The Saem Iceland Aqua Moist Cream 60ml',
      quantity: 110,
      price: 99000,
      category_id: 2,
      manufacturer_id: 14,
      description: 'Kem Dưỡng Ẩm Cấp Nước Từ Nguồn Nước Khoáng Sông Băng The Saem Iceland Aqua Moist Cream là kem dưỡng với thành phần nước từ nguồn nước khoáng tinh khiết Iceland giàu khoáng chất và các chiết xuất thực vật như rêu Iceland, quả mọng, tảo bẹ,... giúp bảo vệ da tránh các tác nhân gây kích ứng bên ngoài và củng cố hàng rào độ ẩm tự nhiên cho da thuộc thương hiệu The Saem đến từ Hàn Quốc.',
      image: 'images/012.jpg'
    },
    {
      cosmetic_name: 'Olay Luminous Light Perfecting Cream 50g',
      quantity: 50,
      price: 189000,
      category_id: 14,
      manufacturer_id: 13,
      description: 'Kem Dưỡng Sáng Da Ngày & Đêm Olay Luminous Light Perfecting Cream là kem dưỡng thuộc thương hiệu OLAY đến từ Mỹ. Kem dưỡng sử dụng phức hợp làm sáng da từ Niacinamide tinh khiết 99%, Vitamin E, Vitamin B5 giúp làm sáng & đều màu da, ngăn ngừa tăng sắc tố đen và thúc đẩy quá trình tái tạo da giúp da tươi sáng tự nhiên.',
      image: 'images/013.jpg'
    },
    {
      cosmetic_name: 'Laneige Neo Cushion Glow SPF 46 PA++',
      quantity: 40,
      price: 889000,
      category_id: 3,
      manufacturer_id: 10,
      description: 'Phấn Nước Dưỡng Ẩm Cho Lớp Nền Căng Bóng Laneige Neo Cushion Glow SPF 46 PA++ là phấn nước đến từ thương hiệu Laneige, chứa thành phần dưỡng ẩm giúp dưỡng ẩm 5 lần suốt cả ngày, tạo nên lớp nền sáng bóng tự nhiên, hoàn hảo đến không ngờ.',
      image: 'images/014.jpg'
    },
    {
      cosmetic_name: 'Dr.G R.E.D Blemish Soothing Up Sun SPF50+ PA++++ 50ml',
      quantity: 65,
      price: 367000,
      category_id: 6, // Assuming 'Lemonade' is category_id 15
      manufacturer_id: 14,
      description: 'Kem Chống Nắng Dr.G Chống Tia Hồng Ngoại, Phổ Rộng Cho Da Mụn Nhạy Cảm là kem chống nắng thuộc thương hiệu Dr.G với chỉ số chống nắng cao cùng các màng lọc tiên tiến giúp bảo vệ da trước các tác động xấu từ tia UV, tia hồng ngoại và bụi mịn. Đồng thời sản phẩm còn chứa chiết xuất rau má, ngải cứu, diếp cá giúp bổ sung độ ẩm và làm dịu da, an toàn cho làn da mụn nhạy cảm.',
      image: 'images/015.jpg'
    },
    {
      cosmetic_name: 'Lemonade Soaring Mascara 6ml',
      quantity: 55,
      price: 155000,
      category_id: 4,
      manufacturer_id: 15,
      description: 'Mascara Chuốt Mi Giúp Làm Tơi & Dày Mi Lemonade Soaring Mascara là mascara chuốt mi của thương hiệu Lemonade với khả năng làm tơi mi và dày mi và cho đôi mi cong vút cả ngày dài tạo điểm nhấn chiều sâu cho đôi mắt thêm sắc sảo cuốn hút mọi ánh nhìn.',
      image: 'images/016.jpg'
    },
  ]);
};
