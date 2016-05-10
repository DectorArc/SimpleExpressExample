//Renders out the Home Page.
exports.renderHomePage = function(request,response){
    response.render('index',{
    })
};

//Renders out the json data.
exports.renderQuestions = function(request,response){
    
    var fileSystem = require('fs');
    var writingResponse = "Test";
    // fileSystem.readFile('IncorrectAnswers.json',function(error, data){
    //    if(error){
    //        console.log(error);
    //    } 
       
    //   writingResponse = data.toString();
    // });
    
    //File need a sync read because otherwise the variable does not update.
    var data = fileSystem.readFileSync('IncorrectAnswers.json')
    writingResponse = data.toString();
    
    response.render('answer',{
        data: writingResponse
    });
    
}