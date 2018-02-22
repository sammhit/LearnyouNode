var net=require('net')
var strft=require('strftime')

var server=net.createServer(function (socket){
	var data = strft('%F %T').split(":").slice(0,2).join(":");
		
	socket.end(data+"\n");
	

});

server.listen(Number(process.argv[2]));
