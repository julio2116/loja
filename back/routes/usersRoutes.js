const express = require('express');
const {obterTodos, obterUm, criar, alterar} = require('../controllers/usersControllers');
const { verify } = require('jsonwebtoken');

const router = express.Router();

router.route('/').get(verify, obterTodos).post(criar)
router.route('/:id').get(verify, obterUm).patch(verify, alterar)

module.exports = router