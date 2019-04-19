var express = require('express');
var router = express.Router();
var db=require('../models')
const passport = require('passport')
// const passport = require('passport-local-mongoose')



router.get('/',(req,res)=>{
    res.render('Register')
 })


 router.post('/userdata', function(req, res, next) {
    console.log('registering user');
    console.log(req.body)
    
    // const newUser = new Register ({username:req.body.username})
    db.Register.register({username: req.body.username, email: req.body.email},req.body.password, function(err,user) {
      if (err) {
        console.log('error while user register!', err);
        return next(err);
      } 
      passport.authenticate("local")(req, res, function(){
        console.log('user registered!');
        res.redirect("/"); 
     });
  })
})  





module.exports = router;