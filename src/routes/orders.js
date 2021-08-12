const express = require('express');
const router = express.Router();

const {arrOrders} = require('../info/orders');
const {arrProducts} = require('../info/products');
const {isAdmin} = require('../middlewares/users');

router.get('/', isAdmin, (req, res) => {
    res.json(arrOrders);
});

router.post('/', (req, res) => {

});

module.exports = router;