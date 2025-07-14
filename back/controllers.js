const Product = require('./models')

const obter = async (req, res)=>{
    try{
        const products = await Product.findAll();
        res.status(200).json({result: products})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

const criar = async (req, res) => {
    console.log(req.body)
    const {produto, valor, imagem} = req.body
    try{
        await Product.create({produto: produto, valor: valor, imagem: imagem});
        const produtoCriado = await Product.findOne({where: {produto: produto}})
        res.status(200).json({result: produtoCriado})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    obter,
    criar
}