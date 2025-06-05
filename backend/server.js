const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'sume',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'sume'
});

app.get('/', (req, res) => {
  res.send('SUME backend is running');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
