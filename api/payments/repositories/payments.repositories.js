const payments = require('../models/payments.model')

//List of payments request
const getAll = async() => await payments.find()

//Create a payment method request
const createMethod = async(newMethod) => {
    const method = new payments(newMethod)
    const response = await method.save()
    return response
}

//Update a payment method request
const modifyMethod = async (filter, method) => await payments.findOneAndUpdate(filter, method)

//Delete a payment method request
const deleteMethod = async (filter) => await payments.findByIdAndDelete(filter)

//Exports
module.exports = { 
    getAll,
    createMethod,
    modifyMethod,
    deleteMethod
}