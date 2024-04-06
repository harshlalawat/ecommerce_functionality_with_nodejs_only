const loadMore = require('../utils/loadMore.js');

function loadMoreRoute(res, path, query){
    // console.log("In loadMoreRoute -> ", query["productsCount"]);
    loadMore(path, query["productsCount"])//query.productsCount
    .then(function(data, error){
        if(error){
            throw new Error(error);
        }else{
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(data));
            res.end();
        }
    })
    .catch(function(err){
        console.log("Error in catch of loadMoreRoute -> ", err);
    })
}


module.exports = loadMoreRoute;