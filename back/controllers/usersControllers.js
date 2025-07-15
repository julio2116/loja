const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
    const { id } = req.usuario;
    const { nome, sobrenome, nascimento, senha } = req.body;
    try {
        const user = await Users.findOne({ where: { id } });
        if (!user) {
            throw new Error("Usuario inválido");
        }
        await Users.update(
            {
                nome: nome,
                sobrenome: sobrenome,
                nascimento: nascimento,
                senha: senha,
            },
            { where: { id } }
        );
        res.status(200).json({status: "Dados atualizados com sucesso!"})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await Users.findOne({ where: { email } });
        if (!user) {
            throw new Error("Usuário não cadastrado, verifique o email!");
        }
        const valid = await bcrypt.compare(senha, user.senha);
        if (!valid) {
            throw new Error("Senha inválida!");
        }
        const token = jwt.sign(
            { id: user.id, nome: user.nome, papel: user.papel },
            process.env.SECRET,
            { expiresIn: "1h" }
        );
        res.status(200).json({ token: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    obterTodos,
    obterUm,
    criar,
    alterar,
    login
};
