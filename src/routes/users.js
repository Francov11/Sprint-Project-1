const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
require('dotenv').config();

const {arrUsers} = require('../info/users');
const { validateEmail, validateLogin } = require('../middlewares/users');

const Controller = require('../controllers/users');
const Sequelize = require('../database/mysql');
const { JsonWebTokenError } = require('jsonwebtoken');

//Lista de usuarios // List of users
router.get('/', Controller.list );

//Registro de usuarios // User register 
router.post('/register', Controller.register, validateEmail)
/*
router.post('/login/prueba', validateLogin, (req, res) => {
    try{
        const { email, password } = req.body;
        console.log('signup',password, email);

        let emailExisting = arrUsers.find( arrUsers => arrUsers.email === email && arrUsers.password === password);

        jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) =>{
            if(err) {
                console.error("Error interno: " + err.message);
                res.status(500).send({ status: 'Error interno' })
            } else {
                req.token = token;
                res.json({ status: 'signup', token });
            }
        })

        const index = arrUsers.findIndex(users => req.body.email === users.email && req.body.password === users.password);
        arrUsers[index].login = true;
    }
    catch (err) {
        console.error("Error interno: " + err.message);
        res.status(500).send({ status: 'Error interno' });
    }
    
});
*/
//Login de usuario // User Login
router.post('/login', Controller.login, validateLogin);

module.exports = router;