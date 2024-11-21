const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.send('Error');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
