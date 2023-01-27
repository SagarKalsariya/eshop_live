const  {Orderitems} = require("../models/orderitem");
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const orderitem = await Orderitems.find();
  
  if (!orderitem) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(orderitem);
});

router.post("/", async (req, res) => {
  let orderitem = new Orderitems({
    id: req.body.id,
    product: req.body.product,
    quantity: req.body.quantity,
  });
  orderitem = await orderitem.save();

  if (!orderitem) return res.status(400).send("the orderitem cannot be created!");

  res.send({msg:"Category has been added",data:orderitem});
});

module.exports = router;