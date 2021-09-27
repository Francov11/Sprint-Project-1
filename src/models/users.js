const sequelize = require('../database/mysql');
/*const { DataTypes, Model } = require('sequelize');

class usersModel extends Model { }
usersModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    login: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN
    
}, { sequelize, modelName: 'usuarios', underscored: true }
);
*/
exports.usersModels = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        login: DataTypes.BOOLEAN,
        admin: DataTypes.BOOLEAN
    })
};

