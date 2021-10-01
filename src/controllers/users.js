const jwt = require('jsonwebtoken');
const sequelize = require('../database/mysql');

require('dotenv').config();

const usersModel = require('../models/users')

exports.list = async function (req, res, next) {
    try{
        const users = await usersModel.findAll();
        res.json(users);
    }
    catch (err) {
        console.error("Error interno: " + err.message);
        res.status(500).send({ status: 'Error interno' });
    }
}

exports.register = async function (req, res, next) {
    try {
        const duplicate = await usersModel.findOne({
            where: {
                email: req.body.email
            }
        });
        console.log(duplicate);
        if(!duplicate) {
                const result = await usersModel.create(
                {
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password
                }
            );
            res.status(200).json({ msj: 'Register successfully.' });
        } else {
            return res.status(400).json({msj: 'The email you entered already exists.'});
        }            
        //res.json(result);
        /*
        const {name, phoneNumber, address, email, password} = req.body
        console.log('signin',password, email);

        jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
            if(err) {
                console.error("Error interno: " + err.message);
                res.status(500).send({ status: 'Error interno'});
            } else {
                req.token = token;
                res.json({ status: 'sigIn', token});
            }
        });*/
    }
    catch (err) {
        console.error("Error interno: " + err.message);
        res.status(500).send({ status: 'Error interno' });
    }
};


exports.login = async function (req, res, next) {
    try {
        const result = await usersModel.findOne({
                where: {
                email: req.body.email,
                password: req.body.password
                }
            });
        //res.json(result);
        if(result){
            res.json({ msj: 'Successfully login.'});
        } else {
            res.status(400).json({ msj: 'Email or password incorrect.'})
        }
        
    }
    catch (err) {
        console.error("Error interno: " + err.message);
        res.status(500).send({ status: 'Error interno' });
    }
};