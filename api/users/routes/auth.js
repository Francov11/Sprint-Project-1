require('dotenv').config();
const express = require('express');
const router = express.Router();
const ControllerAuth = require('../controllers/auth');
const Middleware = require('../middlewares/middlewares')
const Shared = require('../../shared/shared')

//User register route 
router.post('/register', Middleware.charactersEmail, Middleware.validateUser, ControllerAuth.register)

//User Login route
router.post('/login' ,Middleware.validateLogin , ControllerAuth.login);// Shared.isSuspended,

module.exports = router;