var Twit = require('twit');
console.log("Initializing bot...");

var config = require('./config');

var T = new Twit(config.config);

