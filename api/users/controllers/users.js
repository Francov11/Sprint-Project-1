const users = require ('../model/users')
const http = require ('../../helpers/httpMessage')
const repositories = require ('../repositories/users')

const findAll = async (req, res) => {
    try {
        const users = await repositories.findAll()
        res.json({
            status: (200),
            message: 'Usuarios obtenidos',
            user: users,
        });
        //res.json.status(200)({
        //    message: 'Usuarios obtenidos',
        //    user: users,
        //   status: 200 
        //})
    }
    catch (err){
        http.Error(req,res,err);
    }
}

const update = async (req, res) => {
    try {
        const { name, lastname, email, phoneNumber, password, address, isAdmin, isLogged, isActive} = req.body
        const id = req.params.id

        const user = {
            name: name, 
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            address: address,
            isAdmin: isAdmin,
            isLogged: isLogged,
            isActive: isActive
        }

        const filter = { id: id }

        await repositories.update(filter, user)

        res.status(400).json({ 
            msj: 'User suspended.',
            status: 200
            })
    }
    catch (err){
        http.Error(req,res,err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id

        await repositories.deleteUser(id)

        res.json({
            status: (200),
            message: 'User deleted',
            user: users,
        });
    }
    catch (err){
        http.Error(req,res,err);
    }
}


module.exports = {
    findAll,
    update,
    deleteUser
}