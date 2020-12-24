const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
username:{
    type:String,
    unique:true,
    required:true,
    minlength:[6,'{PATH} alanı en az {MINLENGTH} karakter olmalı'],
    maxlength:[15,'{PATH} alanı en fazla {MAXLENGTH} karakter olmalı'],
},
password:{
    type:String,
    required:true,
    minlength:[6,'{PATH} alanı en az {MINLENGTH} karakter olmalı'],
    
},
name:{
    type:String,
    required:true,
    minlength:[2,'{PATH} alanı en az {MINLENGTH} karakter olmalı'],
    maxlength:[15,'{PATH} alanı en fazla {MAXLENGTH} karakter olmalı'],
},
surname:{
    type:String,
    required:true,
    minlength:[2,'{PATH} alanı en az {MINLENGTH} karakter olmalı'],
    maxlength:[15,'{PATH} alanı en fazla {MAXLENGTH} karakter olmalı'],
},
birthyear:{
    type:Number,
    required:true,
    min:1900,
    max:2010
},
createdAt:{
    type:Date,
    default:Date.now
},
})
module.exports = mongoose.model('user',UserSchema);