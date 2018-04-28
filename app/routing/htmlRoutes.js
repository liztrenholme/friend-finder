var path = require("path");
var express = require("express");

module.exports = function () {
  var router = express.Router();

//displays survey page if "/survey" is entered into address bar
  router.get('/survey', function (req, res) {
    return res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

//displays homepage if anything other than "/survey" is entered into address bar
  router.get('*', function (req, res) {
    return res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  return router;
};