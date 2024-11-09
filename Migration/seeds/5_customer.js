exports.seed = async function(knex) {
  await knex('CUSTOMER').del()
  await knex('CUSTOMER').insert([

    {
      customer_name: 'Uyên Nhi',
      phone: '0348790157',
      point: 80,
      address: '22c Trảng Dài Biên Hòa Đồng Nai',
    },
    {
      customer_name: 'Hoài Nam',
      phone: '0853580752',
      point: 250,
      address: '83 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội ',
    },
    {
      customer_name: 'Tố Quyên',
      phone: '0337376520',
      point: 141,
      address: '12 Đ. Đinh Tiên Hoàng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    },
    {
      customer_name: 'Thanh Nhã',
      phone: '0983530147',
      point: 180,
      address: '139/24 Hồng Lĩnh, TT. Đập Đá, An Nhơn, Bình Định, Việt Nam',
    },
    {
      customer_name: 'Như Huỳnh',
      phone: '0911923103',
      point: 20,
      address: 'Ấp 6 đường An Hạ, xã Phạm Văn Hai, huyện Bình Chánh, TP Hồ Chí Minh',
    },
    {
      customer_name: 'Thanh Ngân',
      phone: '0911923103',
      point: 63,
      address: '109/44 Trần Đình Nam, Hoà An, Cẩm Lệ, Đà Nẵng, Việt Nam',
    },
    {
      customer_name: 'Thanh Huyền',
      phone: '0989457534',
      point: 56,
      address: '47 đường số 2, phường Linh Xuân, Thủ Đức, TPHCM',
    },
    {
      customer_name: 'Khánh Linh',
      phone: '0836939884',
      point: 364,
      address: 'Chung cư EhomeS, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
    },
    {
      customer_name: 'Hạnh My',
      phone: '02877792806',
      point: 550,
      address: '64 đường 51 phường 14 quận Gò Vấp, Phường 14, Quận Gò Vấp, TP. Hồ Chí Minh',
    },
    {
      customer_name: 'Ngọc Hà',
      phone: '0334924706',
      point: 126,
      address: 'Số nhà 41, ngõ 17, tổ dân phố số 1, thị trấn Phúc Thọ, huyện Phúc Thọ, Hà Nội ',
    },
    {
      customer_name: 'Mỹ Duyên',
      phone: '0326737860',
      point: 15,
      address: '19/81 Lê Văn Bì, phường An Thới, quận Bình Thuỷ, TP. Cần Thơ',
    },
    {
      customer_name: 'Lan Anh',
      phone: '0356599081',
      point: 6,
      address: 'Ngõ 137 Xuân Thuỷ, phường Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội',
    },
    {
      customer_name: 'Tú Chi',
      phone: '0775695014',
      point: 197,
      address: 'Chung cư Zen Tower 35 Quốc lộ 1A, Thới An, Quận 12, Tp Hồ Chí Minh',
    },
    {
      customer_name: 'Minh Phương',
      phone: '0933989137',
      point: 266,
      address: 'Hẻm 75, đường tỉnh 481, ấp Suối Muồn, xã Thái Bình, huyện Châu Thành, tỉnh Tây Ninh',
    },
    {
      customer_name: 'Hồng Nhung',
      phone: '0912006273',
      point: 145,
      address: 'Số 28, ngõ 498 đường Láng, Láng Thượng, Đống Đa',
    },
    {
      customer_name: 'Nguyễn Hạnh',
      phone: '0852108960',
      point: 50,
      address: 'Khu đô thị Vinhomes Grand Park, Phường Long Bình, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
    },
    {
      customer_name: 'Thảo Nguyên',
      phone: '0374224902',
      point: 192,
      address: '69/4 Nguyễn Văn Trỗi, Phường 6, TP Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu',
    },
    {
      customer_name: 'Phương Trinh',
      phone: '0368255795',
      point: 26,
      address: '150/45 Đ. Hồ Bá Phấn, Phước Long A, Quận 9, Hồ Chí Minh, Việt Nam',
    },
    {
      customer_name: 'Cẩm Vân',
      phone: '0936509122',
      point: 57,
      address: '58 Đường Số 1, Trường Thọ, Thủ Đức, Hồ Chí Minh, Việt Nam',
    },
    {
      customer_name: 'Bảo Ngọc',
      phone: '0944098742',
      point: 122,
      address: '169/25 Nguyễn Văn Linh, Phước Nguyễn, Bà Rịa, Bà Rịa - Vũng Tàu, Việt Nam',
    },
    {
      customer_name: 'Thanh Thảo',
      phone: '0837088692',
      point: 17,
      address: '156/5a Đường Vạn Hạnh, Phường 8, Đà Lạt, Lâm Đồng, Việt Nam',
    },
    {
      customer_name: 'Nhật Hạ',
      phone: '0598033850',
      point: 92,
      address: '02 Y Ngông, Tự An, Buôn Ma Thuột, Đắk Lắk, Việt Nam',
    },
  ]);

  await knex('CUSTOMER').where('point', '>', 200).update({ loyal: true });
};