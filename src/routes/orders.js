const { json } = require('express');
const express = require('express');
const router = express.Router();

const { arrConditions } = require('../info/conditions');
const {arrOrders} = require('../info/orders');
const { payMeth } = require('../info/payMethod');
const {arrProducts} = require('../info/products');
const { arrUsers } = require('../info/users');
const { totalAmount, validateMethod, confirmId, validateOrder, validateCondition } = require('../middlewares/orders');
const admin = require('../middlewares/products');

//Crear una orden // Create order
let id = -1; 
router.post('/order/:id',confirmId, validateOrder, validateMethod,  (req, res) => {

    id++
    date = new Date();
    const user = (arrUsers.find(user => user.id == req.params.id));
    price = totalAmount(req, res);
    console.log(price)
    const {order, payMeth, address} = req.body;
    const newOrder = {
        idUser: user.id,
        idOrder: id,
        condition: arrConditions[1],
        price: price,
        date: `${date.getHours()}:${date.getMinutes()}`,
        order: order,
        payMeth: payMeth,
        address: address
    };
    arrOrders.push(newOrder);
    res.json({msj: 'Order created'});
});

//Historial de pedidos // History of orders
router.get('/order/history/:id', confirmId, (req, res) => {
    const historyUser = arrOrders.filter(orders => orders.idUser == req.params.id)
    if (historyUser.length == 0){
        res.status(400).json({ message: "No hiciste ningun pedido" })
        return
    } else {
        console.log(historyUser);
        res.status(200).json(historyUser)
    }
    
});

//Lista de todos los pedidos // List of all orders
router.get('/allOrders/:id', admin.confirmId, (req, res) => {
    res.json(arrOrders);
});

//Editar estado de una orden // Edit the state of an order 
router.put('/order/:id/:idOrder', admin.confirmId, validateCondition, (req, res) => {
    const indexOrder = (arrOrders.findIndex(order => order.idOrder == req.params.idOrder && order.idUser == req.params.id))
    console.log(indexOrder)
    arrOrders[indexOrder].condition = req.body.newCondition
    res.json({msj: 'Order edited'});
});

module.exports = router;