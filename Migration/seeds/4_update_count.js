exports.seed = async function(knex) {
  // Update product counts in CATEGORY table
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
