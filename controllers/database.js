var express = require('express');
var router = express.Router();
var db = require('../config/database.js');
var path = require('path');

var patient = require('../models/patient');
var schedule = require('../models/schedule');

// Get patients from database
router.get('/getAllPatients', function(req, res) {
  patient.find({ 'active': 1 }).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

// Get patient schedules from database
router.get('/getPatientSchedules', function(req, res) {
  schedule.find({ 'active': 1 }).exec(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(doc);
    }
  })
})

// Posting patient schedule to database
router.post('/addPatientSchedule', function(req, res) {
  schedule.create({
    patient_id: req.body.patient_id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    status: req.body.status
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send('Patient schedule saved!');
    }
  });
});

// Update exisiting patient to schedule
router.put('/updateSchedule/:id', function(req, res) {
  var newSchedule = req.body.patientSchedule;
  schedule.findOneAndUpdate({ "_id": req.params.id },
  {
    monday: newSchedule.monday,
    tuesday: newSchedule.tuesday,
    wednesday: newSchedule.wednesday,
    thursday: newSchedule.thursday,
    friday: newSchedule.friday,
    saturday: newSchedule.saturday,
    sunday: newSchedule.sunday
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send('Patient schedule updated!');
    }
  });
});

// Post new patient to database
router.post('/addPatient', function(req, res) {
  patient.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    addressOne: req.body.addressOne,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    email: req.body.email,
    phone: req.body.phone,
    status: req.body.status
  }, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

// Update exisiting patient
router.put('updatePatient/:id', function(req, res) {
  patient.findOneAndUpdate({ '_id': req.params.id }, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    addressOne: req.body.addressOne,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    email: req.body.email,
    phone: req.body.phone,
    status: req.body.status
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send('Patient updated');
    }
  });
});

// Remove existing patient
router.put('/removePatient/:id', function(req, res) {
  patient.findOneAndUpdate({ '_id': req.params.id }, {
    'active': 0 })
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
  })
});

// Remove existing patient schedule
router.put('/removePatientSchedule/:patient_id', function(req, res) {
  patientSchedule.findOneAndUpdate({ 'patient_id': req.params.patient_id }, { 'active': 0 })
  .exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
});

module.exports = router;