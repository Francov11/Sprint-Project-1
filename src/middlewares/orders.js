const { arrOrders } = require("../info/orders");
const { payMeth } = require("../info/payMethod");
const { arrProducts } = require("../info/products");
const { arrUsers } = require("../info/users");

const confirmId = (req, res, next) => {

    const users = (arrUsers.find(users => users.id == req.params.id))
    if (users){
      	if(users.login == true) next()
         else res.send("you can't access, log in before");
    }else res.send("ID does not exist");
}

//Valida el metodo de pago // Validate the payment method
function validateMethod (req, res, next) {
    const meth = (payMeth.find(payments => payments.title == req.body.payMeth))
    if(meth) next()
    else res.json({msj: "mettodo de pago no disponible"});
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

module.exports = { totalAmount, validateMethod, confirmId };