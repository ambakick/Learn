var express = require ("express");
var app = express();

//app.set('view engine','ejs');
app.get("/",function(req,res){
    //res.send("hello");
    res.render('home.ejs');
});

app.get("/try/:Things",function(req,res){
    var thing=req.params.Things;
    res.render("try.ejs",{thething:thing});
    //res.send(thething);
});
app.listen(3000,()=> console.log('The EJS is running on port 3000'));