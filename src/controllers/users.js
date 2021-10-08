const jwt = require('jsonwebtoken');
const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');

require('dotenv').config();

const usersModel = require('../models/users')

exports.list = async function (req, res, next) {
    try{
        const users = await usersModel.findAll();
        res.json(users);
    }
    catch (err) {
        httpError(req,res,err);
    }
}

exports.register = async function (req, res, next) {
    try {
        const duplicate = await usersModel.findOne({
            where: {
                email: req.body.email
            }
        });
        console.log(duplicate);
        if(!duplicate) {
                const result = await usersModel.create(
                {
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password
                }
            );
            const {email, password} = req.body
            console.log('signin',password, email);
    
            jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
                if(err) {
                    httpError(req,res,err);
                } else {
                    req.token = token;
                    res.status(200).json({ msj: 'Register successfully.' });
                    res.status(200).json({ status: 'sigIn', token});
                }
            });
        } else {
            return res.status(400).json({msj: 'The email you entered already exists.'});
        }            

    }
    catch (err) {
        httpError(req,res,err);
    }
};


exports.login = async function (req, res, next) {
    try {
        const result = await usersModel.findOne({
                where: {
                email: req.body.email,
                password: req.body.password
                }
            });
        //res.json(result);
        if(result){
            const { email, password } = req.body;
            const token = await jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
            res.json({ msj: 'Successfully login, TOKEN: ' + token});
        } else {
            res.status(400).json({ msj: 'Email or password incorrect.'})
        }
        /*
        const {password, email } = req.body;
        console.log("signup", password, email);

        jwt.sign(
        req.body,
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN },
        (err, token) => {
            if (err) {
            httpError(req, res, err);
            } else {
            req.token = token;
            res.json({ status: "signup", token });
            }
        }
        );*/ 
        }
    catch (err) {
        httpError(req,res,err);
    }
};

exports.checkToken = async function (req, res, next){
    try {
        const bearerHeader = req.headers['authorization'];
        console.log(bearerHeader);
        if(typeof bearerHeader !== 'undefined'){
                const bearer = bearerHeader.split(" ");
                const bearerToken = bearer[1];
                req.token = bearerToken
                jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
                    if(err){
                        console.log(err);
                        res.sendStatus(403)
                    } else {
                        console.log(data);
                        req.data = data
                        next();
                    }
                });
            }
    }
    catch (err) {
        httpError(req, res, err)
    }
    
}