process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var path = require('path');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});
module.exports = app;

