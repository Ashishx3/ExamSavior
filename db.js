const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Your Neon PostgreSQL URL
  ssl: { rejectUnauthorized: false }
  
});

console.log("🔌 Connecting to DB:", process.env.DATABASE_URL);

module.exports = pool;
