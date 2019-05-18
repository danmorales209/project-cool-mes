const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mesData");

const inventorySeed = [
  {
    name: "clay",
    quantity: "500 lbs"
  },
  {
    name: "water",
    quantity: "1000 gallons"
  },
  {
    name: "sheet metal",
    quantity: "500 sq ft"
  },
  {
    name: "flour",
    quantity: "600 lbs"
  },
  {
    name: "salt",
    quantity: "200 lbs"
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
