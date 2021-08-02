const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//Importaciones
const { arrayUser } = require("./users");
//const { arrayProducts } = require("./products");


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

app.get('/users', (req, res) => {
    console.log(arrayUser);
    res.send(arrayUser);
});

app.post('/users', (req, res) => {
    let users = {
        name: req.body.name, email: req.body.email, password: req.body.password, address: req.body.address
    }
    arrayUser.push(users);
    res.json(arrayUser)
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(2000, () => {
    console.log('API port 2000 listening...');
});
