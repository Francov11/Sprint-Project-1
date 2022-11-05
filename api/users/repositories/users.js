const users = require ('../model/users')

//List of users request
const findAll = async (req,res) =>  await users.find(); 

//Update users request
const update = async (filter, update) => await users.findOneAndUpdate(filter, update);

//Exports
module.exports = {
    findAll,
    update,
}
