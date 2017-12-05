var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session.loggedIn) {
    req.session.loggedIn = new Date().toString();
  }
  res.send('You have successfully logged in');
});

module.exports = router;
