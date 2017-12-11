var Doctor = require('../models/doctors');

module.exports = {
  index
}

function index(req, res) {
  console.log('DOCTOR CONTROLLER')
  Doctor.find({}).then((doctors) => res.json(doctors))
}