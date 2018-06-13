const express = require('express');

//using request package: 

const request = require('request'); 

let apiKey = '****************************';
let city = 'portland';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

/** query params start with question mark. They are then indicated with key/value pairs
    separated by an = sign. Different key/value pairs are separated by an ampersand &
    i.e : ... weather  (?)  q  (=) $  {city} (&)  appid=${apiKey}          
**/

request(url,function(err,response,body){
    if(err){
        console.log('error',error);
    } else {
        console.log('body: ',body);
    }
});

