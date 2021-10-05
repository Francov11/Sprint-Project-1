const express = require('express');
const router = express.Router();

//const {isAdmin} = require('../middlewares/users')
//const {confirmId} = require('../middlewares/products')

const Controller = require('../controllers/products');

//Lista de productos // List of products
router.get('/products/:id', Controller.list);

//Crear producto // Create product
router.post('/products/:id', Controller.create);

//Actualizar producto // Update product 
router.put('/products/:id/:idProduct', Controller.update);

//Borrar producto // Delete product
router.delete('/products/:id/:idProduct', Controller.delete);

module.exports = router;