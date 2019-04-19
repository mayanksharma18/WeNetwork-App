const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

var Schema=mongoose.Schema;
var register=new Schema({
    username:String,
    email:String,
    password:String
})

register.plugin(passportLocalMongoose);

var Register=mongoose.model('Register',register)

module.exports=Register;
