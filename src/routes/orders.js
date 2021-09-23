const { json } = require('express');
const express = require('express');
const router = express.Router();

const { arrConditions } = require('../info/conditions');
const {arrOrders} = require('../info/orders');
const { payMeth } = require('../info/payMethod');
const {arrProducts} = require('../info/products');
const { arrUsers } = require('../info/users');
const { totalAmount, validateMethod, confirmId } = require('../middlewares/orders');
const admin = require('../middlewares/products');

let id = -1; 
router.post('/order/:id',confirmId, validateMethod, (req, res) => {

    id++
    date = new Date();
    const user = (arrUsers.find(user => user.id == req.params.id));
    price = totalAmount(req);

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
    res.json({msj: 'Orden creada'});
});

router.get('/order/history/:id', confirmId, (req, res) => {
    console.log('prueba');
    const historyUser = (arrOrders.filter(arrOrders => arrOrders.idUser == req.params.id))
    console.log("hola", historyUser);
});

/*historial de los pedidos no funciona 
router.get('/prueba/:id', confirmId, (req, res) => {
    console.log('prueba');
    const historyUser = (arrOrders.filter(arrOrders => arrOrders.idUser == req.params.id))
    console.log("hola", historyUser);
});*/

router.get('/allOrders/:id', admin.confirmId, (req, res) => {
    res.json(arrOrders);
});

//cambiar estado no funciona
router.put('/order/:id/:idOrder', admin.confirmId, (req, res) => {
    const indexOrder = (arrOrders.findIndex(order => order.idOrder == req.params.idOrder))
    arrOrders[indexOrder].condition = req.body.newCondition
    res.json({msj: 'Orden editada'});
});

/*
router.get('/order/:id', (req, res) => {
    console.log('Buenas');
    //const historyUser = (arrOrders.filter(arrOrders => arrOrders.idUser == req.params.id))
    //console.log("hola", historyUser);
    //res.send(historyUser);
});
*/

module.exports = router;