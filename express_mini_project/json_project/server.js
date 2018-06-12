//using express 
var express = require('express');

//create the app 
var app = express();

// require file system (fs)
var fs = require('fs');

// cross origin resources 
var cors = require('cors');
app.use(cors());

var ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine','ejs');

// Database will be useraccounts.json 

var useraccounts;
var exists = fs.existsSync('useraccounts.json');
if(exists){
    console.log('loading users...');
    var txt = fs.readFileSync('useraccounts.json','utf8');
    // Parse text back to object 
    useraccounts = JSON.parse(txt);
} else {
    console.log("data base is empty...");
    useraccounts = {};
}

//Set up server

var server = app.listen(process.env.PORT || 3000, listen);

function listen(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at " + host + ":" + port);
}

app.get('/add/:user/:password',addUserAccount);

function addUserAccount(req,res){
    var userName = req.params.user;
    var password = req.params.password;

    // Store it
    useraccounts[userName] = password;
    // Let request know it's completed 

    var reply = {
        status: 'success',
        userName: userName,
        password: password
    }
    console.log('adding: ' + JSON.stringify(reply));

    //write a file each time we get a new word 

    var json = JSON.stringify(useraccounts,null,2);
    fs.appendFile('useraccounts.json',json,'utf8',finished);

    function finished(err){
        console.log('Finished writing data to json.');
        res.send(reply);
    }

    app.get('/',function(req,res){
        res.render('index.ejs');
    })

    app.get('/all', showData);

    function showData(req,res){
        res.send(useraccounts);
    }

}