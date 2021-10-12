const express = require('express');
const router = express.Router();

const Controller = require('../controllers/payMethods');
const ContrillerUsers = require('../controllers/users');

//Lista de metodos de pagos // List of paymethod
router.get('/paymethod/:id', ContrillerUsers.checkToken, ContrillerUsers.isAdmin, Controller.list);

//Crear metodo de pago // Create payMeth
router.post('/paymethod/:id', Controller.create);

//Actualizar metodo de pago // Update payMeth
router.put('/paymethod/:id/:idPaymethod', Controller.update);

//Borrar metodo de pago // Delete paymethod
router.delete('/paymethod/:id/:idPaymethod', Controller.delete);

module.exports = router;