exports.seed = async function(knex) {
  await knex('MANUFACTURER').del()
  await knex('MANUFACTURER').insert([
    {manufacturer_name: 'Romand'},
    {manufacturer_name: 'Black Rouge'},
    {manufacturer_name: '3CE'},
    {manufacturer_name: 'The Saem'},
    {manufacturer_name: 'Merzy'},
    {manufacturer_name: 'Maybelline'},
    {manufacturer_name: 'Etude House'},
    {manufacturer_name: 'Innisfree'},
    {manufacturer_name: 'Peripera'},
    {manufacturer_name: 'Laneige'},
    {manufacturer_name: 'Im Meme'},
    {manufacturer_name: 'Catrice'},
    {manufacturer_name: 'Olay'},
    {manufacturer_name: 'Dr.G'},
    {manufacturer_name: 'Lemonade'},
    {manufacturer_name: 'Hera'},
  ]);
};