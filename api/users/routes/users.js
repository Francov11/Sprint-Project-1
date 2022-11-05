require('dotenv').config();
const express = require('express');
const router = express.Router();
const Controller = require('../controllers/users');
const Shared = require('../../shared/shared')

//List of users route
router.get('/list' ,Shared.isAuthenticated , Shared.isAdmin, Controller.findAll)

module.exports = router;