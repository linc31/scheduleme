var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorSchema = new Schema ({
  patients: [{type: Schema.Types.ObjectId, ref: 'Patient'}]
})

module.exports = mongoose.model('Doctor', doctorSchema);