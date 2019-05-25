const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Equipment collection and adds the items below

// connect to heroku DB for seeding
mongoose.connect(
  "mongodb://production_seeds:Thisisourpassword123@ds349455.mlab.com:49455/heroku_sr0htsjk",
  { useNewUrlParser: true }
);

//connect to local DB for seeding
// mongoose.connect("mongodb://localhost/mesData", { useNewUrlParser: true });

const instructionSeed = [
  {
    name: "Mix dry ingredients",
    directions:
      "Place all dry ingredient in bowl; mix with whisk until thoroughly combined.",
    stepInventory: [
      { inventory: "5ce8c9524ed9330d483950a7", quantity: 1 },
      { inventory: "5ce8c9524ed9330d483950aa", quantity: 1 },
      { inventory: "5ce8c9524ed9330d483950ac", quantity: 1 }
    ],
    equipmentType: ["5ce8c904b676f120142571fe", "5ce8c904b676f120142571ff"],
    duration: 0.083
  }
];

db.Instructions.remove({})
  .then(() => db.Instructions.collection.insertMany(instructionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
