require('dotenv').config();

const express = require('express')
const app = express()
const sequelize = require('./database/mysql');
const {usersModel} = require('./models/users');
const {productsModels} = require('./models/products')

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = require('./routes/users');
app.use('/', users);

const products = require('./routes/products');
app.use('/', products);

const orders = require('./routes/orders');
app.use('/', orders);

app.use('/Sprint-Project-1', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Escuchando puerto ${process.env.EXPRESS_PORT}`)
});