var express = require('express')
var bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.urlencoded({ extended: true })); 
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/hello",function(req,res){
    console.log(req.body.his_name+" "+req.body.phn);
})
app.listen(3000,()=> console.log("App running on 3000"));