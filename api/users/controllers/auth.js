require('dotenv').config();
const jwt = require('jsonwebtoken');
const repositories = require ('../repositories/auth');
const bcrypt = require ('bcrypt')

//User register 
const register = async (req, res) => {
    try {
        const { name, lastname, email, phoneNumber, password} = req.body 
        //console.log('line12')
        const passwordHash = await bcrypt.hash(password, 8)

        //console.log('line14')
        const newUser = {
            name: name, 
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
            password: passwordHash,
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

//User login 
const login = async (req, res) => {
    try {
        const { email } = req.body
        const filter = ({email: email})
        const result = await repositories.login(filter)
        console.log(result)
        if(result) {
            const { password, email } = req.body;
            console.log("signup", password, email);
            jwt.sign(
                {email, userId: result._id},
                process.env.SECRET_KEY,
                { expiresIn: process.env.JWT_EXPIRES_IN },
                (err, token) => {
                    if (err) {
                        http.Error(req,res,err)
                    } else {
                    req.token = token;
                    console.log('TOKEN:', token)
                    res.json({token});
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

// Exports 
module.exports = {
    register,
    login,
}