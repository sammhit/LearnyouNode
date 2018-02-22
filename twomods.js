var fs = require('fs')
var mymodule =require('./mymodule.js')
var ext=process.argv[3];
var dir=process.argv[2];
var arr;

function logResults(err,arr){
	if (err) console.error(err);
	else{
		for (var i in arr){
			console.log(arr[i])
		}
	}
}

mymodule(dir,ext,logResults);
