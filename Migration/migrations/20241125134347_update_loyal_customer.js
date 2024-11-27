exports.up = function (knex) {
    return knex.raw(`
      -- Tạo function để cập nhật loyal dựa trên point
      CREATE OR REPLACE FUNCTION update_loyalty()
      RETURNS TRIGGER AS $$
      BEGIN
        IF NEW.point > 200 THEN
          NEW.loyal := '\uEB52';
        ELSE
          NEW.loyal := NULL;
        END IF;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
  
      -- Tạo trigger để áp dụng logic loyalty trước khi INSERT hoặc UPDATE
      CREATE TRIGGER update_loyalty_trigger
      BEFORE INSERT OR UPDATE ON "CUSTOMER"
      FOR EACH ROW
      EXECUTE FUNCTION update_loyalty();
    `);
};

exports.down = function (knex) {
    return knex.raw(`
      -- Xóa trigger và function khi rollback
      DROP TRIGGER IF EXISTS update_loyalty_trigger ON "CUSTOMER";
      DROP FUNCTION IF EXISTS update_loyalty();
    `);
};
