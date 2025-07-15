const express = require('express');
const produtctRouter = require('./routes/productsRoutes');
const userRouter = require('./routes/usersRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/produtos', produtctRouter);
app.use('/api/usuario', userRouter);
app.use('/api/imagens', express.static('public/imagens'));

app.listen(3000, () =>{
    console.log('http://localhost:3000')
})

module.exports = app