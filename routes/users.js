const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');
const RegisterValidator = require('../validates/RegisterValidator');

router.get('/new', usersController.new);
router.post('/create', RegisterValidator, usersController.create);
module.exports = router;
