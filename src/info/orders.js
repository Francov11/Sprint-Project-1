const arrOrders = [
    {
        id: 1,
        userId: 1,
        name: 'Franco',
        condition: {
            id: 1
        },
        detail: [{   
                product: {
                id: 1,
                name: 'Pizza',
                price: '400'
                },
        amount: 2        
        }],
        payMethod: null,
        total: 400,
        address: 'addres1'
    }
];

console.log('Orders info loaded');

module.exports = {arrOrders};