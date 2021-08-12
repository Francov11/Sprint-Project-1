const {arrUsers} = require('../info/users')

function validateEmail(req, res, next) {
    let email = req.body.email;
    let Email = arrUsers.find(user => user.email === email);
    if (!Email){
        next();
    } else {
        return res.status(400).json({'msj': 'El email que introdujo ya existe.'});
    }
}

function validateLogin(req, res, next){
    let email = req.body.email;
    let password = req.body.password;
    let emailExisting = arrUsers.find( arrUsers => arrUsers.email === email && arrUsers.password === password);
    if(emailExisting) {
        res.json({'msj': 'Sesion inciada con exito.'})
    } else {
        res.status(400).json({ 'msj': 'Email o contrasenia incorrecto.' })
    }
}

function isAdmin(req, res, next){
    let admin = req.body.admin;
    let Admin = arrUsers.find(user => user.admin === admin);

    if(Admin === undefined){
        return res.status(400).json({"msj": 'El usuario no es administrador.'})
    } else {
        next();
    }
};

module.exports = {validateEmail, validateLogin, isAdmin};
