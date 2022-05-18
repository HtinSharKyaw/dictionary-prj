const express = require("express");
const app = express();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "entries",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

var lookup = function lookup(word, callback) {
  con.query(
    "SELECT * FROM entries WHERE word ='" + word + "' ",
    function (err, result) {
      if (err) callback(err, null);
      else callback(null, result);
    }
  );
};

module.exports = lookup;
