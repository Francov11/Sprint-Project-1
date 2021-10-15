const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');

require('dotenv').config();

const addressBookModel = require('../models/addressBook')

exports.list = async function (req, res, next) {
    try{
        const result = await addressBookModel.findAll();
        res.send({result});
        redisClient.set('result', JSON.stringify(result), 'EX', '60');
    }
    catch (err) {
        httpError(req,res,err);
    }
}

exports.create = async function (req, res, next){
    try {
        const create = await addressBookModel.findOne({
            where: {
                name: req.body.name
            }
        });
        console.log(create);
        if(!create) {
                const result = await addressBookModel.create(
                {
                name: req.body.name,
                price: req.body.price
                }
            );
            await result.save();
            res.send({msj: "Product created"});
        } else {
            return res.status(400).json({msj: 'The product that you entered already exists.'});
        }            
    }
    catch (err) {
        httpError(req, res, err);
    }
};
/*
exports.update = async function (req, res, next) {
    try {

        const chain = {
            name: req.body.name,
            price: req.body.price
            }
        const result = await addressBookModel.update( chain, { where: { id: req.params.id } });
        res.send({status: 'Address book updated'});
    }
    catch (err) {
        httpError(req, res, err);
    }
}
*/
exports.delete = async function (req, res, next) {
    try {
        const result = await addressBookModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ status: "Address book deleted"});
    }
    catch (err) {
        httpError(req, res, err);
    }
}