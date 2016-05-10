//Import mongoose and create a schema to build on.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create the Object to put into the database.
var QuestionSchema = new Schema({
    
    date: String,
    answers: []
    
});


mongoose.model('Questions',QuestionSchema);