const jwt = require('jsonwebtoken');

const {sequelize} = require('sequelize');
const {arrUsers} = require('../info/users')
require('dotenv').config();

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
};

/*exports.login = function login (req, res, next) {
    const index = arrUsers.findIndex(users => req.body.email === users.email && req.body.password === users.password);
    arrUsers[index].login = true;
};*/