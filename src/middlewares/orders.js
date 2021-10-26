const { arrConditions } = require("../info/conditions");
const { arrOrders } = require("../info/orders");
const { payMeth } = require("../info/payMethod");
const { arrProducts } = require("../info/products");
const { arrUsers } = require("../info/users");

const confirmId = (req, res, next) => {

    const users = (arrUsers.find(users => users.id == req.params.id))
    if (users){
      	if(users.login == true) next()
         else res.send("You can't access, log in before");
    }else res.send("ID does not exist");
}

//Valida el metodo de pago // Validate the payment method
function validateMethod (req, res, next) {
    const meth = (payMeth.find(payments => payments.title == req.body.payMeth))
    if(meth) next()
    else res.json({ msj: "Pay method not available."});
}

function totalAmount (req, res) {
    let price = 0;
    for (i = 0; i < req.body.order.length; i++) {
        const findProduct = (arrProducts.find(product => product.name == req.body.order[i].product))
        let priceProduct = findProduct.price
        let amount = req.body.order[i].amount
        price = price + amount * priceProduct
    }
    return (price);
};

const validateOrder = (req, res, next) => {  
    
    const { order, payMeth, address} = req.body;

    if(!order || !payMeth || !address) res.json({msj: "Fill in all fields"}) 
    
    for(i=0;i<req.body.order.length;i++){   

        if(req.body.order[i].product === "" || req.body.order[i].amount === "") {
        res.status(404).json ({msj: "Fill in all fields"})
        return;
        }

        const findProduct = (arrProducts.find(products => products.name == req.body.order[i].product))
        if(!findProduct){
        res.status(404).json ({msj: "one of the products does not exist"}) 
        return;        
        }
        next()
    }
}

function validateCondition (req, res, next){
    const condition = (arrConditions.find(states => states == req.body.newCondition))

    condition ? next() : res.json({msj: "the state does not exist"})
}


module.exports = { totalAmount, validateMethod, confirmId, validateOrder, validateCondition}