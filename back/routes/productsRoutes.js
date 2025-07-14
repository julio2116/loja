const express = require('express');
const  { obter, criar } = require('../controllers/productControllers');
const upload = require('../middlewares/uploadFiles');

const router = express.Router();

router.route('/').get(obter).post(upload.single('imagem'), criar)

module.exports = router