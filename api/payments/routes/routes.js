const express = require('express');
const router = express.Router();
const { getPayments, createPayment, updatePayment, deletePayment } = require('../controllers/payments.controllers')
const { validateMethod, validateMethodID } = require('../middlewares/middlewares')

router.get('/', getPayments)

router.post('/', validateMethod, createPayment)

router.put('/:id', validateMethodID, validateMethod, updatePayment)

router.delete('/:id', validateMethodID, deletePayment)

module.exports = router