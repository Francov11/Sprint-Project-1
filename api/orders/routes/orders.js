const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/orders')
const Middlewares = require('../middlewares/orders')
const Shared = require('../../shared/shared')

//History route
router.get('/history', Shared.isAuthenticated, Controllers.GetHistory)

//Post order route
router.post('/', Shared.isAuthenticated, Middlewares.validatePayment, Middlewares.validateOrder, Controllers.postOrder)

//Update order route
router.put('/:idOrder', Shared.isAuthenticated, Controllers.modifyOrder)

//Confirm order route
router.put('/confirmOrder/:idOrder', Shared.isAuthenticated, Middlewares.validateConfirmation, Controllers.confirmOrder)

//Get all orders route
router.get('/allOrders',Shared.isAuthenticated, Shared.isAdmin, Controllers.getAllOrders)

//Edit status route
router.put('/editState/:idOrder',Shared.isAuthenticated, Shared.isAdmin, Middlewares.validateStatus, Controllers.editStatus)

//Exports
module.exports = router