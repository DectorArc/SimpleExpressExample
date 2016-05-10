process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Import the created modules for use.
var mongoose = require('./config/mongoose');
var express = require('./config/express');

//Created the objects to run the server.
var database = mongoose();
var application = express();

//Kickstart everything.
application.listen(3000);
module.exports = application;

console.log('Server running at http://localhost:3000/');