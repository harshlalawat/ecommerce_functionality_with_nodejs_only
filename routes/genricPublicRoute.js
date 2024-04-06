const handlingFileRequest = require('../utils/handlingFileRequest.js');

function genericPublicRoute(res, path, method, query, contentType){
    
    handlingFileRequest(path)
    .then(function(data, error){
        if(error){
            throw new Error(error);
        }else{
            
            res.statusCode = 200;
            res.setHeader("Content-Type", `text/${contentType}`);
            res.end(data);
        }
    })
    .catch(function(err){
        console.log("Error in catch of homeRoute -> ", err);
    })
}


module.exports = genericPublicRoute;