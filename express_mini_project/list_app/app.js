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

var data = [
    {
        id:1,
        company: 'Sony',
        body: 'Sony released new gameplay for Spider-Man open world.'
    },
    {
        id:2,
        company: 'Nintendo',
        body: 'New smash bros gameplay for switch'
    },
    {
        id:3,
        company: 'Ubisoft',
        body: 'Ubisoft is pretty trash so yeah lol'
    },
    {
        id:4,
        company: 'SquareEnix',
        body: 'Kingdom hearts 3 has a release date but we all know that means nothing'
    }
]
app.get('/',function(req,res){
    res.render('index.ejs', {data : data});
});

app.get('/post/:id',function(req,res){
    var item = data.filter((item)=>{
        return item.id == req.params.id
    })

    res.render('item',{
        company: item.company,
        body: item.body
    })
});


  
var port = 3000;
app.listen(port);
console.log('Port' + port + ' is listening...');
