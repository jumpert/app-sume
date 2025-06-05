const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', async (req, res) => {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM transactions ORDER BY date DESC LIMIT 100'
      );
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error fetching transactions'});
    }
  });

  router.post('/', async (req, res) => {
    const { account_id, category_id = null, amount, type, description, date } = req.body;
    try {
      const [result] = await pool.query(
        `INSERT INTO transactions (account_id, category_id, amount, type, description, date)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [account_id, category_id, amount, type, description, date]
      );
      res.status(201).json({ id: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error creating transaction'});
    }
  });

  return router;
};
