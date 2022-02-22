const express = require('express');
const router = express.Router();
const Middlewares = require('../middlewares/orders')
const Controllers = require('../controllers/orders')
const Shared = require('../../shared/shared')

router.post('/', Shared.isAuthenticated , Controllers.postOrder)

router.put('/UpdateOrder',Shared.isAuthenticated, Controllers.modifyOrder)

router.put('/confirmOrder',Shared.isAuthenticated, Controllers.confirmOrder)

router.get('/getHistory',Shared.isAuthenticated, Controllers.getHistory)

router.get('/allOrders',Shared.isAuthenticated, Controllers.getHistory) //admin

router.put('/UpdasteStatus',Shared.isAuthenticated, Controllers.getHistory) //admin

 
module.exports = router