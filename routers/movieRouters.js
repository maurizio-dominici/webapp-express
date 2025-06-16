const express = require("express");
const router = express.Router();

const connection = require("../data/db");

router.get("", (req, res) => {
  connection.query("SELECT * FROM movies", (err, results) => {
    res.json({
      movie: results,
    });
  });
});

module.exports = router;
