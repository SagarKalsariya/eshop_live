const  User  = require("../models/user");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = new User({
    
    // id: req.body.id,
    name: req.body.name,
    email:req.body.email,
    passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
    street: req.body.street,
    apartment: req.body.apartment,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
  });
  user = await user.save();

  if (!user) return res.status(400).send("the user cannot be created!");

  res.send(user);
});

const jwt = require("jsonwebtoken");
const { raw } = require("express");

router.post("/login", async (req, res) => {
const user = await user.findOne({ email : raweq.body.email });
const secret = process.env.secret;

if(!user) {
             return res.status(400).send(" the user not found ");
          }
 if(user && bcrypt.compareSync(req.body.passwordHash , user.passwordHash)){
  const token = jwt.sign({
           userId : user.id,
           isAdmin : user.isAdmin,
  });
}

 
});






router.get(`/:id`, async (req, res) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    res.status(500).json({ message:"The user with given id was not found" });
  }
  res.status(200).send(user);
});

router.put(`/:id`, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id,
    {
      name: req.body.name,
      email:req.body.email,
      // passwordHash: bcrypt.hashSync(req.body.password, 10),
      street: req.body.street,
      apartment: req.body.apartment,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
    },
    {new:true}
  );
  if (!user) {
    res.status(500).json({ message:"The user cant be created" });
  }
  res.status(200).send(user);
});

router.delete(`/:id`, async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) {
    res.status(500).json({ message:"The user cant be deleted" });
  }
  res.status(200).send(user);
});


router.get(`/`, async (req, res) => {
  const userList = await User.find();

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

module.exports = router;






// const  User  = require("../models/user");
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const router = express.Router();

// router.post("/", async (req, res) => {
//   let user = new User({
//     id: req.body.id,
//     name: req.body.name,
//     email:req.body.email,
//     passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
//     street: req.body.street,
//     apartment: req.body.apartment,
//     city: req.body.city,
//     zip: req.body.zip,
//     country: req.body.country,
//     phone: req.body.phone,
//     isAdmin: req.body.isAdmin,
//   });
//   user = await user.save();

//   if (!user) return res.status(400).send("the user cannot be created!");

//   res.send(user);
// });

// router.get(`/:id`, async (req, res) => {
//   const user = await User.findById(req.params.id);
  
//   if (!user) {
//     res.status(500).json({ message:"The user with given id was not found" });
//   }
//   res.status(200).send(user);
// });

// router.put(`/:id`, async (req, res) => {
//   const user = await User.findByIdAndUpdate(req.params.id,
//     {
//       name: req.body.name,
//       email:req.body.email,
//       passwordHash: bcrypt.hashSync(req.body.password, 10),
//       street: req.body.street,
//       apartment: req.body.apartment,
//       city: req.body.city,
//       zip: req.body.zip,
//       country: req.body.country,
//       phone: req.body.phone,
//       isAdmin: req.body.isAdmin,
//     },
//     {new:true}
//   );
//   if (!user) {
//     res.status(500).json({ message:"The user cant be created" });
//   }
//   res.status(200).send(user);
// });

// router.delete(`/:id`, async (req, res) => {
//   const user = await User.findByIdAndRemove(req.params.id);
//   if (!user) {
//     res.status(500).json({ message:"The user cant be deleted" });
//   }
//   res.status(200).send(user);
// });


// // router.get(`/`, async (req, res) => {
// //   const userList = await User.find();

// //   if (!userList) {
// //     res.status(500).json({ success: false });
// //   }
// //   res.send(userList);
// // });

// module.exports = router;



// const  User  = require("../models/user");
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const router = express.Router();

// router.post("/", async (req, res) => {
//   let user = new User({
//     // id: req.body.id,
//     name: req.body.name,
//     email:req.body.email,
//     passwordHash: bcrypt.hashSync(req.body.password, 10),
//     street: req.body.street,
//     apartment: req.body.apartment,
//     city: req.body.city,
//     zip: req.body.zip,
//     country: req.body.country,
//     phone: req.body.phone,
//     isAdmin: req.body.isAdmin,
//   });
//   user = await user.save();

//   if (!user) return res.status(400).send("the user cannot be created!");

//   res.send(user);
// });

// router.get(`/`, async (req, res) => {
//   const userList = await User.find();

//   if (!userList) {
//     res.status(500).json({ success: false });
//   }
//   res.send(userList);
// });

// module.exports = router;
