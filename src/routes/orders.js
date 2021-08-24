const express = require('express');
const router = express.Router();

const {arrOrders} = require('../info/orders');
const {arrProducts} = require('../info/products');
const {isAdmin, isLogin} = require('../middlewares/users');
const {validatePayMeth} = require('../middlewares/orders')

var idASD = 0;

router.post('/:idUser', isLogin, validatePayMeth, (req, res) => {
    const { detail, payMethod, address } = req.body;
    let detail_ = detail;
    let total = new Float32Array();

    detail.forEach (order => {
        detail_ += `X${detail.amount}:${detail.arrProduct.name}`;
        total += (detail.amount * detail.arrProduct.price);
    });
    
    if (validatePayMeth(payMethod)){
        const myOrder = {
            idUsers: Number,
            condition: Number,
            detail: detail_,
            total: total,
            payMeth: payMethod,
            idUser: idASD,
            name: String,
            address: 'Avenida siempre viva 123'
        };
    arrOrders.push(myOrder)
    res.status(200).json({'msj': myOrder })
    } else {
        res.status(404).send('El metodo de pago es invalido');
    };
});

//Lista de ordenes // List of orders
router.get('/:idUser', isLogin, (req, res) => {
    
});

router.get('/', isAdmin, (req, res) => {
    res.json(arrOrders);
});

//cambiar esto 
router.put('/', isAdmin, (req, res) => {
    arrOrders.push(req.body);
});



module.exports = router;