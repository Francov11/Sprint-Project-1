const products = require('../models/products.model')

const validateProduct = async (req, res, next) => {
    try {
        const { name, price } = req.body
        if (!name || !price) return res.status(404).json({ msg: 'Faltan datos', status: 404 })

        const nameExist = await products.exists({ name: name });
        nameExist ? res.status(404).json({ msg: 'The name already exists', status: 404 }) : next()

    } catch {
        res.status(404).json({ msg: 'Request denied. Check data', status: 404 });
    }
}

const validateProductID = async (req, res, next) => {
    try {
        const id = req.params.id
        validateId = await products.exists({ _id: id });
        !validateId ?  res.status(404).json({ msg: 'El id no existe', status: 404 }) : next()
    } catch {
        res.status(404).json({ msg: 'El id no existe', status: 404 })
    }
}

module.exports = {
    validateProduct,
    validateProductID
}