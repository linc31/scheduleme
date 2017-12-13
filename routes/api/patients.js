const express = require('express');
const router = express.Router()
var patientsCtrl = require('../../controllers/patients');

router.post('/addPatient', patientsCtrl.addPatients)

module.exports = router;