var http=require("http");
var url=require("url");


function start(route) {
    function onRequest(req,res) {
        var pathname=url.parse(req.url).pathname;
        var query=url.parse(req.url).query;
        route(pathname,query,req,res);
    }
    
    http.createServer(onRequest).listen(8888);
}

exports.start=start;