var Doctor = require('../models/doctors');

module.exports = {
  index,
  checkUser
}

function index(req, res) {
  console.log('DOCTOR CONTROLLER')
  Doctor.find({}).then((doctors) => res.json(doctors))
}

function checkUser(req, res) {
  const user = req.session.user;
  if (!user) return res.redirect('/');
}
