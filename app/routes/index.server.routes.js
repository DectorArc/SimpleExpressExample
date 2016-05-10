//Import the server controllers.
var index = require("../controllers/index.server.controller.js");

//Creating all your routes.
module.exports = function(application){
    
    application.route('/home').get(index.renderHomePage);
    application.route('/').get(index.renderHomePage);
    application.route('/test').get(index.renderQuestions);
    
}