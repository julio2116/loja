const jwt = require('jsonwebtoken');
require('dotenv').config();

const verify = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
        throw new Error('Usuário não está logado!');
    }
    try{
        const valid = jwt.verify(token, process.env.SECRET);
        if(!valid){
            throw new Error('Token inválido!');
        }
        req.usuario = valid;
        next()
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    verify
}