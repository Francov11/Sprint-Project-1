class Products {
    constructor(id, name, price, status){
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = status;
    }
}

let product1 = new Products ( 1, 'Tacos', '600', true);
let product2 = new Products ( 2, 'Lasagna', '500', true);
let product3 = new Products ( 3, 'Pizza', '700', false);

let arrayProducts = [product1, product2, product3];

arrayProducts.push(Products);
console.log('Information products successfully loaded');

module.exports = { arrayProducts }
