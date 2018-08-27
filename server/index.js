require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);
var Cron = require('cron').CronJob;
var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/texts', (req, res) => {
  var sendText = new Cron(`${req.body.sendAt.slice(3)} ${req.body.sendAt.slice(0,2)} * * *`, function() {
    client.messages.create({
      to: `+1${req.body.phoneNumber}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: req.body.message,
    }).then((message) => {
      console.log(message.sid);
    });
  }, null, true);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

