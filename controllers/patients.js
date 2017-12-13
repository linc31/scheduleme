var Patient = require('../models/patient');

module.exports = {
  addPatients,
  createPatients
}

function createPatients(req, res) {
  Patient.create(req.body)
  .then(patient => {
    res.json(patient);
  })
  .catch(err => {
    res.json({error: err});
  });
}

function addPatients(req, res) {
  Patient.find({ "active": 1}, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
}


