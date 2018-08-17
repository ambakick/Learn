var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var friends=['Gopi','Naresh','Ashwin'];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
res.render("home");
});

app.get("/friends",function(req,res){
    
    res.render("friends",{friends:friends});;
});
app.post("/addfriend",function(req,res){
    console.log(req.body);
    var newFriend=req.body.newFriend;
    friends.push(newFriend);
    //res.render('post');
    //instead of render we can use redirect
    res.redirect('/friends');
});
app.listen(3000, () => console.log("The connection is open at port 3000"));