const path    = require('path');
const express = require('express');
const router  = express.Router();
const rootDir = require('../util/path');

router.get('/addProduct',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/addProduct',(req,res,next) => {
    console.log(req.body);
    console.log('In the second middleware!');
    res.redirect('/');
});

module.exports = router;

