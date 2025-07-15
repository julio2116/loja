const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const bcrypt = require('bcrypt');

const validarIdade = (nascimento) => {
    const maiorIdadeMS = 18 * 365.25 * 24 * 60 * 60 * 1000;
    const dataHoje = Date.now();
    const dataNascimentoMS = Date(nascimento);
    if(dataHoje - dataNascimentoMS > maiorIdadeMS){
        throw new Error('Usuário precisar ter mais de 18 anos!')
    }
}

const Users = sequelize.define(
  'Users',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,

      }
    },
    nome: {
      type: DataTypes.FLOAT(7,2),
      allowNull: false,
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    nascimento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            customValidator(nascimento){
                validarIdade(nascimento)
            }
        },
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    papel: {
        type: DataTypes.ENUM,
        values: ['admin', 'cliente'],
        allowNull: false
    },
  },
);

Users.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.senha, 10);
  user.senha = hashedPassword;
});

module.exports = Users