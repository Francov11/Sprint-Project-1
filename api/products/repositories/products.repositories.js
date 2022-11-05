const products = require('../models/products.model')

//List of products request
const getAll = async() => await products.find()

//Create a product request
const createProduct = async(newProduct) => {
    const product = new products(newProduct)
    const response = await product.save()
    return response
}

//Update product request
const modifyProduct = async (filter, product) => await products.findOneAndUpdate(filter, product)

//Delete product request
const deleteProduct = async (filter) => await products.findOneAndDelete(filter)

//Exports
module.exports = { 
    getAll,
    createProduct,
    modifyProduct,
    deleteProduct
}