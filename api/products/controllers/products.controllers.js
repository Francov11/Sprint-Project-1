require('dotenv')
const repositories = require('../repositories/products.repositories')
const redis = require('redis')

//Redis client
const client = redis.createClient({
    host: "127.0.0.1",
    port: 6379,
  });

client.connect()

//List of products
const getProducts = async (req, res) => {
    try {
        const products = await repositories.getAll()

        client.set('products', JSON.stringify(products), 'EX', 60 * 60 * 24 * 30)
            
        res.status(200).json({
                message: 'Productos obtenidos',
                product: products,
                status: 200
            })

    } catch (error) {
        
        res.status(500).json({ error: error.message })
    }
}

//Create a product
const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body

        const newProduct = {
            name: name,
            price: price
        }
        const product = await repositories.createProduct(newProduct)

        res.status(200).json({
            message: 'Producto creado',
            product: product,
            status: 200
        })
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

//Update a product
const updateProduct = async (req, res) => {
    try {
        const { name, price, isVisible } = req.body
        
        const { idProduct } = req.params
        
        const product = {
            name: name,
            price: price,
            isVisible: isVisible
        }

        const filter = { _id: idProduct }

        await repositories.modifyProduct(filter, product)

        client.del('products')

        res.status(200).json({
            message: 'Producto editado',
            status: 200
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

//Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { idProduct } = req.params
        const filter = { _id: idProduct }

        await repositories.deleteProduct(filter)

        client.del('products')

        res.status(200).json({
            message: 'Producto eliminado',
            status: 200
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Exports
module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}

