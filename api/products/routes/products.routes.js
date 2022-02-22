const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controllers')
const { validateProduct, validateProductID } = require('../middlewares/middlewares')

router.get('/', getProducts)

router.post('/', validateProduct, createProduct)

router.put('/:id', validateProductID, validateProduct, updateProduct)

router.delete('/:id', validateProductID, deleteProduct)

module.exports = router