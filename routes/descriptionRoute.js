const getDescription = require('../utils/getDescription.js');

function descriptionRoute(res, path, query){
    // console.log("In descriptionRoute -> ",query);
    getDescription(path, query["productId"]) // query.productId
    .then(function(data, error){
        if(error){
            throw new Error(error);
        }else{
            // console.log("data os ",data);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(data));
            res.end();
        }
    })
    .catch(function(err){
        console.log("Error in catch of descriptionRoute -> ", err);
    })
}


module.exports = descriptionRoute;