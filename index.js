// IMPORTS
require("dotenv").config();
express = require("express");
app = express();
const movieRouter = require("./routers/movieRouters");
const { notFound, errorHandler } = require("./middlewares/error");

// CONFIG
const { APP_PORT, APP_URL } = process.env;
const host = `${APP_URL}:${APP_PORT}`;

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());

// ROUTES
app.use("/movies", movieRouter);

// ERRORHANDLER MIDDLEWARES
app.use(notFound);
app.use(errorHandler);

// LISTEN
app.listen(APP_PORT, () => {
  console.log(`Server in ascolto su ${host}`);
});
