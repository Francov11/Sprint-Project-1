const { payMeth } = require("../info/payMethod")

//Valida el metodo de pago // Validate the payment method
function validatePayMeth (req, res, next){
    if (payMethod.find(meth => meth.name === payMeth.name)) {
        return true;
    } else { 
        return false;
    }
}

module.exports = { validatePayMeth };