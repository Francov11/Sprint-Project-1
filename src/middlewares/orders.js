const { arrOrders } = require("../info/orders");
const { payMeth } = require("../info/payMethod");
const { arrProducts } = require("../info/products");

//Valida el metodo de pago // Validate the payment method
function validatePayMeth (req, res, next){
    if (payMeth.find(meth => meth.title === payMeth.title)) {
        return true;
    } else { 
        return false;
    }
}

function totalAmount (req) {
    let price = 0;
    for (i = 0; i < req.body.order.length; i++) {
        const findProduct = (arrProducts.find(product => product.name == req.body.order[i].product))
        let priceProduct = findProduct.price
        let amount = req.body.order[i].amount
        price = price + amount * priceProduct
    }
    return (price);
}

module.exports = { validatePayMeth,  totalAmount};