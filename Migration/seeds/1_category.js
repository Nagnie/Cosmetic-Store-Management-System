exports.seed = async function(knex) {
  await knex('CATEGORY').del()
  await knex('CATEGORY').insert([
    {category_name: 'Son'},
    {category_name: 'Kem nền'},
    {category_name: 'Cushion'},
    {category_name: 'Trang điểm mắt'},
    {category_name: 'Phấn má'},
    {category_name: 'Kem chống nắng'},
    {category_name: 'Kem lót'},
    {category_name: 'Che khuyết điểm'},
    {category_name: 'Phấn phủ'},
    {category_name: 'Tẩy trang'},
    {category_name: 'Sữa tắm'},
    {category_name: 'Toner'},
    {category_name: 'Serum'},
    {category_name: 'Kem dưỡng da'},
    {category_name: 'Mặt nạ'},
    {category_name: 'Dầu gội'},
    {category_name: 'Dầu xả'},
  ]);
};