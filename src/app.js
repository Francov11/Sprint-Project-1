const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const config = require('../config')

//Importaciones
const { arrayUser } = require("./info/users");
const { arrayProducts } = require("./info/products");
//const {loginUser, newUser} = require('./middlewares');


//Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Sprint Project 1',
            version: '1.0.2'
        }
    },
    apis: ['./swagger/swagger.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use(express.json());

app.get('/users',  (req, res) => {
    console.log(arrayUser);
    res.send(arrayUser);
});

app.post('/users',(req, res) => {
    let users = {
        name: req.body.name, email: req.body.email, password: req.body.password, address: req.body.address
    }
    arrayUser.push(users);
    res.json(arrayUser)
});

app.post('/users/login', (req, res) => {
    
});


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//app.listen(2000, () => {
//    console.log('API port 2000...');
//});

app.listen(config.port, function () {
    console.log(`API port ${config.port} on`);
});