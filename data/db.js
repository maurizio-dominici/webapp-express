const mysql = require("mysql2");
const { APP_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const connection = mysql.createConnection({
  host: APP_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("db conneted");
});

module.exports = connection;
