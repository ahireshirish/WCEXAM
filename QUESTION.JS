var exp = require('express');
var bp = require('body-parser')

var app = exp();

app.use(bp.urlencoded({extended: false}))  

app.listen(9000,function(){
	console.log("exp server started at 9000");
})

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/loginform.html");
})

app.get('/logincheck',function(req,res){


    if(req.query.name == "")
    res.send("Login success");
else
    res.send("Login failed"); 
})

app.post('/logincheck', function(req,res){
	(req.body.name == "" )
	    
});

app.all('*',function(req,res){
	res.send("URL incorrect")
})