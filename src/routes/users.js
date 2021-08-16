const express = require('express');
const { arrProducts } = require('../info/products');
const router = express.Router();
const {arrUsers} = require('../info/users');
const { validateEmail, validateLogin } = require('../middlewares/users');

router.get('/', function (req, res) {
    res.json({"users": arrUsers})
})

router.post('/', validateEmail, function (req, res) {
    arrUsers.push(req.body)
    res.send('Usuario creado')
})

/*
router.post('/login', validateLogin, function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let emailExisting = arrUsers.find( arrUsers => arrUsers.email === email && arrUsers.password === password);
    if(emailExisting) {
        res.json({'msj': 'Sesion inciada con exito.'})
    } else {
        res.status(400).json({ 'msj': 'Usuario inexistente.' })
    }
});
*/

router.post('/login', validateLogin, (req, res) => {

});

module.exports = router;