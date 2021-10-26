const express = require('express');
const router = express.Router();

const {arrUsers} = require('../info/users');
const { confirmId } = require('../middlewares/orders');
const { validateEmail, validateLogin } = require('../middlewares/users');

//Lista de usuarios // List of users
router.get('/', confirmId, (req, res) => {
    res.json({"Users": arrUsers})
})

//Registro de usuarios // User register 
router.post('/register', validateEmail, function (req, res) {
    const {name, phoneNumber, address, email, password} = req.body
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
})

//Login de usuario // User Login
router.post('/login', validateLogin, (req, res) => {
    const index = arrUsers.findIndex(users => req.body.email === users.email && req.body.password === users.password);
    arrUsers[index].login = true;
});

module.exports = router;