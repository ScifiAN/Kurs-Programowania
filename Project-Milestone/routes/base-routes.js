const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    res.redirect('/products');
});

router.get('/401', function(req, res){
    res.status(401).render('401');
})

router.get('/403', function(req, res){
    res.status(403).render('403');
})

module.exports = router;