const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    
    orderitems: [{ type:mongoose.Schema.Types.ObjectId, ref: "orderItem" , required: true }],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    Country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true,default:"pending" },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user",required: true },
    dateOrdered: { type: Date, required: true,default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;





// {

// orderitems: [{
//                     "quantity" : 2,
//                     "products":product_id ,
// },
//          {
//                     "quantity" : 2,
//                     "products": product_id,
// }],

// "shippingAddress1": "surat",
// "shippingAddress2" : "surat",
// "city":     surat,
// "zip":      395010,
// "Country":  india,
// "phone":     98987472
// "use":    user_id
// }