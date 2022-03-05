const express = require('express');

const authControllers = require('../controllers/auth-controller');

const router = express.Router();

router.get('/signup', authControllers.getSignUp);

router.get('/login', authControllers.getLogIn);

router.post('/signup', authControllers.signup);

router.post('/login', authControllers.logIn);

router.post('/logout', authControllers.logOut);

router.get('/401', authControllers.get401);

module.exports = router;