var Schedule = require('../models/schedule');

module.exports = {
  getSchedules,
  addSchedules,
  updateSchedules,
  removeSchedules
}

function getSchedules(req, res) {
  Schedule.find({ 'active': 1}, function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(doc);
    }
  })
}

function addSchedules(req, res) {
  Schedule.create({
    patient_id: req.body.patient_id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    status: req.body.status
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send('Schedule saved');
    }
  })
}

function updateSchedules(req, res) {
  var newSchedule = req.body.schedule;
  schedule.findOneAndUpdate({'_id': req.params.id },
{
  monday: newSchedule.monday,
  tuesday: newSchedule.tuesday,
  wednesday: newSchedule.wednesday,
  thursday: newSchedule.thursday,
  friday: newSchedule.friday,
  saturday: newSchedule.saturday,
  sunday: newSchedule.sunday,
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    res.send('Schedule updated');
  }
})
}

function removeSchedules(req, res) {
  Schedule.findOneAndRemove({ 'patient_id': req.params.patient_id},{'active': 0}, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
}