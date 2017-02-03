'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const config = require('../config');

// Instancia de express
const app = express();

app.use(bodyParser.json());

require('./routes')(app);


app.listen(config.port, () => {
  console.log(`Express app started on port ${config.port}`);
});

module.exports = app;
