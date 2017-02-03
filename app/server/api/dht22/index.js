const config = require('../../../config');
const express = require('express');


let router = new express.Router();

router.get('/', (req, res, next) => {
  res.send('here');
});
