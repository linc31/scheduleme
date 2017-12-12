var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;

db.once('open', function() {
  console.log (`Connected to db: ${db.name}:${db.port}`)
});

db.on('error', (err) => {
  console.error(`Database error: \n${err}`);
});