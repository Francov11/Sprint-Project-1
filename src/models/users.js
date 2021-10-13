const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class usersModel extends Model { }
usersModel.init({
    name:  DataTypes.STRING,
    phoneNumber:  DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
    
}, { sequelize, modelName: 'users', underscored: true }
);

module.exports = usersModel;
