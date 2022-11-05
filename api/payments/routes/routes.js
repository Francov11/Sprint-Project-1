const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/payments.controllers')
const Middlewares = require('../middlewares/middlewares')
const Shared = require('../../shared/shared')

//List of payments route
router.get('/', Shared.isAuthenticated, Shared.isAdmin, Controllers.getPayments)

//Create a payment method route
router.post('/', Shared.isAuthenticated, Shared.isAdmin, Middlewares.validateMethod, Controllers.createPayment)

//Update a payment method route
router.put('/update/:idPayment', Shared.isAuthenticated, Shared.isAdmin, Middlewares.validateMethodID, Middlewares.validateMethod, Controllers.updatePayment)

//Delete a payment method id
router.delete('/delete/:idPayment', Shared.isAuthenticated, Shared.isAdmin, Middlewares.validateMethodID, Controllers.deletePayment)

//Exports
module.exports = router