const mongoose = require('mongoose');

const orderitemsSchema = new mongoose.Schema({
    
    product: { type: mongoose.Schema.Types.ObjectId,ref:"product" },
    quantity: { type: Number, required: true }
});

const Orderitems = mongoose.model('Orderitems', orderitemsSchema);

module.exports = Orderitems;