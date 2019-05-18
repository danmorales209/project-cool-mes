const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inventory collection and adds the items below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mesData");

const inventorySeed = [
  {
    name: "clay",
    quantity: "500",
    unit: "lbs"
  },
  {
    name: "water",
    quantity: "1000",
    unit: "gallons"
  },
  {
    name: "sheet metal",
    quantity: "500",
    unit: "sq ft"
  },
  {
    name: "flour",
    quantity: "600",
    unit: "lbs"
  },
  {
    name: "salt",
    quantity: "200",
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
