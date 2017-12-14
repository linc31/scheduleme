var Patient = require('../models/patient');
var User = require('../models/user');

module.exports = {
  addPatient,
  updatePatient,
  removePatients,
  getPatients
}

function addPatient(req, res) {
  console.log('hitting add patients controllers');
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
      User.findById(req.user._id, function(err, user) {
        user.patients.push(doc._id);
        user.save();
        res.status(200).json(doc);
      });
    }
  });
}

function updatePatient(req, res) {
  console.log('hitting UPDATE pt controller');  
  Patient.findOneAndUpdate({ '_id': req.params._id }, {
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
      User.findById(req.user._id, function(err, user) {
        console.log('req.user', doc)
        user.patients.push(doc._id);
        user.save();
      res.status(200).json(doc);
      });
    }
  });
}

function removePatients(req, res) {
  patient.findOneAndRemove({ '_id': req.params.id }, {
    'active': 0 })
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        User.findById(req.user._id, function(err, user) {
          user.patients.remove(req.user._id);
          user.save();
        res.send(doc);
      });
    }
  });
}


function getPatients(req, res) {
  User.findById(req.user._id).then(user => {
    Patient.find({ "active": 1, _id: user.patients}, function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.json(doc);
      }
    });
  });
}
