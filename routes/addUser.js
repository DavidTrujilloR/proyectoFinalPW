const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err) => {
    if (err) {
      console.error('Error adding user:', err);
      res.send('Error');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
