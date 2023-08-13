const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

const PORT = 3005;

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  return res.json({
    message: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`server started, listening on port @${PORT}`);
});
