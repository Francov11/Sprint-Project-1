const repositories = require('../repositories/addressBook')
const helper = require ('../../helpers/httpMessage')
const { getIdUser, getIdTest } = require('../../shared/index')


const listAddressBook = async (req, res) => {
    try {
       const idUser = getIdTest(req, res)
       console.log(idUser)
       
       const filter = (idUser)
        const addressBook = await repositories.getaddressBook(filter)

        res.json({
            status: 200,
            message: 'AddresBook list',
            addressBook: addressBook,
        })
    }
    catch (err){
        helper.Error(req,res,err);
    }
}

const addAddress = async (req, res) => {
    try {
        const { shippingAddress } = req.body
        //const id = req.params.id
        //const filter = { id: id }

        const idUser = getIdTest(req, res)
        const filter = (idUser)

        const data = repositories.createAddress(filter, shippingAddress)
        console.log(data)
        console.log(shippingAddress)

        res.json({
            message: 'Address added',
            address: shippingAddress,
            status: 200
        })
    }
    catch (err){
        helper.Error(req,res,err);
    }
}

const deleteAddress = async (req, res) => {
    try {
        const { shippingAddress } = req.params
        const idUser = getIdTest(req)
        const filter = { id: idUser }
        const filter2 = { id: shippingAddress }

        repositories.deleteAddress(filter, filter2)

        res.status.json(200)({
            message: 'dirección eliminada',
            status: 200
        })
    }
    catch (err){
        helper.Error(req,res,err);
    }
}

module.exports = {
    listAddressBook,
    addAddress,
    deleteAddress
}
