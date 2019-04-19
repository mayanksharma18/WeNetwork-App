const mongoose = require('mongoose');

var Schema=mongoose.Schema;
var register=new Schema({
    username:{
    type:String,
    required:true
    },
    email:{
    type:String,
    required:true
    },
    password:{
    type:String,
    required:true
}
}
)


var Register=mongoose.model('Register',register)

module.exports=Register;
