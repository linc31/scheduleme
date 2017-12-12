var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose-email');

var userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  googleId: String,
  googleToken: String,
  userType: String, 
}, {
  timestamps: true
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);