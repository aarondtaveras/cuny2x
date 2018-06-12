/**
 * You are going to create a simple express app that includes a list 
 * that is rendered to the front end. When the user clicks on a list 
 * item, it will direct to a new route that includes additional
 * information about that item. (Example, if the topic is "Cars," 
 * the user could click on an item named "Honda Civic" and be directed
 *  to a page with more information about Honda Civics.)
 * 
 */

var express = require('express');
var pug = require('pug');
var app = express();

app.set('view engine','pug');

var data = {
    e3: [{
        company: 'E3 Releases by Company',
        list: [
            'Sony',
            'Nintendo',
            'Ubisoft',
            'SquareEnix'
        ]
        }
    ]
};   

app.get('/',function(req,res){
    res.render('views/index',{
       
    });
});


  
var port = 3000;
app.listen(port);
console.log('Port' + port + ' is listening...');
