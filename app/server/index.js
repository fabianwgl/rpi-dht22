const bodyParser = require('body-parser');
const express = require('express');
const config = require('../config');

// Instancia de express
const app = express();

app.use(bodyParser.json());