const express = require("express");
const bodyParser = require("body-parser");
const namesController = require("./controllers/namesController");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/name/:id", namesController.getNameById);
app.post("/name", namesController.addName);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});