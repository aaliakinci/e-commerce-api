const mongoose = require('mongoose');
const { schema } = require('./User');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
productName:{
    type:String,
    unique:true,
    required:true,
    minlength:[2,'{PATH} alanı en az {MINLENGTH} karakter olmalı'],
    maxlength:[15,'{PATH} alanı en fazla {MAXLENGTH} karakter olmalı'],
},
unitPrice:{
    type:Number,
    required:true,
},
unitStock:{
    type:Number,
    required:true,
},
favs:Number,
category_id:Schema.Types.ObjectId,
createdAt:{
    type:Date,
    default:Date.now
},
})

module.exports = mongoose.model('product',ProductSchema);