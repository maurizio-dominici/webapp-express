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
  const movieSql = `SELECT * FROM movies WHERE id = ?`;
  connection.query(movieSql, [id], (err, results) => {
    if (err)
      return res.status(500).json({
        message: "server problem",
      });

    if (!results.length)
      return res.status(404).json({
        message: "movie not found",
      });

    const result = results[0];

    // console.log(result.image);

    const movie = {
      ...result,
      image: `http://localhost:3000/images/${result.image}`,
    };

    const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

    connection.query(reviewsSql, [id], (err, results) => {
      if (err)
        return res.status(500).json({
          message: "server problem",
        });

      if (!results.length)
        return res.status(404).json({
          message: "movie not found",
        });

      movie.reviews = results;

      res.json({
        movie,
      });
    });
  });
};

const storeReview = (req, res) => {
  const { id } = req.params;
  const { name, vote, text } = req.body;

  const sqlStoreReview = `
  INSERT INTO  movie.reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)
  `;

  const sqlStoreReviewValues = [id, name, vote, text];

  connection.query(sqlStoreReview, [sqlStoreReviewValues], (err, results) => {
    if (err) return res.status(500).json({ message: err });
    console.log(results);
  });
};
module.exports = { index, show, storeReview };
