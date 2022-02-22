const payments = require('../models/payments.model')

const validateMethod = async (req, res, next) => {
    try {
        const { method } = req.body
        if (!method) return res.status(404).json({ msg: 'Faltan datos', status: 404 })

        const methodExists = await payments.exists({ method: method });
        methodExists ? res.status(404).json({ msg: 'The name already exists', status: 404 }) : next()

    } catch {
        res.status(404).json({ msg: 'Request denied. Check data', status: 404 });
    }
}

const validateMethodID = async (req, res, next) => {
    try {
        const id = req.params.id
        validateId = await payments.exists({ id: id });
        !validateId ?  res.status(404).json({ msg: 'El id no existe', status: 404 }) : next()
    } catch {
        res.status(404).json({ msg: 'El id no existe', status: 404 })
    }
}

module.exports = {
    validateMethod,
    validateMethodID
}