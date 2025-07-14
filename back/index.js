const express = require('express');
const router = require('./routes/productsRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use('/imagens', express.static('public/imagens'));

app.listen(3000, () =>{
    console.log('http://localhost:3000')
})

module.exports = app