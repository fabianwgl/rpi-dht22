'use strict';
const express = require('express');
const config = require('../config');
const dht = require('./api/dht22');


module.exports = function(app) {
  let router = new express.Router();
  router.get('/', (req, res) => res.send('raspi'));
  app.use('/', router);
  app.use('/dht', dht);

};
