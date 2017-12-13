var Patient = require('../models/patient');

module.exports = {
  addPatients,
  updatePatients,
  removePatients
}

function addPatients(req, res) {
  Patient.create({
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
}

function updatePatients(req, res) {
  Patient.findOneAndUpdate({ '_id': req.params.id }, {
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
}

function removePatients(req, res) {
  patient.findOneAndUpdate({ '_id': req.params.id }, {
    'active': 0 })
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
  })
}


// function addPatients(req, res) {
//   Patient.find({ "active": 1}, function(err, doc) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(doc);
//     }
//   });
// }
