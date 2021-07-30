const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//Importaciones
const { arrayUser } = require("./functions");


//Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Sprint Project 1',
            version: '1.0.2'
        }
    },
    apis: ['./src/app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use(express.json());

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Usuario
 *    description: Listado de usuarios
 *    responses:
 *       200: 
 *         Sucess
 *         description: Listado de usuarios
 */
app.get('/users', (req, res) => {
    console.log(arrayUser);
    res.send(arrayUser);
});

app.post('/users', (req, res) => {
    const users = {
        name: req.body.name, lastName: req.body.lastname, user: req.body.user
    }
    arrayUser.push(users);
    res.send(arrayUser)
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(2000, () => {
    console.log('API port 2000 listening...');
});
