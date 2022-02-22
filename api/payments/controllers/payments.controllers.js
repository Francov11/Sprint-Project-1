const repositories = require('../repositories/payments.repositories')

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

const updatePayment = async (req, res) => {
    try {
        const { method } = req.body
        const id = req.params.id

        const data = { method: method }
        const filter = { id: id }

        await repositories.modifyMethod(filter, data)

        res.status(200).json({
            message: 'metodo de pago editado',
            status: 200
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

const deletePayment = async (req, res) => {
    try {
        const id = req.params.id
        await repositories.deleteMethod(id)

        res.status(200).json({
            message: 'metodo de pago eliminado',
            status: 200
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = {
    getPayments,
    createPayment,
    updatePayment,
    deletePayment
}

