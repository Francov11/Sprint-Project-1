const orders = require('../models/orders')

//Get all orders request
const allOrders = async() => await orders.find()

//Post order request
const postOrder = async(newOrder) => {
    const order = new orders(newOrder)
    const response = await order.save()
    return response
}

//Get history request
const getHistory = async (filter) => await orders.find(filter)

//Confirm order request
const confirmOrder = async (filter, update) => await orders.findOneAndUpdate(filter, update)

//Update order request
const updateOrder = async (filter, update) => await orders.findOneAndUpdate(filter, update)

//Update status request
const stateOrder = async (filter, update) => await orders.findOneAndUpdate(filter, update)

//Exports
module.exports = {
    postOrder,
    updateOrder,
    confirmOrder,
    getHistory,
    allOrders,
    stateOrder
}