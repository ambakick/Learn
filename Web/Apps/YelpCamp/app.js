var express = require ("express");
var app = express();
var campgrounds = [
    {name:'Sierra', image:'https://images.unsplash.com/photo-1516600517612-61f2e5eb9182?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=406cffebb5a1c9dd71287e799b6d63ad&auto=format&fit=crop&w=500&q=60'},
    {name:'High Sierra', image:'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e684a2ba58e985b993ccd3e26cb36d5&auto=format&fit=crop&w=500&q=60'},
    {name:'Mojave', image:'https://images.unsplash.com/photo-1519670345864-d7d68dcd43ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50e2325f9696b2103c9eb637d3c70103&auto=format&fit=crop&w=500&q=60'}
]
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.render('home');
});

app.get("/",function(req,res){
    res.render(home);
})
app.get('/campgrounds',function(req,res){
    res.render('campgrounds',{campgrounds:campgrounds});
});
app.post('/campgrounds',function(req,res){
    var name = req.body.n_campground;
    var image =req.body.n_image;
    var obj = {name:name, image:image};
    campgrounds.push(obj);

    //to redirect back
    res.redirect('/campgrounds');
})
app.get('/campgrounds/new',function(req,res){
    res.render('add_campground');
});
app.listen(3000,()=>console.log ('The YelpCamp is running on port 3000'));