const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/curd', {useNewUrlParser: true});



module.exports.Form=require('./form')
module.exports.Register=require('./register');