require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);
var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

client.messages.create({
  to: process.env.CELL_PHONE_NUMBER,
  from: process.env.TWILIO_PHONE_NUMBER,
  body: 'hello',
}).then((message) => {
  console.log(message.sid);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

