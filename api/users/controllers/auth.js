const jwt = require('jsonwebtoken');
const users = require ('../model/users');
const http = require ('../../helpers/httpMessage');
const repositories = require ('../repositories/auth');
const bcrypt = require ('bcrypt')

require('dotenv').config();

const register = async (req, res) => {
    try {
        const { name, lastname, email, phoneNumber, password, address} = req.body 

        const passwordHash = await bcrypt.hash(password, 8)

        const newUser = {
            name: name, 
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
            password: passwordHash,
            address: address
        }

        const user = await repositories.register(newUser)

        res.json({
            message: 'usuario creado',
            status: 200
        });
    }
    catch (err) {
        http.Error(req, res, err)
    }
}

const login = async (req, res) => {
    try {
        const filter = {
            where: {
                email: req.body.email,
                password: req.bodypassword
            }
        }
        const result = await repositories.login(filter)

        if(result) {
            const { password, email } = req.body;
            console.log("signup", password, email);
            jwt.sign(
                {email},
                process.env.SECRET_KEY,
                { expiresIn: process.env.JWT_EXPIRES_IN },
                (err, token) => {
                    if (err) {
                        http.Error(req,res,err)
                    } else {
                    req.token = token;
                    console.log('TOKEN:', token)
                    res.json({ status: "Usuario logeado"});
                    }
                }
                );
        }
        else {
            http.Error(req,res,err)
        } 

    }
    catch (err){
        console.log(Error)
    }
}


module.exports = {
    register,
    login,
}