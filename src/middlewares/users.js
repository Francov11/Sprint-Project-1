/*const {arrUsers} = require('../info/users')

//Valida que no se repita el email // Validates that the email doesn't repeat 
function validateEmail(req, res, next) {
    let email = req.body.email;
    let Email = arrUsers.find(user => user.email === email);
    if (!Email){
        next();
    } else {
        return res.status(400).json({'msj': 'El email que introdujo ya existe.'});
    }
}

//Valida el login // Validate login 

function validateLogin(req, res, next){
    let email = req.body.email;
    let password = req.body.password;
    let login = req.body.login;
    let emailExisting = arrUsers.find( arrUsers => arrUsers.email === email && arrUsers.password === password);
    if(emailExisting) {
        res.status(200).json({ 'msj': 'Secion iniciada.' })
        next();
    } else {
        res.status(400).json({ 'msj': 'Email o contrasenia incorrecto.' })
    }
}


//Valida quien es administrador // Validates who is admin 
function isAdmin(req, res, next){
    
    let admin = req.body.admin;
    let Admin = arrUsers.find(user => user.admin === admin);
    if(Admin === true){
        next();
    } else {
        return res.status(400).json({"msj": 'El usuario no es administrador.'})
    }
    const user = (arrUsers.find( arrUsers => arrUsers.id == req.params.id ));
    if( user ) {
        if (user.login == false) {
            res.send("you can't access, log in before");
        } else if (user.admin == false) {
            res.send("you can't access");
            } else { 
                next();
            }
    } //else res.send("ID does not exist");
};

//Valida quien esta logeado // Validates who is logged 

function isLogin (req, res, next){
    let login = req.body.login;
    let Login = arrUsers.find( users => users.login === login );
    if(Login === true){ 
        next();
    } else {
        return res.status(400).json({"msj": 'El usuario no esta logeado.'})
    }
}

module.exports = {validateEmail, validateLogin, isAdmin, }; //isLogin
*/