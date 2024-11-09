exports.up = function(knex) {
    return knex.schema
      .renameTable('LOYAL_CUSTOMER', 'CUSTOMER') // Rename the table
      .then(() => knex.schema.alterTable('CUSTOMER', (table) => {
        table.string('address'); // Add 'address' column
        table.boolean('loyal').defaultTo(false); // Add 'loyal' column with default value 'false'
      }))
      .then(() => knex('CUSTOMER').where('point', '>', 200).update({ loyal: true })); // Update 'loyal' status based on 'point'
  };
  
  exports.down = function(knex) {
    return knex.schema
      .alterTable('CUSTOMER', (table) => {
        table.dropColumn('address'); // Drop 'address' column
        table.dropColumn('loyal'); // Drop 'loyal' column
      })
      .then(() => knex.schema.renameTable('CUSTOMER', 'LOYAL_CUSTOMER')); // Revert the table name
  };
  