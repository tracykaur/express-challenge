var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session.visits) {
    req.session.visits = 0;
  }

  req.session.visits++;

  let loggedInStatus = req.session.loggedIn
    ? `You logged in at ${req.session.loggedIn.toLocaleString(
        'en-GB'
      )} and your visit count is ${req.session.visits}`
    : 'You are not logged in';

  res.json({ loggedIn: req.session.loggedIn || false });
});

module.exports = router;
