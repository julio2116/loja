const Users = require("../models/userModel");

const obterTodos = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obterUm = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Users.findOne({ where: { id } });
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const criar = async (req, res) => {
    const { email, nome, sobrenome, nascimento, senha, papel } = req.body;
    try {
        const emailExistente = await Users.findOne({ where: { email } });
        if (emailExistente) {
            throw new Error("Já existe um usuário com este email!");
        }
        await Users.create({
            email: email,
            nome: nome,
            sobrenome: sobrenome,
            nascimento: nascimento,
            senha: senha,
            papel: papel,
        });
        res.status(201).json({ status: "Usuário criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const alterar = async (req, res) => {
    const { id } = req.params;
    const { email, nome, sobrenome, nascimento, senha, papel } = req.body;
    try {
        const user = await Users.findOne({ where: { id } });
        if (!user) {
            throw new Error("Usuario inválido");
        }
        await Users.update(
            {
                email: email,
                nome: nome,
                sobrenome: sobrenome,
                nascimento: nascimento,
                senha: senha,
                papel: papel,
            },
            { where: { id } }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    obterTodos,
    obterUm,
    criar,
    alterar
};
