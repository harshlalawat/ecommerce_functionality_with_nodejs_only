const loadMoreRoute = require('./loadMoreRoute.js');
const descriptionRoute = require('./descriptionRoute.js');
const handlePublicRoutes = require('./handlePublicRoutes');
const fs = require('fs');


const routeObj = {
    "/loadMore": {
        "GET" : {
            func: loadMoreRoute,
            filepath: "utils/loadMore.js"
        }
    },
    "/description": {
        "GET" : {
            func: descriptionRoute,
            filepath: "utils/getDescription.js"
        }
    }
}

function findRoutes(response, url, method, query){
    // console.log(url, fs.existsSync(`./public${url}`), `../public${url}`);
    if(url === "/"){
        handlePublicRoutes(response, url, method, query);
    }else if (fs.existsSync(`./public${url}`)) {
        // console.log("====" ,url); 
        handlePublicRoutes(response, `./public${url}`, method, query);
    }else if(url in routeObj && method in routeObj[url]){
        handleRoutes(response, url, method, query);
    }else{
        handlePublicRoutes(response, "/", "GET", "NULL")
    }
}

function handleRoutes(response, url, method, query){
    if(routeObj[url][method].filepath===undefined){
        routeObj[url][method]['func'](response,"public/index.html");
    }
    else{
        
        const filePath = routeObj[url][method]['filepath']
        // console.log("=-=-=",query);
        routeObj[url][method]['func'](response,filePath,query);
    }
}

module.exports = findRoutes;