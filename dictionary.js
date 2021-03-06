const express = require("express");
const app = express();
var path = require("path");
const bodyParser = require("body-parser");
var lookup = require("./word");

app.use(express.static(__dirname));
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.sendFile("dict.html", {
    root: path.join(__dirname),
  });
});

app.post("/lookup", urlencodedParser, function (req, res, next) {
  lookup(req.body.input, function (err, data) {
    if (err) {
      console.log("ERROR : ", err);
    } else {
      console.log("Length of result from database is : ", data.length);
      res.send(data);
    }
  });
});

app.listen(3000, function () {
  console.log(" Node server is running..");
});
