const express = require('express');
const router = express.Router();

//Importaciones
const { arrayUser } = require("../info/users");
const { arrayProducts } = require("../info/products");
//const {loginUser, newUser} = require('./middlewares');

router.use(express.json());

router.get('/users',  (req, res) => {
    console.log(arrayUser);
    res.send(arrayUser);
});

router.post('/users',(req, res) => {

    let id = req.body.id;
    let name = req.body.name; 
    let email = req.body.email;
    let password = req.body.password;
    let phoneNumber = req.body.phoneNumber;
    let address = req.body.address;
    let admin = req.body.admin;

    let user = new Users ( id, name, email, password, phoneNumber, address, admin);

    arrayUser.push(req.body);
    res.json(arrayUser)
});

router.post('/users/login', (req, res) => {
    
});

module.exports = router;
