//Import of all the packages.

var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Adds everything to the module.
module.exports = function(){
    
    //Declaration of exported application variable.
    var application = express();
    
    //Tests which environment you are in. 
    if(process.env.NODE_ENV === 'development'){
        application.use(morgan('dev'));
    }
    else if(process.env.NODE_ENV === 'development'){
        application.use(compress());
    }
    
    application.use(bodyParser.urlencoded({
        extended:true
    }));
    
    //Sets the variables for the view engine and body parser.
    application.use(bodyParser.json());
    application.use(methodOverride());
    application.set('views','./app/views');
    application.set('view engine','ejs');
    application.use(express.static('./public'));
    
    //Assings the correct controllers to the exported express applicaiton.
    require('../app/routes/index.server.routes.js')(application);
    require('../app/routes/statistics.server.routes.js')(application);
    
    return application;

}