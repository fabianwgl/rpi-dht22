'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const config = require('../config');
const path = require('path');

// Instancia de express
const app = express();

app.use(bodyParser.json());

require('./routes')(app);
require(__dirname+'/api/requests/start.js');
require(__dirname+'/api/requests/maker.js');


app.listen(config.port, () => {
  console.log(`Express app started on port ${config.port}`);
});

module.exports = app;
