var bl = require('bl')
var count = 0;
var http = require('http')
var str1, str2, str3;
http.get(process.argv[2],function(res){
	res.pipe(bl(function (err,data){
	if (err==null){
		str1=data.toString();
		count+=1;
		printAll()
	}
	else console.error(err);
		
	})
	);

});
http.get(process.argv[3],function(res){
	res.pipe(bl(function (err,data){
	if (err==null){
		 str2=data.toString();
		 count+=1;
		printAll()
	}
	else console.error(err);
		
	})
	);

});
http.get(process.argv[4],function(res){
	res.pipe(bl(function (err,data){
	if (err==null){
		str3=data.toString();
		count+=1;
		printAll()		
	}
	else console.error(err);
		
	})
	);

});

function printAll(){
if (count==3){ 
	console.log(str1);
	console.log(str2);
	console.log(str3);
}

}
