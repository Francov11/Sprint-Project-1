const express = require('express');
const { arrProducts } = require('../info/products');
const router = express.Router();
const {arrUsers} = require('../info/users');
const { validateEmail, validateLogin } = require('../middlewares/users');

//Lista de usuarios // List of users
router.get('/', function (req, res) {
    res.json({"users": arrUsers})
})

//Login de usuario // User Login
router.post('/', validateEmail, function (req, res) {
    arrUsers.push(req.body)
    res.send('Usuario creado')
})

//Registro de usuarios // User register
router.post('/login', validateLogin, (req, res) => {

});

module.exports = router;