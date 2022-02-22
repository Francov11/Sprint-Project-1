require('dotenv').config();
const express = require('express');
//const jwt = require('jsonwebtoken');
const router = express.Router();


const Shared = require('../../shared/shared')
const controllers = require ('../controllers/addressBook')

router.get('/', Shared.isAuthenticated, controllers.listAddressBook);

router.post('/', Shared.isAuthenticated, controllers.addAddress);

router.delete('/:shippingAddress', Shared.isAuthenticated, controllers.deleteAddress)

module.exports = router;