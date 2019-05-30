const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inventory collection and adds the items below

// connect to heroku DB for seeding
mongoose.connect(
  "mongodb://production_seeds:Thisisourpassword123@ds349455.mlab.com:49455/heroku_sr0htsjk",
  { useNewUrlParser: true }
);

//connect to local DB for seeding
// mongoose.connect("mongodb://localhost/mesData", { useNewUrlParser: true });

const inventorySeed = [
  {
    name: "sugar",
    quantity: "500",
    unit: "lbs"
  },
  {
    name: "water",
    quantity: "1000",
    unit: "gallons"
  },
  {
    name: "butter",
    quantity: "80",
    unit: "lbs"
  },
  {
    name: "flour",
    quantity: "600",
    unit: "lbs"
  },
  {
    name: "eggs",
    quantity: "300",
    unit: "units"
  },
  {
    name: "salt",
    quantity: "250",
    unit: "lbs"
  },
  {
    name: "Cocoa powder",
    quantity: "400",
    unit: "lbs"
  },
  {
    name: "Confectioners sugar",
    quantity: "700",
    unit: "lbs"
  }
];

db.Inventory.remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
