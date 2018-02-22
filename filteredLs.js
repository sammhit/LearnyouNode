var fs = require('fs');
var path = require('path');
var ext = "."+process.argv[3];
var x;
fs.readdir(process.argv[2], function callback(err, contents){
	if (err==null){	
		for(x in contents){
			
			if(path.extname(contents[x])==ext){
				console.log(contents[x])
			}	
		}
	}
	else return console.error(err)
});
