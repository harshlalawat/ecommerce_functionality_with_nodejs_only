const genericPublicRoute = require("./genricPublicRoute");
const contentType = {
    ".html": "html",
    ".css" : "css",
    ".js" : "javascript"
}


function handlePublicRoutes(res, url, method, query) {
    
    const arr = url.split(".");
    const extension = arr[arr.length-1];
    if(url === '/'){
        
        genericPublicRoute(res, "./public/index.html", method, query, contentType[".html"]);
    }else{
        genericPublicRoute(res, url, method, query, contentType[`.${extension}`]);
    }
}

module.exports = handlePublicRoutes;