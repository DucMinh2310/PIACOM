const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/gasstation", require("./routes/GasStations"));
app.use("/user", require("./routes/User"));

app.listen(8080, () => {
  console.log(`Server is listening at http://localhost:8080!`);

  db.sync({ force: false })
    .then(() => {
      console.log("db is synced");
    })
    .catch((err) => {
      throw err;
    });
});
