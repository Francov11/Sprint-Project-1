const orders = require('../models/orders')
const products = require('../../products/models/products.model')
const orderStates = require('../models/state')
const payments = require('../../payments/models/payments.model')

//Calculates price 
const getPrice = async (req, res) => {
    try {
        const { order } = req.body
        console.log(order)
        let price = 0
        for (i = 0; i < order.length; i++) {
            const product = await products.findOne({ name: order[i].product })
            let productPrice = product.price
            let amount = order[i].amount
            console.log(amount)
            price += amount * productPrice
            
            order[i].productPrice = productPrice 
            console.log(price)
            return price
        }
        
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
}

//Validates order
const validateOrder = async (req, res, next) => {
    try {
        const {state} = req.body
        const { idOrder } = req.params
        const filter = {_id: idOrder }


        const checkConfirmation = await orders.findOne({filter, state: 'new'})
        if(!checkConfirmation){
            next()
        } else{
            res.status(404).json({ msg: 'You already have a pending order, confirm the order to create another', status: 404 })
        }
    }
    catch (err) {
        res.status(500).json({ error: error.message })             
    }
}

//Validates method of payment
const validatePayment = async (req, res, next) => {
    try {
        const {methodOfPayment} = req.body
        const checkPayment = await payments.exists({method: methodOfPayment})
        if (!checkPayment){
            return res.status(404).json({ msg: 'The method of payment does not exist', status: 404 })
        } else {
            next();
        } 
    }
    catch (err) {
        res.status(500).json({ error: error.message })             
    }
}

//Validate status
const validateStatus = async (req, res, next) => {
    try {
        const {state} = req.body
        const checkStatus = await orderStates.exists({state: state})
        if (!checkStatus){
            return res.status(404).json({ msg: 'The state does not exist', status: 404 })
        } else {
            next();
        } 
    }
    catch (err) {

    }
}

//Validates confirmation
const validateConfirmation = async (req, res, next) => {
    try {
        const {state} = req.body
        const { idOrder } = req.params
        const filter = {_id: idOrder }


        const checkConfirmation = await orders.findOne({filter, state: 'new'})
        if(checkConfirmation){
            next()
        } else{
            res.status(404).json({ msg: 'You do not have any new order to be confirmed', status: 404 })
        }
    }
    catch (err) {
        res.status(500).json({ error: error.message })             
    }
}

//Exports
module.exports = {
    getPrice,
    validateOrder,
    validatePayment,
    validateStatus,
    validateConfirmation
}