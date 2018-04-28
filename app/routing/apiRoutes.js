var express = require("express");
var friends = require("../data/friends");


module.exports = function () {
  var router = express.Router();

  router.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  router.post('/api/friends', function (req, res) {
   friends.push(req.body);
   console.log(friends);
     var match = false;
     var friendMatch;
     var totalDifference = 0;

    //loops through friends 
    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < req.body.scores.length; j++) {
        totalDifference = Math.abs(req.body.scores[j] - friends[i].scores[j]);

      }
  if (totalDifference > 30) {
    match = true;
  }
      console.log(match);
     friendMatch = friends[i];
     console.log(friendMatch);
    }
    res.json(friendMatch);
     friends.push(req.body);
  });


  return router;
};

