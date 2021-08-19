const { arrOrders } = require("../info/orders")

function validatePayMeth (req, res, next){
    if (payMethod.find(meth => meth.name === payMeth.name)) {
        return true;
    } else { 
        return false;
    }
}

module.exports = { validatePayMeth };