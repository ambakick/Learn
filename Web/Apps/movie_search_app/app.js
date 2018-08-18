var express = require('express');
var app = express();
var request = require('request');

var movie_name;
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render('search');
    
});
app.get('/results',function(req,res){
    movie_name = req.query.search;
    console.log(req.query.movie_name);
    request('http://www.omdbapi.com/?apikey=f8f16254&s='+(movie_name),function(error,response,body){
        if(!error&&response.statusCode==200){
            //res.send(body);
            var data = JSON.parse(body);
            //res.send(results['Search'][0]);
            res.render('results',{data:data});
        }
    })
})
app.listen(3000,()=>console.log("The app is running on port 3000"));