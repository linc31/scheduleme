var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema ({
  patient_id: String,
  firstName: String,
  lastName: String,
  monday: {
    type: String,
    default: ""
  },
  tuesday: {
    type: String,
    default: ""
  },
  wednesday: {
    type: String,
    default: ""
  },
  thursday: {
    type: String,
    default: ""
  },
  friday: {
    type: String,
    default: ""
  },
  saturday:{
    type: String,
    default: ""
  },
  sunday: {
    type: String,
    default: ""
  },
  active: {
    type: Number,
    default: 1,
  }
});

module.exports = mongoose.model('Schedule', scheduleSchema);