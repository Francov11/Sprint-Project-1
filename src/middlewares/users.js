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
    let login = req.body.login;
    let emailExisting = arrUsers.find( arrUsers => arrUsers.email === email && arrUsers.password === password);
    if(emailExisting) {
        login = true
        res.json({'msj': 'Sesion inciada con exito.'})
        next();
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

function isLogin (req, res, next){
    let user = req.params.idUsers;
    let userLogin = arrUsers.find( users => users.id === user );
    if(userLogin.login === true){
        next();
    } else {
        return res.status(400).json({"msj": 'El usuario no esta logeado.'})
    }
}

module.exports = {validateEmail, validateLogin, isAdmin, isLogin};
