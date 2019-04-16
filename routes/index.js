var express = require('express');
var router = express.Router();
var db=require('../models')
/* GET users listing. */
router.get('/',(req, res)=> {
  res.render('form');
})

router.post('/data',(req,res)=>{
db.Form.create(req.body);
res.redirect('/')
})

router.get('/search',(req,res)=>{
  res.render('search')
})

router.get('/results/',(req,res)=>{
 const query=req.search.
 console.log(query)
 db.Form.find({wanna:query})
.then((data)=>res.send(data))
.catch((err)=>res.send(err))
})




module.exports = router;
