const express = require('express');
const  { obter, criar } = require('./controllers');

const router = express.Router();

router.route('/').get(obter).post(criar)

module.exports = router