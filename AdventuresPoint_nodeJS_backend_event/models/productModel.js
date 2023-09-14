const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    discount: Number
});

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;