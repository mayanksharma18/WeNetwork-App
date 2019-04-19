var express = require('express');
var router = express.Router();
var db=require('../models')
var passport = require('passport')



router.get('/',(req,res)=>{
res.render('Login')
})

router.post("/login", passport.authenticate("local", 
   {
       successRedirect: "/",
       failureRedirect: "/user/login",
      
   }), function(req, res){
});


module.exports = router;
