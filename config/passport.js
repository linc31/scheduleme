var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
  function(accessToken, refreshToken, profile, cb) {
  }
));

// passport.serializeUser(function(doctor, done) {
//   done(null, doctor.id);
// })

// passport.deserializeUser(function(id, done) {
//   Doctor.findById(id, function(err, doctor) {
//     done(err, doctor);
//   });
// });