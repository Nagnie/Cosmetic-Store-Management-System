/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ORDER_DETAIL').del()
  await knex('ORDER_DETAIL').insert([
    {
      order_id: 1,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 1,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 2,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 2,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 3,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 3,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    ,
    {
      order_id: 4,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 4,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 5,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 5,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 6,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 6,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 7,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 7,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 8,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 8,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 9,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 9,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
    {
      order_id: 10,
      cosmetic_id: 1,
      quantity: 1,
      subtotal: 149000
    },
    {
      order_id: 10,
      cosmetic_id: 3,
      quantity: 1,
      subtotal: 319000
    },
  ]);
};
