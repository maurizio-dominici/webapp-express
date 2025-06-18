// IMPORTS
express = require("express"); // EXPRESS
app = express();
require("dotenv").config(); // .ENV
const cors = require("cors"); // CORS
const movieRouter = require("./routers/movieRouters");
const { notFound, errorHandler } = require("./middlewares/error");

// CONFIG
const { APP_PORT, APP_URL } = process.env;
const host = `${APP_URL}:${APP_PORT}`;

// MIDDLEWARES CORS
app.use(
  cors({
    origin: process.env.REACT_URL,
  })
);

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());

//localhost:3000/images/matrix.jpg

// ROUTES
http: app.use("/movies", movieRouter);

// ERRORHANDLER MIDDLEWARES
app.use(notFound);
app.use(errorHandler);

// LISTEN
app.listen(APP_PORT, () => {
  console.log(`Server in ascolto su ${host}`);
});
