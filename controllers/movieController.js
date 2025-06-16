const connection = require("../data/db");

const index = (req, res) => {
  const movieSql = "SELECT * FROM movies";
  connection.query(movieSql, (err, results) => {
    if (err)
      return res.status(500).json({
        message: "server problem",
      });

    res.json({
      movies: results,
    });
  });
};

const show = (req, res) => {
  const { id } = req.params;
  const movieSql = "SELECT * FROM movies WHERE id = ?";
  connection.query(movieSql, [id], (err, results) => {
    if (err)
      return res.status(500).json({
        message: "server problem",
      });

    if (!results.length)
      return res.status(404).json({
        message: "movie not found",
      });

    res.json({
      movie: results,
    });
  });
};

module.exports = { index, show };
