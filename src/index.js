const express = require('express')
const app = express()

//Configuracion // Config 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Acamica API',
        version: '1.0.0'
      }
    },
    apis: ['./swagger/swagger.js'],
  };
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json())
const users = require('./routes/users');
app.use('/users', users);

const products = require('./routes/products');
app.use('/products', products);

const orders = require('./routes/orders');
app.use('/orders', orders);

app.use('/Sprint-Project-1', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(4000)