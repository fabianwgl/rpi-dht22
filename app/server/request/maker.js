'use strict';

const request = require('request');
const sensor = require('node-dht-sensor');

var requestLoop = setInterval(() => {
  sensor.read(22, 23, (err, temperature, humidity) => {
    if (!err) {
            
      var payload = {
      	value1: temperature.toFixed(1),
      	value2: humidity.toFixed(1)
      };
      request({
      	url: process.env.MAKER_URL,
      	method: "POST",
      	json: true,
      	body: payload
      }),(err, res, body) => {
        console.log(res);
      }
    }else{
    	console.log(err);
    }
  });
},process.env.INTERVAL);