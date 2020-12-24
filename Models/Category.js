const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
categoryName:{
    type:String,
    unique:true,
    required:true,
    minlength:[3,'{PATH} alanı en az {MINLENGTH} karakter olmalı'],
    maxlength:[15,'{PATH} alanı en fazla {MAXLENGTH} karakter olmalı'],
},
createdAt:{
    type:Date,
    default:Date.now
}
})
module.exports = mongoose.model('category',CategorySchema);