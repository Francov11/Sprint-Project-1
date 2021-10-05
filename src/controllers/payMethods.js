const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');

require('dotenv').config();

const payMethsModel = require('../models/payMethods')

exports.list = async function (req, res, next) {
    try{
        const result = await payMethsModel.findAll();
        res.json(result);
    }
    catch (err) {
        httpError(req,res,err);
    }
}

exports.create = async function (req, res, next){
    try {
        const result = await payMethsModel.findOne({
            where: {
                name: req.body.name
            }
        });
        console.log(result);
        if(!result) {
                const result = await payMethsModel.create(
                {
                name: req.body.name
                }
            );
            res.json(result);
        } else {
            return res.status(400).json({msj: 'The paymethod that you entered already exists.'});
        }            
    }
    catch (err) {
        httpError(req, res, err);
    }
};

exports.update = async function (req, res, next) {
    try {
        const result = await payMethsModel.update({
            name: req.body.name
        });
        res.json({ status: result});
    }
    catch (err) {
        httpError(req, res, err);
    }
}

exports.delete = async function (req, res, next) {
    try {
        const result = await payMethsModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ status: result});
    }
    catch (err) {
        httpError(req, res, err);
    }
}