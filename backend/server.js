const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'sume',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'sume'
});

const accountsRoute = require('./routes/accounts')(pool);
const transactionsRoute = require('./routes/transactions')(pool);

app.get('/', (req, res) => {
  res.send('SUME backend is running');
});

app.use('/accounts', accountsRoute);
app.use('/transactions', transactionsRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
