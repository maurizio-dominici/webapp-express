function notFound(next, req, res) {
  res.status(404).json({
    message: "not found",
  });
}

function errorHandler(err, req, res, next) {
  const data = {
    message: "Internal server error",
  };

  if (process.env.DEBUG_MODE === "true") {
    data.error = err.message;
  }
  res.status(404).json(data);
}

module.exports = { notFound, errorHandler };
