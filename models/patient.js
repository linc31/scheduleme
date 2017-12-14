var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema ({
  schedules: [{type: Schema.Types.ObjectId, ref: 'Schedule'}],  
  firstName: String,
  lastName: String,
  addressOne: String,
  city: String,
  state: String,
  zip: String,
  email: String,
  phone: String,
  status: String,
  active: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Patient', patientSchema);
