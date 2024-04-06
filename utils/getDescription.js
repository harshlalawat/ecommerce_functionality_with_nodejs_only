const handlingFileRequest = require("./handlingFileRequest");

function getDescription(path, id){
    return new Promise(function(resolve, reject){
        handlingFileRequest("./data/products.json")
        .then(function(JsonData, error){
            if(error){
                throw new Error(error);
            }
            return JSON.parse(JsonData);
        })
        .then(function(products){
            // console.log(products.length);
            // console.log(id);
            for(let i=0; i<products.length; i++){
                if(products[i].id === id){
                    let obj = {
                        name: products[i].name,
                        description: products[i].description
                    }
                    resolve(obj);
                }
            }
            reject("No Product Found");
        })
        .catch(function(err){
            console.log(err);
        })
    })

}

module.exports = getDescription;