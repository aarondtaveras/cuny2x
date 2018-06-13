const express = require('express');
const app = express();
const request = require('request'); 
//const bodyParser = require('body-parser');
// "requires" - (includes)

// for parsing the request text
app.use(express.urlencoded({extended : true}));
// When you want to use some static members - style sheets, images, etc 
app.use(express.static('public'));

app.get('/',function(req,res){
    //rendering doesn't NEED to take all three parameters - optional!
    res.render('index');
});

app.listen(3000,function(){
    console.log('listening on port 3000...');
});

app.set('view engine', 'ejs');

// BASIC EXPRESS BOILER PLATE CODE ... REQUIRE EXPRESS, CREATE YOUR APP, ROUTE TO '/' 
//using request package: 


app.post('/',function(req,res){
    let apiKey = '9044834719735598874c66ec685f24e4';
    let city = req.body.city;
    //          NEED TO USE ` INSTEAD OF SINGLE QUOTES!! 
    /** query params start with question mark. They are then indicated with key/value pairs
    separated by an = sign. Different key/value pairs are separated by an ampersand &
    i.e : ... weather  (?)  q  (=) $  {city} (&)  appid=${apiKey}  
        Syntax : start --> ? key=value & key=value & key=value & key=value...        
    **/
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    request(url,function(err,response,body){
        if(err){
            res.render('index',{weather:null, error: 'Error, try again.'});
        } else {
            let weather = JSON.parse(body);
            if(weather.main == undefined){
                res.render('index',{weather:null, error:'Invalid input, try again.'});
            }
            else {
                let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index',{weather: message, error:null}); 
            }
        } 
        
    });

});