const pool = require('../config/db');

class Product {
    static async getAll() {
        const result = await pool.query('SELECT * FROM products');
        return result.rows;
    }

    static async getById(id) {
        const result = await pool.query(
            'SELECT * FROM products WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }
}

module.exports = Product;