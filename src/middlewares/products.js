/*
const {arrProducts} = require('../info/products')
const {arrUsers} = require('../info/users')

const confirmId = (req, res, next) => {

    const user = (arrUsers.find(users => users.id == req.params.id))
    if (user){
      	if (user.login == false) res.send("Debe logearse primero.");

        else if (user.admin == false) res.send("Usted no es administrador.")

        else next()
    }else res.send("ID no existe");
}

module.exports = {confirmId};
*/