require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);
var Cron = require('cron').CronJob;
var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

var sendText = new Cron('05 14 * * *', function() {
  client.messages.create({
    to: process.env.CELL_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER,
    body: 'Hi don\'t forget to get me coconut water if there is any. Also don\'t forget to get me at least 100 cliff bars, thanks! Love you <3. Btw I\'m sending this from my new app. Please don\'t reply to this text or it might break my app lol.' ,
  }).then((message) => {
    console.log(message.sid);
  });
}, null, true);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

