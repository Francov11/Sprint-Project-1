const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/products.controllers')
const Middlewares = require('../middlewares/middlewares')
const Shared = require('../../shared/shared')

//List of products route
router.get('/', Shared.isAuthenticated, Shared.isAdmin, Controllers.getProducts)

//Create a product route
router.post('/add', Shared.isAuthenticated, Shared.isAdmin, Middlewares.validateProduct, Controllers.createProduct)

//Update product route
router.put('/update/:idProduct', Shared.isAuthenticated, Shared.isAdmin, Middlewares.validateProductId, Middlewares.validateProduct, Controllers.updateProduct)

//Delete a product route
router.delete('/delete/:idProduct', Shared.isAuthenticated, Shared.isAdmin, Middlewares.validateProductId, Controllers.deleteProduct)

module.exports = router