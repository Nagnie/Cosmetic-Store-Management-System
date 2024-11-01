exports.up = function (knex) {
    return knex.schema
      .createTable('CATEGORY', (table) => {
        table.increments('category_id').primary();
        table.string('category_name', 255).notNullable().unique();
        table.text('description');
      })
      .createTable('MANUFACTURER', (table) => {
        table.increments('manufacturer_id').primary();
        table.string('manufacturer_name', 255).notNullable().unique();
        table.text('description');
      })
      .createTable('LOYAL_CUSTOMER', (table) => {
        table.increments('customer_id').primary();
        table.string('customer_name', 255);
        table.string('phone', 15);
        table.float('point');
      })
      .createTable('COSMETIC', (table) => {
        table.increments('cosmetic_id').primary();
        table.string('cosmetic_name', 255);
        table.integer('quantity');
        table.integer('price');
        table.integer('category_id').unsigned().references('category_id').inTable('CATEGORY').onDelete('CASCADE');
        table.integer('manufacturer_id').unsigned().references('manufacturer_id').inTable('MANUFACTURER').onDelete('CASCADE');
        table.text('description');
        table.text('image');
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('COSMETIC')
      .dropTableIfExists('LOYAL_CUSTOMER')
      .dropTableIfExists('MANUFACTURER')
      .dropTableIfExists('CATEGORY');
  };
  