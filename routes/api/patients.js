const express = require('express');
const router = express.Router()
var patientsCtrl = require('../../controllers/patients');

router.post('/addPatient', isLoggedIn, patientsCtrl.addPatients)
router.put('updatePatient/:id', isLoggedIn, patientsCtrl.updatePatients)
router.put('/removePatient/:id', isLoggedIn, patientsCtrl.removePatients)

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/signup');
}