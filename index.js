express = require("express");
app = express();

app.get("/", (req, res) => {
  res.json("Benvenuto");
});

app.listen(3000, () => {
  console.log("Server in ascolto su http://localhost:3000");
});
