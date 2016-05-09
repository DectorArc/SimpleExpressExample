//Imports the created config file 'development.js' and mongoose
var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
    
    //Pulls database name from development.js.
    var database = mongoose.connect(config.db);
    
    
    return database;
}