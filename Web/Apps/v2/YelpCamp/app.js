var express = require ("express");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/yelp_camp");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.render('home');
});

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name:String,
	image: String
});

var Campground = mongoose.model("Campground",campgroundSchema);


app.get("/",function(req,res){
    res.render(home);
})
app.get('/campgrounds',function(req,res){
	Campground.find({}, function(err, campgrounds){
		if(err){
			console.log(err);
		}
		else
		{
			    res.render('campgrounds',{campgrounds:campgrounds});

		}
	});
});
app.post('/campgrounds',function(req,res){
    var name = req.body.n_campground;
    var image =req.body.n_image;
    var obj = {name:name, image:image};
    Campground.create( obj,

	function(err, campground){
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log("NEWLY CREATED CAMPGROUND");
			console.log(campground);
		}
	});


    //to redirect back
    res.redirect('/campgrounds');
})
app.get('/campgrounds/new',function(req,res){
    res.render('add_campground');
});
app.listen(3000,()=>console.log ('The YelpCamp is running on port 3000'));