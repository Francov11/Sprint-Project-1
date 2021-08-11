const express = require('express');
const router = express.Router();

const {isAdmin} = require('../middlewares/users')
const {arrProducts} = require('../info/products');
const {arrUsers} = require('../info/users');


router.get('/', isAdmin, function (req, res) {
    res.json(arrProducts)
});

//Crear producto
router.post('/', isAdmin, (req, res) => {
    arrProducts.push(req.body);
    res.json({'msj': 'Producto creado'})
});

//Actualizar producto
router.put('/', isAdmin, (req,res) => {
    arrProducts.push(req.body);
    res.json({'msj': 'Producto actualizado'})
});

//Borrar producto
router.delete('/', isAdmin, (req, res) => {
    arrProducts.splice(req.body, 1);
    res.json({'msj': 'Producto borrado'});
});

module.exports = router;