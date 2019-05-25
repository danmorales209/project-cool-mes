const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Equipment collection and adds the items below

// connect to heroku DB for seeding
// mongoose.connect(
//   "mongodb://production_seeds:Thisisourpassword123@ds349455.mlab.com:49455/heroku_sr0htsjk",
//   { useNewUrlParser: true }
// );

//connect to local DB for seeding
mongoose.connect("mongodb://localhost/mesData", { useNewUrlParser: true });

const orderSeed = [
  {
    name: "Order 0001A",
    recipe: "5ce369db2dc1352b103ba519"
  }
];

db.Order.remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
