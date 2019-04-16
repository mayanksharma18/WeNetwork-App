var express = require('express');
var router = express.Router();
var db=require('../models')


router.get('/register',(req,res)=>{
    res.render('Register')
 })

router.post('/register',(req,res)=>{
   console.log(req.body) ;
 db.Register.create(req.body);
 res.redirect("/");
})


module.exports = router;