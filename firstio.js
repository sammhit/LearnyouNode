var fs = require('fs')
fs.readFile(process.argv[2], function doThis(error, data){
str=data.toString()
var arr= str.split('\n')
if(error==null){
return console.log(arr.length-1)	
}
else{
return console.error(error)}
})

