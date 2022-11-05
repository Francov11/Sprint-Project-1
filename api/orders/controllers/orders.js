const orders = require('../models/orders')
const repositories = require('../repositories/orders')
const {getPrice} = require('../middlewares/orders')
const helpers = require('../../shared/helpers')

//Get all orders
const getAllOrders = async (req, res) => {
    try {
        console.log('1')
        const response = await repositories.allOrders();
        console.log(response)
        res.status(200).json({
            message: 'Order completed',
            product: response,
            status: 200
        })
        return response
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

//Post an order
const postOrder = async (req, res) => {
    try {
        const { order, methodOfPayment, shippingAddress } = req.body
        
        const price = await getPrice(req, res)
        const newOrder = {
            order: order,
            price: price,
            methodOfPayment: methodOfPayment,
            shippingAddress: shippingAddress
        }
        
        const data = await repositories.postOrder(newOrder)
        
        res.status(200).json({
            message: 'Order completed',
            product: data,
            status: 200
        })

        const response = await data.save()
        return response

    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

//Update an order
const modifyOrder = async (req, res) => {
    try {
        const { order, methodOfPayment, shippingAddress } = req.body
        const price = await getPrice(req, res)
        const { idOrder } = req.params
        const filter = { _id: idOrder }
        const update = {
          order: order,
          price: price,
          methodOfPayment: methodOfPayment,
          shippingAddress: shippingAddress
        }
        
        const data = await repositories.updateOrder(filter, update)
        const response = await data.save()

        res.status(200).json({
            message: 'Order updated',
            product: data,
            status: 200
        })
        
        return response
    }
    catch (error) {

        return res.status(200).json({ error: error.message })
    }
}

//Get history of orders
const GetHistory = async (req, res) => {
    try {
        const {idOrder} = req.body
        const{userId} = req.data
        const filter = {_id: userId, idOrder}
        const response = await repositories.getHistory(filter);
        console.log(response)
        res.status(200).json({
            message: 'History:',
            product: response,
            status: 200
        })
        return response
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

//Confirm your order
const confirmOrder = async (req, res) => {
    try {
        const { state } = req.body
        const { idOrder } = req.params
        const filter = { _id: idOrder }
        const update = {
            state: 'confirmed'
        }
        const data = await repositories.updateOrder(filter, update)
        const response = await data.save()

        res.status(200).json({
            message: 'Order updated',
            product: response,
            status: 200
        })
        
        return response
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

//Edit status of orders
const editStatus = async (req, res) => {
    try {
        const {state} = req.body
        const { idOrder } = req.params
        const filter = { _id: idOrder }

        const update = {
            state: state
          }
          
        const data = await repositories.stateOrder(filter, update)
        const response = await data.save()
  
          res.status(200).json({
              message: 'Status updated',
              product: data,
              status: 200
          })
          
          return response

    } catch (error) {
        return res.status(200).json({ error: error.message })
    }
}

//Exports
module.exports = {
    postOrder,
    modifyOrder,
    GetHistory,
    editStatus,
    getAllOrders,
    confirmOrder
}