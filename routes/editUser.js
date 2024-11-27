const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.send('Error');
    } else {
      res.render('edit', { user: results[0] });
    }
  });
});


router.post("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(query, [name, email, id], (err) => {
    if (err) {
      console.error('Error updating user:', err);
      res.send('Error');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
