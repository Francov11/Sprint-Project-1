const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const config = require('../config')

const app = express();

app.use(express.json());
   
var users = require('./routes/users');
app.use('/users', users);

//var products= require('./routes/products');
//app.use('/products', products);

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

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//router.listen(2000, () => {
//    console.log('API port 2000...');
//});

app.listen(config.port, function () {
    console.log(`API port ${config.port} on...`);
});