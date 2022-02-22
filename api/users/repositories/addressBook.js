const users = require('../model/users')

const getaddressBook = async (filter) => {
    const user = await users.findOne(filter)
    return user.addressBook
}

//const createAddress = async (filter, address) => await users.updateOne({ filter }, { $push: { shippingAddress: address} })
const createAddress = async (filter, address) => await users.updateOne({ filter }, { $push: { addressBook: {shippingAddress: address } } })

const deleteAddress = async (filter, filter2) => await users.updateOne({ filter }, { $pull: { addressBook: {shippingAddress: filter2 } } })

module.exports = {
    getaddressBook,
    createAddress,
    deleteAddress
}