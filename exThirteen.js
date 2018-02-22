var url = require ('url')
var http = require('http')


var server = http.createServer(function(req, res){
	var pathName = url.parse(req.url).pathname;
	var queryData = url.parse(req.url,true).query;
	res.writeHead(200, { "Content-Type" : "application/json"});
	if (pathName==='/api/parsetime'){
		var d= new Date();
		var obj ={
			"hour":d.getHours(),
			"minute":d.getMinutes(),
			"second":d.getSeconds()		
		
		}
		
		res.end(JSON.stringify(obj))
	}
	if(pathName==='/api/unixtime'){
		var d = new Date();
		var obj = {
			"unixtime" :d.getTime()		
		}
		
		res.end(JSON.stringify(obj))
		
	}

})
server.listen(Number(process.argv[2]))
