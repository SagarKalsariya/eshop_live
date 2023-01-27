const {Order} = require('../models/order');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const orderList = await Order.find();

    if(!orderList) {
        res.status(500).json({success: false})
    } 
    res.send(orderList);
});

router.post("/", async (req, res) => {
    let order = new Order({
      id: req.body.id,
      orderitems: req.body.orderitems,
      shippingAddress1: req.body.shippingAddress1,
      shippingAddress2: req.body.shippingAddress2,
      city: req.body.city,
      zip: req.body.zip,
      Country: req.body.Country,
      phone: req.body.phone,
      status: req.body.status,
      totalPrice: req.body.totalPrice,
      user: req.body.user,
      dateOrdered: req.body.dateOrdered,
    });
    order = await order.save();
  
    if (!order) return res.status(400).send("the category cannot be created!");
  
    res.send({msg:"Category has been added",data:order});
  });

module.exports =router;