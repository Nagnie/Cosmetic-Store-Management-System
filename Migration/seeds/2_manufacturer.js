exports.seed = async function(knex) {
  await knex('MANUFACTURER').del()
  await knex('MANUFACTURER').insert([
    {
      manufacturer_name: 'Romand',
      origin: 'Hàn Quốc'
    },
    {
      manufacturer_name: 'Black Rouge',
      origin: 'Hàn Quốc'
    },
    {
      manufacturer_name: '3CE',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'The Saem',
      origin: 'Hàn Quốc'},
    
    {
      manufacturer_name: 'Merzy',
      origin: 'Hàn Quốc'
    },
    {
      manufacturer_name: 'Maybelline',
      origin: 'Hoa Kỳ'},
    {
      manufacturer_name: 'Etude House',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Innisfree',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Peripera',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Laneige',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Catrice',
      origin: 'Đức'},
    {
      manufacturer_name: 'Olay',
      origin: 'Hoa Kỳ'},
    {
      manufacturer_name: 'Dr.G',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Lemonade',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Hera',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: '9 Wishes',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: "I'm Meme",
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Ma:nyo',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Hatomugi',
      origin: 'Nhật Bản'},
    {
      manufacturer_name: 'Judydoll',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Aromatica',
      origin: 'Hàn Quốc'},
    {
      manufacturer_name: 'Dove',
      origin: 'Hoa Kỳ'},
    {
      manufacturer_name: 'Cocoon',
      origin: 'Việt Nam'},
    {
      manufacturer_name: "L'oreal",
      origin: 'Pháp'},
    {
      manufacturer_name: "Wonjin",
      origin: 'Hàn Quốc'},
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