const users = require ('../model/users')
const http = require ('../../shared/helpers');
const repositories = require ('../repositories/users')

//List of all users 
const findAll = async (req, res) => {
    try {
        const users = await repositories.findAll()
        res.json({
            status: (200),
            message: 'Usuarios obtenidos',
            user: users,
        });
    }
    catch (err){
        http.Error(req,res,err);
    }
}

// Exports 
module.exports = {
    findAll
}