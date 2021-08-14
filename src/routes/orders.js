const express = require('express');
const router = express.Router();

const {arrOrders} = require('../info/orders');
const {arrProducts} = require('../info/products');
const {isAdmin, isLogin} = require('../middlewares/users');

router.post('/:idUser', isLogin, (req, res) => {
    const { detail, payMethod, address } = req.body;
    arrOrders.push(req.body)
    res.status(200).json({'msj': arrOrders})
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