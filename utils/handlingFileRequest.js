const fs = require('fs');


function handlingFileRequest(url){
    return new Promise(function(resolve, reject){
        // console.log("path ----------> ", url);
        fs.readFile(url, "utf-8", function(error, data){
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        })
    })
}

module.exports = handlingFileRequest;