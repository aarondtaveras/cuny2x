var Twit = require('twit');
console.log("Initializing bot...");

var config = require('./config.js');

var T = new Twit(config);

tweeter();

setInterval(tweeter, 60*1000);

function helloWorld(){

    var tweet = 'hello world';

    T.post('statuses/update', {status: tweet}, tweeted);

    function completedTweet(err,data,response){
        if(err){
            console.log(err);
        }
        else {
            console.log('Success: ' + data.text);
        }
    };

}

