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