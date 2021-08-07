const { arrayUsers } = require("./info/users");

/*
function loginUser(re, res, next){
    id = parseInt(req.query.index);
    console.log(req.query);
    index = id;
    user = users[index];
    console.log(index);
    if(!user) {
        res.status(404).send({ result: 'El usuario no se encuentra logeado'});
    } else {
        req.userIndex = index;
        req.user = user;
        next();
    }
}

function newUser(req, res, next) {
    email = req.body.email;
    index = arrUsers.findIndex(element => element.email == email);
    console.log(req.nody.index);
    if (index != -1) {
        res.status(404).send({ result: false, message: 'Email ya registrado' });
    } else {
        next();
    }
} 
*/
function isAdmin (req, res, next){

}

function isRegister (req, res, next){
    
}

function isLogin (req, res, next){

}


module.exports = {loginUser, newUser};