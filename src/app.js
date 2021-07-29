//Inicializacion
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//Importaciones
const {user} = require('./functions');

//Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Autores y Libros API',
            version: '1.0.1'
        }
    },
    apis: ['./src/app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
app.use(express.json());


//Rutas

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Usuario
 *    description: Listado de usuarios
 *    responses:
 *       200:
 *         description: Listado de usuarios
 */
app.get('/users', (req, res) =>{
    console.log(users);
    res.send(users);
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(5000, () => {
    console.log('API port 5000 listening...');
});
