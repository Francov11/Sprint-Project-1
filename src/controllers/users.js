const jwt = require('jsonwebtoken');
const {sequelize} = require('sequelize');

require('dotenv').config();

const {arrUsers} = require('../info/users')
const {usersModels} = require('../models/users')

exports.list = async (req, res, next) => {
    try{
        //const users = await usersModels.
        //res.json(users);
        cadena = `SELECT * FROM ${usersModels} WHERE id = ${req.params.id};`
        const respuesta = await sequelize.query(cadena, { type: sequelize.QueryTypes.SELECT });
        console.log(respuesta);
    }
    catch (err) {
        console.error("Error interno: " + err.message);
        res.status(500).send({ status: 'Error interno' });
    }
}
/*
exports.register = function register (req, res, next) {
    try {
        const {name, phoneNumber, address, email, password} = req.body
        console.log('signin',password, email);
        const newUser = {
            id: arrUsers.length,
            name: name,
            phoneNumber: phoneNumber,
            address: address,
            email: email,
            password: password,
            login: false,
            admin: false
        }
    
        arrUsers.push(newUser)
        res.send('User created')

        jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
            if(err) {
                console.error("Error interno: " + err.message);
                res.status(500).send({ status: 'Error interno'});
            } else {
                req.token = token;
                res.json({ status: 'sigIn', token});
            }
        });
    }
    catch (err) {
        console.error("Error interno: " + err.message);
        res.status(500).send({ status: 'Error interno' });
    }
};*/
exports.register = async (req, res, next) => {
    try {
        chain = {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password
        };
        console.log(req.body, chain);
        const result = await usersModels.create(chain);
        res.json(result.toJSON);
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


/*exports.login = function login (req, res, next) {
    const index = arrUsers.findIndex(users => req.body.email === users.email && req.body.password === users.password);
    arrUsers[index].login = true;
};*/