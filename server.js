var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

var app = express();

var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes());
app.use(htmlRoutes());



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});