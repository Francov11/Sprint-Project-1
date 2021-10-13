const sequelize = require('../database/mysql');

const usersModel = require('./users')
const addressBookModel = require('./addressBook');

usersModel.belongsTo(addressBookModel);
