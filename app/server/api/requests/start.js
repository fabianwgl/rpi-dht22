'use strict';

const request = require('request');

var payload = {
  text: "Rpi started"
};
request({
  url: process.env.SLACK_APP_URL,
  method: "POST",
  json: true,
  body: payload
}),(err, res, body) => {
  console.log(res);
}
