const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class productsModel extends Model { }
productsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
    
}, { sequelize, modelName: 'products', underscored: true }
);

module.exports = productsModel;