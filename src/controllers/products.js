const jwt = require('jsonwebtoken');
const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');

require('dotenv').config();

const productsModel = require('../models/users')

exports.list = async function (req, res, next) {
    try{
        const products = await productsModel.findAll();
        res.json(products);
    }
    catch (err) {
        httpError(req,res,err);
    }
}

exports.create = async function (req, res, next){
    try {
        const create = await productsModel.findOne({
            where: {
                name: req.body.name
            }
        });
        console.log(create);
        if(!create) {
                const result = await productsModel.create(
                {
                name: req.body.name,
                price: req.body.price
                }
            );
        } else {
            return res.status(400).json({msj: 'The product that you entered already exists.'});
        }            
    }
    catch (err) {
        httpError(req, res, err);
    }
};

exports.update = async function (req, res, next) {
    try {
        const result = await productsModel.update({
            name: req.body.name,
            price: req.body.price
        });
        res.json({ status: result});
    }
    catch (err) {
        httpError(req, res, err);
    }
}

exports.delete = async function (req, res, next) {
    try {
        const result = await productsModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ status: result});
    }
    catch (err) {
        httpError(req, res, err);
    }
}