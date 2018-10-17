var express=require('express')
var app=express()
app.get('/',function(req,res)
{
	console.log("GET method")
	res.send("Hallo world..!!")
})
app.get('/hai',function(req,res)
{
	console.log("GET method for 2nd time")
 	res.send("Welcome...")
})
const server=app.listen("8000","localhost",function(){
	console.log("Server running...")
})
