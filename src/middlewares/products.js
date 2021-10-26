const {arrProducts} = require('../info/products')
const {arrUsers} = require('../info/users')

const confirmId = (req, res, next) => {

    const user = (arrUsers.find(users => users.id == req.params.id))
    if (user){
      	if (user.login == false) res.send("You must log in first.");

        else if (user.admin == false) res.send("You aren't the admin.")

        else next()
    }else res.send("ID doesn't exist");
}

module.exports = {confirmId};