const mongoose = require('mongoose');

var Schema=mongoose.Schema;

var form=new Schema({
name:String,
role:String,
age:Number,
wanna:String,
atAge:Number
})

var Form=mongoose.model('Form',form);


module.exports=Form;