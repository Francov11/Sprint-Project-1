const {conditions} = require('./conditions');
const {payMeth} = require('./payMethod')
const {product} = require('./products');

//Listado de ordenes // List of orders
const arrOrders = [
    {
        id: 1,
        userId: 1,
        name: 'Franco',
        condition: "Confirmado",
        detail: [{   
                product: {
                id: 1,
                name: 'Pizza',
                price: '400'
                },
        amount: 2        
        }],
        payMeth: 1,
        total: 400,
        address: 'addres1'
    }
];

console.log('Orders info loaded');

module.exports = {arrOrders};