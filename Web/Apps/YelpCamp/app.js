var express = require ("express");
var app = express();
var campgrounds = [
    {name:'Sierra', image:'https://images.unsplash.com/photo-1531149209156-122dcea6fdd2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3dbc572551e15f53055893f339b9be81&auto=format&fit=crop&w=500&q=60'},
    {name:'High Sierra', image:'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e684a2ba58e985b993ccd3e26cb36d5&auto=format&fit=crop&w=500&q=60'},
    {name:'Mojave', image:'https://images.unsplash.com/photo-1519670345864-d7d68dcd43ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50e2325f9696b2103c9eb637d3c70103&auto=format&fit=crop&w=500&q=60'}
]
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    app.render('home');
});
app.get('/campgrounds',function(req,res){
    app.render('campgrounds',{campgrounds:campgrounds});
});
app.listen(3000,()=>console.log ('The YelpCamp is running on port 3000'));