const express = require('express');
const router = express.Router();

//const {isAdmin} = require('../middlewares/users')
const {confirmId} = require('../middlewares/products')
const {arrProducts} = require('../info/products');
const {arrUsers} = require('../info/users');

//Lista de productos // List of products
router.get('/products/:id', confirmId, (req, res) => {
    res.json(arrProducts)
});

//Crear producto // Create product
idProduct = arrProducts[arrProducts.length - 1].id
router.post('/products/:id', confirmId, (req, res) => {
    idProduct++
    const {name, price} = req.body
    const newProduct = {
        id: arrProducts.length,
        name: name,
        price: price
    };

    arrProducts.push(newProduct);
    res.json({'msj': 'Producto creado'})
});

//Actualizar producto // Update product 
router.put('/products/:id/:idProduct',  confirmId, (req,res) => {

    const indexProduct = arrProducts.findIndex(products => req.params.idProduct == products.id)
    const {name, price} = req.body
    const changeProduct = {
        id: req.params.idProduct,
        name: name,
        price: price,
    };

    arrProducts[indexProduct] = changeProduct
    res.json({msj:`product edited`})
});

//Borrar producto // Delete product
router.delete('/products/:id/:idProduct', confirmId, (req, res) => {
    const indexProduct = arrProducts.findIndex(products => req.params.idProduct == products.id)
    arrProducts.splice(req.body, 1);
    res.json({'msj': 'Producto borrado'});
});

module.exports = router;