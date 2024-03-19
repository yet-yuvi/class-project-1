const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String,},
    price: {type: String, required: true},
    quantity: {type: Number, default: 0 }
    
},{timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;