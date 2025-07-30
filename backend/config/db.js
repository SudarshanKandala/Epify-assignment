require('dotenv').config();

const mysql = require("mysql2/promise");

const dbPool = mysql.createPool({
  host: process.env.DB_HOST || "localhost", 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const testDbConnection = async () => {
  let connected = false;
  while (!connected) {
    try {
      const connection = await dbPool.getConnection();
      console.log(`✅ MySQL connected successfully at ${process.env.DB_HOST || "localhost"}`);
      connection.release();
      connected = true;
    } catch (error) {
      console.error(`⏳ MySQL not ready yet at ${process.env.DB_HOST || "localhost"}. Retrying in 3s...`);
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
};

module.exports = { dbPool, testDbConnection };
