const express = require('express');
const router = express.Router();

const {arrOrders} = require('../info/orders');
const {arrProducts} = require('../info/products');
const {isAdmin} = require('../middlewares/users');

router.get('/', isAdmin, (req, res) => {
    res.json(arrOrders);
});

router.post('/:id/lsofdo/:id', (req, res) => {
    arrOrders.push(req.body)
});

module.exports = router;