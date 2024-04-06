const http = require('http');
let qs = require('querystring');
const findRoutes = require('./routes/findRoutes');

const PORT=3000;


const receptor = function(req, res){
    console.log(req.method, req.url);
    let str = req.url.split('?')[1];
    req.url = req.url.split('?')[0]
    // console.log(str);
    // console.log(qs.parse(str).productsCount);
    // console.log("=-=-=-",res);
    findRoutes(res, req.url, req.method, qs.parse(str))
}

const server = http.createServer(receptor);

server.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})
