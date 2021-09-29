const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class usersModel extends Model { }
usersModel.init({
    /*id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },*/
    name:  DataTypes.STRING
    /*phoneNumber:  DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    login: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN*/
    
}, { sequelize, modelName: 'users', underscored: true }
);

module.exports = usersModel;
/*
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

Payment.init({
  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  enabled: {
    type: DataTypes.BOOLEAN
    
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('NOW()')
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('NOW()')
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Payment' // We need to choose the model name
});

module.exports = Payment;
// the defined model is the class itself
console.log(Payment === sequelize.models.Payment); // true

*/
