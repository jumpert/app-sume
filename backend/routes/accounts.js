const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM accounts');
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error fetching accounts'});
    }
  });

  router.post('/', async (req, res) => {
    const { name, bank, currency, balance = 0 } = req.body;
    try {
      const [result] = await pool.query(
        'INSERT INTO accounts (name, bank, currency, balance) VALUES (?, ?, ?, ?)',
        [name, bank, currency, balance]
      );
      res.status(201).json({ id: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error creating account'});
    }
  });

  return router;
};
