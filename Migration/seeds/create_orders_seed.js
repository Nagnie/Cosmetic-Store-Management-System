/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
      {
        "customer_id": 14,
        "order_date": "2024-12-09",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": null,
        "order_date": "2024-12-08",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": 7,
        "order_date": "2024-12-07",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": 19,
        "order_date": "2024-12-06",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": null,
        "order_date": "2024-12-05",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": 12,
        "order_date": "2024-12-04",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": 6,
        "order_date": "2024-12-03",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": 1,
        "order_date": "2024-12-02",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": null,
        "order_date": "2024-12-01",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      },
      {
        "customer_id": 10,
        "order_date": "2024-11-30",
        "subtotal": 468000,
        "discount": 0,
        "sale_tax": 46800,
        "total": 514800
      }    
  ]);
};
