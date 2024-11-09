exports.up = function (knex) {
    return knex.schema
      .table('CATEGORY', (table) => {
        table.dropColumn('description'); 
        table.integer('product_count').defaultTo(0);
      })
      .table('MANUFACTURER', (table) => {
        table.dropColumn('description');
        table.integer('product_count').defaultTo(0);
        table.string('origin', 255);
      });
};

exports.down = function (knex) {
    return knex.schema
      .table('CATEGORY', (table) => {
        table.text('description');
        table.dropColumn('product_count');
      })
      .table('MANUFACTURER', (table) => {
        table.text('description');
        table.dropColumn('product_count');
        table.dropColumn('origin');
      });
};
