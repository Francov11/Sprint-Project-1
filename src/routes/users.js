const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
require('dotenv').config();

const Controller = require('../controllers/users');

//Lista de usuarios // List of users
router.get('/', Controller.list );

//Registro de usuarios // User register 
router.post('/register', Controller.register)

//Login de usuario // User Login
router.post('/login', Controller.login, Controller.checkToken);

module.exports = router;