const { dbPool } = require("../config/db");

const productModel = {
  create: async (productData) => {
    const { name, type, sku, image_url, description, quantity, price } = productData;
    const sql = "INSERT INTO products (name, type, sku, image_url, description, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await dbPool.execute(sql, [name, type, sku, image_url, description, quantity, price]);
    return result;
  },

  updateQuantityById: async (id, quantity) => {
    const updateSql = "UPDATE products SET quantity = ? WHERE id = ?";
    const [result] = await dbPool.execute(updateSql, [quantity, id]);

    if (result.affectedRows > 0) {
      const selectSql = "SELECT * FROM products WHERE id = ?";
      const [rows] = await dbPool.execute(selectSql, [id]);
      return rows[0];
    }
    return null;
  },

  findAll: async (page, limit) => {
    try {
      const numLimit = parseInt(limit, 10) || 10;
      const numPage = parseInt(page, 10) || 1;
      const offset = (numPage - 1) * numLimit;
      const sql = `SELECT * FROM products LIMIT ${dbPool.escape(numLimit)} OFFSET ${dbPool.escape(offset)}`;
      const [rows] = await dbPool.query(sql);
      return rows;
    } catch (error) {
        console.error("Error in findAll products:", error);
        throw error;
    }
  },
};

module.exports = productModel;
