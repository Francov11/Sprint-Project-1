const express = require('express');
const router = express.Router();

const {arrOrders} = require('../info/orders');
const {arrProducts} = require('../info/products');
const {isAdmin, isLogin, validatePayMeth} = require('../middlewares/users');

router.post('/:idUser', isLogin, (req, res) => {
    const { detail, payMethod, address } = req.body;
    let d = new Date();
    let hour = `${d.getHours()}:${d.getMinutes()}`;
    let detail_ = String();
    let total = new Float32Array();

    detail.forEach(order => {
        detail_ += `X${detail.amount}:${detail.arrProduct.name}`;
        total += (detail.amount * detail.arrProduct.price);

    });
    
    if (validatePayMeth(payMethod)){
        const myOrder = {
            id: 1,
            condition: 1,
            time: hour,
            detail: detail_,
            total: total,
            payMeth: payMethod,
            idUser: idASD,
            name: 1,
            adress: 'Avenida siempre viva 123'
        };
    arrOrders.push(myOrder)
    res.status(200).json({'msj': myOrder })
    } else {
        res.status(404).send('El metodo de pago es invalido');
    };
});

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