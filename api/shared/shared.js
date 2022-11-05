require('dotenv').config();
const http = require("../shared/helpers");
const jwt = require('jsonwebtoken');
const users = require ('../users/model/users');

//Token authentication 
const isAuthenticated = async (req, res, next) => {
    try {
        const bearerHeader = req.headers.authorization;
        console.log(bearerHeader);
        if(typeof bearerHeader !== 'undefined'){
                const bearer = bearerHeader.split(" ");
                const bearerToken = bearer[1];
                req.token = bearerToken
                jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
                    if(err){
                        console.log(err);
                        return res.status(400).json(err)
                    } else { 
                        console.log(data);
                        req.data = data
                        next();
                    }
                });
            } else {
                return res.status(400).json({ err: 'No esta logeado' })
            }
    }
    catch (err) {
        http.Error(req, res, err) 
    }   
}

const getIdUser = (req) => {
    const { userId } = req.data
    console.log(userId)
    return userId
}

//User admin function 
const isAdmin = async (req, res, next) => {
    try {
      const idUser = getIdUser(req)
      const adminExist = await users.exists({ _id: idUser, isAdmin: true })
      
      !adminExist ? res.status(404).json({ msg: 'Not authorized', status: 404 }) : next()
    } catch {
      res.status(404).json({ msg: 'Not authorized', status: 404 })
    }
  }

  //Exports
module.exports = {
    isAuthenticated,
    isAdmin,
    getIdUser

}