const express = require('express');
const router = express.Router()
var patientsCtrl = require('../../controllers/patients');

router.get('/getPatient', patientsCtrl.getPatients)
router.post('/addPatient', patientsCtrl.addPatient)
router.put('/updatePatient/_id', patientsCtrl.updatePatient)
router.put('/removePatient/:id', patientsCtrl.removePatients)

module.exports = router;

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/signup');
// }