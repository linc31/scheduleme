var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');

// Initialize express
var app = express ();

// Connect to mongoDB
require('dotenv').config();
require('./config/database');
require('./config/passport');


// Require routes
var oauth = require('./routes/oauth');


app.use(logger('dev'));

// Configure favicon & static middlewares
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// mount auth middleware
app.use(session({
  secret: 'ScheduleMe',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// API Routes

// Catch all routes for SPA client-side routing
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure use port 3001 for nodemon
var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});