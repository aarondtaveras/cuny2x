var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine','pug');

var data = {
    groceries: [{
        store: 'Acme',
        list: [
            'strawberries',
            'blueberries',
            'yogurt'
        ]
        }, {
        store: 'Corner Market',
        list: [
            'baguette',
            'basil',
            'tomatoes'
        ]
        }]
    };

app.get('/',function(req,res){
    res.render('views/list',{
        grocery_store1:data.groceries[0],
        grocery_store2:data.groceries[1]
    });
});

app.get('/a(pp)?le', function (req, res) {
    res.send('Apple or ale?');
  });

app.get('/who{1,}a{1,}', function (req, res) {
    res.send('I know right?');
  }); 

app.get('/:name/:lastname', function(req,res){
    res.send(`First and last name: ${req.params.lastname}, ${req.params.name} ${req.params.lastname}`);
  });

app.get('/:word', function(req,res){
    var reverse = "";
    for(let i=req.params.word.length -1 ;i > -1;i--){
        reverse = reverse + req.params.word[i];
    }
    res.send('the word reversed is ' + reverse);
});

  
var port = 3000;
app.listen(port);
console.log('Port' + port + ' is listening...');
