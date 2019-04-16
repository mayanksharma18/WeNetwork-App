const mongoose = require('mongoose');

var Schema=mongoose.Schema;

var form=new Schema({
name:String,
role:String,
age:Number,
wanna:String,
atAge:Number
})

var register=new Schema({
    userName:String,
    email:String,
    password:String
})

var Form=mongoose.model('Form',form);
var Register=mongoose.model('Register',register)

module.exports=Form;
module.exports=Register;