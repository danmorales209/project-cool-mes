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
    product: "5ce8b21df465f242a42678c3"
  },

  {
    customer: [
      {
        name: "Joe Jones",
        address: "45 Caroline Blvd.",
        city: "Sacramento",
        state: "California",
        zip: 95824
      }
    ]
  },
  {
    dueDate: 2019 - 06 - 11
  },
  {
    qtyNeeded: 1
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
