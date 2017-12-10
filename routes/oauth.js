var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
