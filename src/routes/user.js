const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.use('/login', userController.login);
router.use('/signup', userController.signup);
router.use('/', userController.index);

module.exports = router;
