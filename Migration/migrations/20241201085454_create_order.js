/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE ORDERS (
            order_id SERIAL PRIMARY KEY,
            customer_id INT,
            order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            subtotal INT,
            discount INT,
            sale_tax INT,
            total INT
        );

        CREATE TABLE ORDER_DETAIL (
            order_detail_id SERIAL PRIMARY KEY,
            order_id INT,
            cosmetic_id INT,
            quantity INT,
            subtotal INT
        );
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE IF EXISTS ORDER_DETAIL;
        DROP TABLE IF EXISTS ORDERS;
    `);
};