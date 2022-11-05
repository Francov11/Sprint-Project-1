const repositories = require('../repositories/payments.repositories')

//List of payments
const getPayments = async (req, res) => {
    try {
        const payments = await repositories.getAll()

        res.status(200).json({
            message: 'metodos de pago obtenidos',
            methodOfPayments: payments,
            status: 200
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Create a payment method
const createPayment = async (req, res) => {
    try {
        const { method } = req.body

        const newMethod = { method: method }
        const payment = await repositories.createMethod(newMethod)

        res.status(200).json({
            message: 'metodo de pago creado',
            product: payment,
            status: 200
        })
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

//Update a payment method
const updatePayment = async (req, res) => {
    try {
        const { method } = req.body
        const { idPayment } = req.params
        const data = { method: method}
        const filter = { _id: idPayment }

        await repositories.modifyMethod(filter, data)

        res.status(200).json({
            message: 'metodo de pago editado',
            status: 200
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

//Delete a payment method
const deletePayment = async (req, res) => {
    try {
        const { idPayment } = req.params
        const filter = { _id: idPayment }
        await repositories.deleteMethod(filter)

        res.status(200).json({
            message: 'metodo de pago eliminado',
            status: 200
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Exports
module.exports = {
    getPayments,
    createPayment,
    updatePayment,
    deletePayment
}

