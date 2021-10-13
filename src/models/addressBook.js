const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class addressBookModel extends Model { }
addressBookModel.init({
    streetName: DataTypes.STRING,
    streetNumber: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    dptoNumber: DataTypes.INTEGER
}, { sequelize, modelName: 'addressBook', underscored: true }
);

module.exports = addressBookModel;