require("dotenv").config();
require("./mongoose");

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

/////////set and use//////////
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

/////////engine//////////
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

/////port///////
app.listen(8000, () => {
  console.log("listening http://localhost:8000");
});
