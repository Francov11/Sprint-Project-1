require('dotenv').config();
const jwt = require('jsonwebtoken');
const users = require ('../model/users')

//Register request
const register = async (newUser) => {
    const user = new users(newUser)
    const response = await user.save()
    return response
    }

//Login request
const login = async (filter) => await users.findOne(filter)

//Exports
module.exports = {
    register,
    login
}
