var express = require('express');
var router = express.Router();

var db=require('../models')
/* GET users listing. */
router.get('/',(req, res)=> {
  res.render('form');
})


router.post('/data',(req,res)=>{
  console.log(req.body)
  db.Form.create(req.body)
  .then((data)=>res.redirect('/'))
  .catch((err)=>res.send(err))
});


router.get('/search',(req,res)=>{
  res.render('search')
})

router.get('/results',(req,res)=>{
  var srch=req.query.search;  
  console.log(srch)
 db.Form.find({wanna:srch})
 .then((data)=>res.render('data',{data:data}))
 .catch((err)=>res.send(err))
})




module.exports = router;
