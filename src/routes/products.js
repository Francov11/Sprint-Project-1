const express = require('express');
const router = express.Router();

const Controller = require('../controllers/products');
const Controller2 = require('../controllers/users')

//Lista de productos // List of products
router.get('/products', Controller2.checkToken, Controller2.isAdmin, Controller.list);

//Crear producto // Create product
router.post('/products/:id', Controller.create);

//Actualizar producto // Update product 
router.put('/products/:id/:idProduct', Controller.update);

//Borrar producto // Delete product
router.delete('/products/:id/:idProduct', Controller.delete);

module.exports = router; 