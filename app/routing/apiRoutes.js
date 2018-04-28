var express = require("express");
var friends = require("../data/friends");


module.exports = function () {
  var router = express.Router();

  router.get('/api/friends', function (req, res) {
    return res.json(friends);
  });

  router.post('/api/friends', function (req, res) {

   friends.push(req.body);
   res.json(req.body);
    return res.json(true);
    console.log(req.body);
  });

  return router;
};

