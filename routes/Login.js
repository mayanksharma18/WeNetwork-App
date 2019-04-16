var express = require('express');
var router = express.Router();
var db=require('../models')



router.get('/login',(req,res)=>{
res.render('Login')
})


module.exports = router;
