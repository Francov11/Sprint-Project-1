const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class usersModel extends Model { }
usersModel.init({
    nombre: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    login: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN
    
}, { sequelize, modelName: 'usuarios', underscored: true }
);

module.exports = usersModel;

