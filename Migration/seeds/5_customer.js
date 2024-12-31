exports.seed = async function (knex) {
  await knex('CUSTOMER').del()
  await knex('CUSTOMER').insert([
    {
      customer_name: "Uyên Nhi",
      phone: "0348790157",
      address: "22c Trảng Dài Biên Hòa Đồng Nai",
      point: 3267
    },
    {
      customer_name: "Hoài Nam",
      phone: "0853580752",
      address: "83 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội ",
      point: 3026
    },
    {
      customer_name: "Tố Quyên",
      phone: "0337376520",
      address: "12 Đ. Đinh Tiên Hoàng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
      point: 3432
    },
    {
      customer_name: "Thanh Nhã",
      phone: "0983530147",
      address: "139/24 Hồng Lĩnh, TT. Đập Đá, An Nhơn, Bình Định, Việt Nam",
      point: 3280
    },
    {
      customer_name: "Như Huỳnh",
      phone: "0911923103",
      address: "Ấp 6 đường An Hạ, xã Phạm Văn Hai, huyện Bình Chánh, TP Hồ Chí Minh",
      point: 4630
    },
    {
      customer_name: "Thanh Ngân",
      phone: "0911923103",
      address: "109/44 Trần Đình Nam, Hoà An, Cẩm Lệ, Đà Nẵng, Việt Nam",
      point: 2308
    },
    {
      customer_name: "Thanh Huyền",
      phone: "0989457534",
      address: "47 đường số 2, phường Linh Xuân, Thủ Đức, TPHCM",
      point: 3281
    },
    {
      customer_name: "Khánh Linh",
      phone: "0836939884",
      address: "Chung cư EhomeS, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
      point: 3654
    },
    {
      customer_name: "Hạnh My",
      phone: "02877792806",
      address: "64 đường 51 phường 14 quận Gò Vấp, Phường 14, Quận Gò Vấp, TP. Hồ Chí Minh",
      point: 2950
    },
    {
      customer_name: "Ngọc Hà",
      phone: "0334924706",
      address: "Số nhà 41, ngõ 17, tổ dân phố số 1, thị trấn Phúc Thọ, huyện Phúc Thọ, Hà Nội ",
      point: 3463
    },
    {
      customer_name: "Mỹ Duyên",
      phone: "0326737860",
      address: "19/81 Lê Văn Bì, phường An Thới, quận Bình Thuỷ, TP. Cần Thơ",
      point: 2605
    },
    {
      customer_name: "Lan Anh",
      phone: "0356599081",
      address: "Ngõ 137 Xuân Thuỷ, phường Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội",
      point: 5094
    },
    {
      customer_name: "Tú Chi",
      phone: "0775695014",
      address: "Chung cư Zen Tower 35 Quốc lộ 1A, Thới An, Quận 12, Tp Hồ Chí Minh",
      point: 2039
    },
    {
      customer_name: "Minh Phương",
      phone: "0933989137",
      address: "Hẻm 75, đường tỉnh 481, ấp Suối Muồn, xã Thái Bình, huyện Châu Thành, tỉnh Tây Ninh",
      point: 5139
    },
    {
      customer_name: "Hồng Nhung",
      phone: "0912006273",
      address: "Số 28, ngõ 498 đường Láng, Láng Thượng, Đống Đa",
      point: 3325
    },
    {
      customer_name: "Jory Joesbury",
      phone: "0756139120",
      address: "840 Vernon Point",
      point: 1922
    },
    {
      customer_name: "Thảo Nguyên",
      phone: "0374224902",
      address: "69/4 Nguyễn Văn Trỗi, Phường 6, TP Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu",
      point: 3854
    },
    {
      customer_name: "Myrtia Creigan",
      phone: "0593443088",
      address: "4 Roth Street",
      point: 2573
    },
    {
      customer_name: "Wenona Bradtke",
      phone: "0802922548",
      address: "49040 Everett Avenue",
      point: 3659
    },
    {
      customer_name: "Marchelle Dyster",
      phone: "0484744053",
      address: "25 Dixon Place",
      point: 3967
    },
    {
      customer_name: "Eward Navarre",
      phone: "0302456348",
      address: "593 Katie Trail",
      point: 2942
    },
    {
      customer_name: "Arabele Ford",
      phone: "0517050501",
      address: "9 Goodland Trail",
      point: 1880
    },
    {
      customer_name: "Gregory Rooson",
      phone: "0017315107",
      address: "99128 Knutson Street",
      point: 2934
    },
    {
      customer_name: "Janie Jackling",
      phone: "0719856782",
      address: "5176 Towne Center",
      point: 2244
    },
    {
      customer_name: "Ellswerth Gange",
      phone: "0474755981",
      address: "7990 Eastwood Point",
      point: 3242
    },
    {
      customer_name: "Alisun Osipov",
      phone: "0801319506",
      address: "93 Continental Drive",
      point: 4244
    },
    {
      customer_name: "Haley Trewinnard",
      phone: "0969738547",
      address: "01611 Becker Place",
      point: 3739
    },
    {
      customer_name: "Daryl Chastang",
      phone: "0466192771",
      address: "16 Lighthouse Bay Pass",
      point: 3424
    },
    {
      customer_name: "Nguyễn Hạnh",
      phone: "0852108960",
      address: "Khu đô thị Vinhomes Grand Park, Phường Long Bình, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
      point: 4469
    },
    {
      customer_name: "Phương Trinh",
      phone: "0368255795",
      address: "150/45 Đ. Hồ Bá Phấn, Phước Long A, Quận 9, Hồ Chí Minh, Việt Nam",
      point: 3213
    },
    {
      customer_name: "Cẩm Vân",
      phone: "0936509122",
      address: "58 Đường Số 1, Trường Thọ, Thủ Đức, Hồ Chí Minh, Việt Nam",
      point: 1767
    },
    {
      customer_name: "Bảo Ngọc",
      phone: "0944098742",
      address: "169/25 Nguyễn Văn Linh, Phước Nguyễn, Bà Rịa, Bà Rịa - Vũng Tàu, Việt Nam",
      point: 1684
    },
    {
      customer_name: "Thanh Thảo",
      phone: "0837088692",
      address: "156/5a Đường Vạn Hạnh, Phường 8, Đà Lạt, Lâm Đồng, Việt Nam",
      point: 4162
    },
    {
      customer_name: "Nhật Hạ",
      phone: "0598033850",
      address: "02 Y Ngông, Tự An, Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      point: 3017
    },
    {
      customer_name: "Jerrylee McQuarter",
      phone: "0855275201",
      address: "1292 Goodland Alley",
      point: 3200
    },
    {
      customer_name: "Henrietta Deely",
      phone: "0847891742",
      address: "2 Butternut Circle",
      point: 3677
    },
    {
      customer_name: "Newton Thomann",
      phone: "0333605083",
      address: "4 Onsgard Park",
      point: 3403
    },
    {
      customer_name: "Glenden Ende",
      phone: "0455984655",
      address: "762 Meadow Vale Center",
      point: 4639
    },
    {
      customer_name: "Michele Bumpass",
      phone: "0485441774",
      address: "553 Glacier Hill Park",
      point: 1841
    },
    {
      customer_name: "Bertrand Disman",
      phone: "0485098125",
      address: "01592 Homewood Place",
      point: 3549
    },
    {
      customer_name: "Oswald Kobsch",
      phone: "0357552078",
      address: "8 Scoville Place",
      point: 3160
    },
    {
      customer_name: "Silvano Stickel",
      phone: "0618678936",
      address: "2 School Trail",
      point: 2764
    },
    {
      customer_name: "Dunc Gergher",
      phone: "0881217318",
      address: "5 Brickson Park Way",
      point: 3428
    },
    {
      customer_name: "Lissy Mundy",
      phone: "0992386732",
      address: "1 Prairie Rose Trail",
      point: 3263
    },
    {
      customer_name: "Mose Carrabott",
      phone: "0001732091",
      address: "21291 Fieldstone Alley",
      point: 1814
    },
    {
      customer_name: "Hunfredo Bodd",
      phone: "0412818585",
      address: "7704 Manley Junction",
      point: 1888
    },
    {
      customer_name: "Jaime Fleeman",
      phone: "0163716532",
      address: "28 Dixon Lane",
      point: 3604
    },
    {
      customer_name: "Bond Humphrys",
      phone: "0664801931",
      address: "98644 Brown Parkway",
      point: 3766
    },
    {
      customer_name: "Nettie Attyeo",
      phone: "0118775890",
      address: "05822 Logan Terrace",
      point: 3016
    },
    {
      customer_name: "Symon Kobsch",
      phone: "0363234878",
      address: "726 Messerschmidt Circle",
      point: 0
    },
    {
      customer_name: "Leta Waples",
      phone: "0107860937",
      address: "94402 Oak Road",
      point: 0
    },
    {
      customer_name: "Robinette Keen",
      phone: "0716850222",
      address: "570 Sunbrook Drive",
      point: 0
    }
  ])
}