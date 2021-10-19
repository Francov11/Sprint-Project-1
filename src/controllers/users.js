const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');
const httpDenied = require('../helpers/httpDenied');

require('dotenv').config();

const usersModel = require('../models/users')

exports.list = async function (req, res, next) {
    try{
        const users = await usersModel.findAll();
        res.json(users);
    }
    catch (err) {
        httpError(req,res,err);
    }
}
