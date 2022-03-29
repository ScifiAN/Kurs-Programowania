const express = require('express');

const authController = require('../controllers/auth-controller');

const router = express.Router();

router.get('/signup', authController.getSignUp);

router.post('/signup', authController.signup);

router.get('/login', authController.getLogIn);

router.post('/login', authController.login);

router.post('/logout', authController.logOut);

module.exports = router;