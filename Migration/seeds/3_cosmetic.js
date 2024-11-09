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
      manufacturer_id: 12,
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
      manufacturer_id: 13,
      description: 'Kem Chống Nắng Dr.G Chống Tia Hồng Ngoại, Phổ Rộng Cho Da Mụn Nhạy Cảm là kem chống nắng thuộc thương hiệu Dr.G với chỉ số chống nắng cao cùng các màng lọc tiên tiến giúp bảo vệ da trước các tác động xấu từ tia UV, tia hồng ngoại và bụi mịn. Đồng thời sản phẩm còn chứa chiết xuất rau má, ngải cứu, diếp cá giúp bổ sung độ ẩm và làm dịu da, an toàn cho làn da mụn nhạy cảm.',
      image: 'images/015.jpg'
    },
    {
      cosmetic_name: 'Lemonade Soaring Mascara 6ml',
      quantity: 55,
      price: 155000,
      category_id: 4,
      manufacturer_id: 14,
      description: 'Mascara Chuốt Mi Giúp Làm Tơi & Dày Mi Lemonade Soaring Mascara là mascara chuốt mi của thương hiệu Lemonade với khả năng làm tơi mi và dày mi và cho đôi mi cong vút cả ngày dài tạo điểm nhấn chiều sâu cho đôi mắt thêm sắc sảo cuốn hút mọi ánh nhìn.',
      image: 'images/016.jpg'
    },
    {
      cosmetic_name: 'By Merzy V-Hyaluronic Acid Moisture Toner 500ml',
      quantity: 45,
      price: 239000,
      category_id: 12,
      manufacturer_id: 5,
      description: 'Nước Hoa Hồng Dưỡng Ẩm By Merzy V-Hyaluronic Acid Moisture Toner là nước hoa hồng thuộc thương hiệu By Merzy đến từ Hàn Quốc. Chứa 11 loại axit Hyaluronic và 6 loại thảo mộc giúp chăm sóc làm dịu da, cấp ẩm và cân bằng độ ẩm - dầu, mang lại cảm giác ẩm mượt và trong trẻo.',
      image: 'images/017.jpg'
    },
    {
      cosmetic_name: '9 Wishes Rice Radiance Cream 50ml',
      quantity: 56,
      price: 322000,
      category_id: 14,
      manufacturer_id: 16,
      description: 'Kem Dưỡng Ẩm, Hỗ Trợ Làm Sáng Da Chiết Xuất Gạo 9 Wishes Rice Radiance Cream là kem dưỡng thuộc thương hiệu 9 Wishes chứa tới 72% thành phần từ nước gạo và các chiết xuất lên men từ gạo có khả năng thanh lọc, hỗ trợ làm sáng da nuôi dưỡng làn da căng mịn đầy sức sống. Cùng các chiết xuất thực vật khác như rau sam, cam thảo hỗ trợ làm sáng và cải thiện hàng rào bảo vệ da.',
      image: 'images/018.jpg'
    },
    {
      cosmetic_name: "I'm Meme I'm Multi Stick Blusher 7g",
      quantity: 22,
      price: 322000,
      category_id: 5,
      manufacturer_id: 17,
      description: 'Kem Dưỡng Ẩm, Hỗ Trợ Làm Sáng Da Chiết Xuất Gạo 9 Wishes Rice Radiance Cream là kem dưỡng thuộc thương hiệu 9 Wishes chứa tới 72% thành phần từ nước gạo và các chiết xuất lên men từ gạo có khả năng thanh lọc, hỗ trợ làm sáng da nuôi dưỡng làn da căng mịn đầy sức sống. Cùng các chiết xuất thực vật khác như rau sam, cam thảo hỗ trợ làm sáng và cải thiện hàng rào bảo vệ da.',
      image: 'images/019.jpg'
    },
    {
      cosmetic_name: "Ma:nyo Pure Cleansing Oil 200ml",
      quantity: 19,
      price: 449000,
      category_id: 10,
      manufacturer_id: 18,
      description: 'Dầu Tẩy Trang Làm Sạch Sâu Ma:nyo Pure Cleansing Oil là dầu tẩy trang thuộc thương hiệu Ma:nyo đến từ Hàn Quốc. Với kết cấu nhẹ, dễ dàng hòa tan và lấy đi mọi bụi bẩn, bã nhờn cặn trang điểm trên bề mặt da. Đồng thời công thức chứa 12 nguồn thành phần dầu thực vật, vitamin giúp dưỡng ẩm, hỗ trợ phục hồi, củng cố hàng rào bảo vệ da, nuôi dưỡng làn da tươi trẻ, đều màu.',
      image: 'images/020.jpg'
    },
    {
      cosmetic_name: "Laneige Skin Veil Base EX 30ml",
      quantity: 58,
      price: 709000,
      category_id: 7,
      manufacturer_id: 10,
      description: 'Kem Lót Trang Điểm Dưỡng Ẩm, Nâng Tông Laneige Skin Veil Base EX 30ml là kem lót thuộc thương hiệu Laneige giúp dưỡng ẩm, kiềm dầu, làm đều màu da, tạo lớp lót bảo vệ da tránh bụi mịn, ánh nắng với chỉ số SPF 28 PA++. Kem có kết cấu dạng lỏng, tươi mát thấm nhanh, dễ tán giúp lớp trang điểm mỏng nhẹ, tự nhiên.',
      image: 'images/021.jpg'
    },
    {
      cosmetic_name: "Laneige Water Bank Blue Hyaluronic Cleansing Oil 250ml",
      quantity: 32,
      price: 729000,
      category_id: 10,
      manufacturer_id: 10,
      description: 'Dầu Tẩy Trang Làm Sạch Sâu Lỗ Chân Lông Laneige Water Bank Blue Hyaluronic Cleansing Oil là dầu tẩy trang với công thức hoá cấu trúc tương tự như bã nhờn tự nhiên, dễ dàng thẩm thấu và làm tan chảy lớp trang điểm đậm và cặn bã trên da bằng thành phần ngải cứu kết hợp dầu dừa cùng thảo dược giúp nhẹ nhàng làm sạch lỗ chân lông và cung cấp độ ẩm, trả lại làn da sạch sẽ, ẩm mượt thuộc thương hiệu Laneige đến từ Hàn Quốc.',
      image: 'images/022.jpg'
    },
    {
      cosmetic_name: "Hatomugi Moisturizing & Washing The Body Soap 800ml",
      quantity: 48,
      price: 79000,
      category_id: 11,
      manufacturer_id: 19,
      description: 'Sữa Tắm Hatomugi Moisturizing & Washing The Body Soap là sữa tắm thuộc thương hiệu Hatomugi với thành phần chính chiết xuất từ hạt Coix giúp làm sạch da một cách nhẹ nhàng, lấy đi tế bào chết giúp da thông thoáng, cung cấp độ ẩm cho da mịn màng, căng mướt, và trắng khỏe từ bên trong, làm dịu và phục hồi làn da bị cháy nắng. Là sản phẩm thường xuyên được các tạp chí đứng đầu tại Nhật Bản bình chọn thuộc top 3 sữa tắm có độ dưỡng ẩm tốt và được khách hàng yêu thích.',
      image: 'images/023.jpg'
    },
    {
      cosmetic_name: "I'm Meme Pink Blur Tone-Up Sun Base SPF50+/PA++++ 40ml",
      quantity: 66,
      price: 209000,
      category_id: 5,
      manufacturer_id: 18,
      description: "Kem Chống Nắng Nâng Tông Trắng Hồng I'm Meme Pink Blur Tone-Up Sun Base SPF50+/PA++++ là kem chống nắng giúp bảo vệ làn da mạnh mẽ bằng cách ngăn chặn cùng lúc tia UVA và UVB đồng thời làm tăng cường vẻ rạng rỡ tự nhiên của làn da bằng cách làm đều màu da, mang đến làn da trắng hồng tự nhiên nhưng vẫn thông thoáng nhẹ dịu cho da thuộc thương hiệu I'm Meme đến từ Hàn Quốc.",
      image: 'images/024.jpg'
    },
    {
      cosmetic_name: "Judydoll Sun Defense Tinted Moisturizer SPF50+ PA++++ 40g",
      quantity: 55,
      price: 336000,
      category_id: 6,
      manufacturer_id: 20,
      description: 'Kem Chống Nắng Cấp Ẩm, Nâng Tông Da Judydoll Sun Defense Tinted Moisturizer SPF50+ PA++++ là kem chống nắng đến từ thương hiệu Judydoll. Với chỉ số chống nắng cao SPF50+ PA++++ giúp bảo vệ da tối ưu cùng công thức chứa nhiều dưỡng chất giúp nuôi dưỡng da chuyên sâu. Kem chống nắng có khả năng nâng tông cho da luôn tươi tắn, rạng rỡ.',
      image: 'images/025.jpg'
    },
    {
      cosmetic_name: "Innisfree Super Volcanic Pore Clay Mask 100ml",
      quantity: 43,
      price: 324000,
      category_id: 15,
      manufacturer_id: 8,
      description: 'Mặt Nạ Đất Sét Chăm Sóc Lỗ Chân Lông Từ Đá Tro Núi Lửa Innisfree Super Volcanic Pore Clay Mask là mặt nạ đất sét thuộc thương hiệu Innisfree với thành phần chứa tro núi lửa đảo Jeju + bột vỏ quả óc chó và AHA có tác dụng làm sạch tế bào chết, làm sạch bã nhờn, dầu thừa, làm sạch sâu và cải thiện vấn đề về lỗ chân lông, hỗ trợ làm sáng da và cải thiện độ đàn hồi da.',
      image: 'images/026.jpg'
    },
    {
      cosmetic_name: "Hera Sensual Spicy Nude Balm",
      quantity: 41,
      price: 490000,
      category_id: 1,
      manufacturer_id: 15,
      description: 'Với thiết kế vỏ ngoài xinh xắn nhưng không kém phần hiện đại, sở hữu màu sắc nhã nhặn đi kèm chất son mềm mượt, dễ dàng thẩm thấu nhanh; Son Dưỡng Màu Hera Sensual Spicy Nude Gloss có khả năng phục hồi tình trạng khô môi và bong tróc. Nhờ đó mà các chị em phụ nữ có thể tự tin trang điểm cho đôi môi và tự tin trong cả việc giao tiếp hằng ngày.',
      image: 'images/027.jpg'
    },
    {
      cosmetic_name: "Innisfree Green Tea Seed Hyaluronic Serum",
      quantity: 25,
      price: 549000,
      category_id: 13,
      manufacturer_id: 8,
      description: 'Serum Innisfre Tinh Chất Dưỡng Ẩm Sâu, Phục Hồi Da Mụn Innisfree Green Tea Seed Hyaluronic Serum là tinh chất dưỡng da thuộc thương hiệu Innisfree, thích hợp cho da bị kích ứng với ô nhiễm môi trường, da có mụn. Có khả năng làm sạch sâu, tái tạo mới làn da, làm sáng da, ngăn ngừa mụn hiệu quả.',
      image: 'images/028.jpg'
    },
    {
      cosmetic_name: "Peripera Ink Mood Glowy Tint 4g",
      quantity: 41,
      price: 179000,
      category_id: 1,
      manufacturer_id: 9,
      description: 'Son Tint Bóng Cho Môi Căng Mọng Peripera Ink Mood Glowy Tint 4g là son tint bóng của thương hiệu Peripera có chất son tint lướt nhẹ trên môi chỉ trong một lần vuốt có độ nhòe và chuyển màu đẹp, chứa nhiều dưỡng chất giúp dưỡng ẩm và nuôi dưỡng cho đôi môi, làm môi căng mọng tràn đầy sức sống, tự tin cả ngày dài.',
      image: 'images/029.jpg'
    },
    {
      cosmetic_name: "Aromatica Rosemary Scalp Scaling Shampoo",
      quantity: 58,
      price: 399000,
      category_id: 16,
      manufacturer_id: 21,
      description: 'Dầu Gội Hương Thảo Ngăn Rụng Tóc Aromatica Rosemary Scalp Scaling Shampoo là dầu gội thuộc thương hiệu Aromatica đến từ Hàn Quốc. Dầu gội với chiết xuất hương thảo giúp làm sạch da dầu, lấy đi các tế bào chết, làm sạch gàu, hỗ trợ giảm viêm ngứa giúp da dầu khỏe một các tự nhiên, cho mái tóc sạch khỏe, bồnh bềnh.',
      image: 'images/030.jpg'
    },
    {
      cosmetic_name: "DOVE 1 Minute Super Conditioner",
      quantity: 50,
      price: 50000,
      category_id: 17,
      manufacturer_id: 22,
      description: 'Dầu Xả Siêu Dưỡng Phục Hồi Tóc Hư Tổn DOVE 1 Minute Super Conditioner là sản phẩm dầu xả thế hệ mới đến từ thương hiệu nổi tiếng DOVE với tinh chất dưỡng ẩm ưu việt có chức năng siêu dưỡng phục hồi tóc hư tổn nặng nề, kết cấu dạng kem đặc giúp tái tạo cấu trúc tóc từ bên trong và làm giảm tình trạng hư tổn chỉ trong 1 phút, mái tóc trở nên suôn mượt và chắc khỏe.',
      image: 'images/031.jpg'
    },
    {
      cosmetic_name: "Catrice Primer 30ml",
      quantity: 110,
      price: 169000,
      category_id: 7,
      manufacturer_id: 11,
      description: 'Kem Lót Kiềm Dầu, Dưỡng Ẩm, Làm Đều Màu Da Catrice Primer 30ml là kem lót đến từ thương hiệu Catrice. Với chất kem mỏng nhẹ, không gây bí da cùng các thành phần lành tính giúp che phủ tốt các khuyết điểm trên da. Kem lót Catrice Primer với nhiều dòng mang lại nhiều giải pháp khác nhau cho làn da như khả năng kiềm dầu tốt, dưỡng ẩm, che phủ tốt các nốt mụn, làm đều màu da mang lại làn da mịn mượt, đều màu.',
      image: 'images/032.jpg'
    },
    {
      cosmetic_name: "Maybelline Fit Me Matte Poreless Powder SPF32 /PA+++ 6g",
      quantity: 105,
      price: 148000,
      category_id: 9,
      manufacturer_id: 6,
      description: 'Phấn Phủ Dạng Nén Che Phủ Hoàn Hảo, Kiềm Dầu Hiệu Quả Maybelline Fit Me Matte Poreless Powder SPF32 /PA+++ là phấn nền đến từ thương hiệu Maybelline công thức chứa hạt phấn Micro Power cho lớp nền mịn, kiềm dầu lên đến 16h, mang đến cho bạn một lớp nền hoàn hảo, phủ mịn và không bị bóng dầu.',
      image: 'images/033.jpg'
    },
  ]);

  await knex('CATEGORY').update({
    product_count: knex('COSMETIC')
      .count('*')
      .whereRaw('"CATEGORY".category_id = "COSMETIC".category_id')
  });

  // Update product counts in MANUFACTURER table
  await knex('MANUFACTURER').update({
    product_count: knex('COSMETIC')
      .count('*')
      .whereRaw('"MANUFACTURER".manufacturer_id = "COSMETIC".manufacturer_id')
  });
};
