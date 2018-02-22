
var arr=[];
var path=require('path');
var fs=require('fs')
var x;

module.exports=function (content,extName,callback){
		fs.readdir(content,function (err,data){
		if(err) callback(err,0);
		else{
		for (x in data){
			if (path.extname(data[x])=="."+extName){
				arr.push(data[x]);
			}	
		}
		callback(null,arr)
		}

});
}
	

