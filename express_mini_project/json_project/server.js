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
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index.ejs');
})


app.use(express.json());
app.use(express.urlencoded({extended : true}));

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

app.get('/add',function(req,res){
    res.render('index');
    var username = req.query.username;
    var password = req.query.password;
    console.log(username,password);

    useraccounts[username] = password;

    var reply = {
        status:'success',
        username: username,
        password: password
    }
    console.log('adding: ' + JSON.stringify(reply));

    var json = JSON.stringify(useraccounts,null,2);
    fs.appendFile('useraccounts.json',json,'utf8',finished);
    function finished(err){
        console.log('Finished writing data to json.');
    }

})