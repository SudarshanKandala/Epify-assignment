require('dotenv').config();

const mysql = require("mysql2/promise");

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const testDbConnection = async () => {
  try {
    const connection = await dbPool.getConnection();
    console.log("MySQL connected successfully");
    connection.release();
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = { dbPool, testDbConnection };
