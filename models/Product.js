const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema = new Schema ({
    rentAmount  : {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    company:{
        type:String, 
        required:true
    },
    suitableFor:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    other:{
        type:String,
        required:false
    },
    rentierName:{
        type:String,
        required:true
    },
    rentierEmail:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);