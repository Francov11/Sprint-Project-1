const express = require('express');
const router = express.Router();

const {isAdmin} = require('../middlewares/users')
const {arrProducts} = require('../info/products');
const {arrUsers} = require('../info/users');

//Lista de productos // List of products
router.get('/', isAdmin, function (req, res) {

    res.json(arrProducts)
});

//Crear producto // Create product
router.post('/', isAdmin, (req, res) => {
    arrProducts.push(req.body);
    res.json({'msj': 'Producto creado'})
});

//Actualizar producto // Update product 
//Cambiar 
router.put('/{id}', isAdmin, (req,res) => {
    arrProducts.push(req.body);
    res.json({'msj': 'Producto actualizado'})
});

//Ver como hacer para borrar un producto en especifico 
//Borrar producto // Delete product
router.delete('/', isAdmin, (req, res) => {
    arrProducts.splice(req.body, 1);
    res.json({'msj': 'Producto borrado'});
});

module.exports = router;