var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new Schema({
  dates: Date,
  time: String
},
{
  timestamps: true
}
);

module.exports = appointmentSchema;
