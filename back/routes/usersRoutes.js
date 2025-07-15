const express = require('express');
const {obterTodos, obterUm, criar, alterar, login} = require('../controllers/usersControllers');
const { verify } = require('../middlewares/validate');

const router = express.Router();

router.route('/').get(verify, obterTodos).post(criar).patch(verify, alterar)
router.route('/:id').get(verify, obterUm)
router.route('/login').post(login)

module.exports = router