var express = require('express');
var router = express.Router();
var doctorCtrl = require('../controllers/doctors');

router.get('/doctor', isLoggedIn, doctorCtrl.index);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}