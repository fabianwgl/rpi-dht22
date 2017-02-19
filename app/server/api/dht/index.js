'use strict';

const config = require('../../../config');
const express = require('express');
var sensor = require('node-dht-sensor');
let router = new express.Router();

router.get('/', (req, res, next) => {
  sensor.read(22, 23, function(err, temperature, humidity) {
    if (!err) {
            
        res.json({
            temp:temperature.toFixed(1),
            hum: humidity.toFixed(1)
        });
    }else{
    	res.send(404);
    }
  });
});

module.exports = router;