const express=require('express');
const app=express();
const ejs=require('ejs')
const route=require('./routes/routes.js')

app.set('view engine','ejs');
app.set('views','./views');



app.get("/",(req,res)=>res.render('view'))



app.listen(7000,()=>console.log("Server is up"))