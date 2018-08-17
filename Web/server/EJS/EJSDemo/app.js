var express = require ("express");
var app = express();

//app.set('view engine','ejs');
app.get("/",function(req,res){
    //res.send("hello");
    res.render('home');
});

app.get("/try/:Things",function(req,res){
    var thing=req.params.Things;
    res.render("try.ejs",{thething:thing});
    //res.send(thething);
});

app.get("/posts",function(req,res){
    var posts = [
        {title: "Post 1",author:"Susy"},
        {title: "Post 2",author:"Advaith"},
        {title: "Post 3",author:"Gopi"}
    ];
    res.render('posts.ejs',{posts:posts});
})
app.listen(3000,()=> console.log('The EJS is running on port 3000'));