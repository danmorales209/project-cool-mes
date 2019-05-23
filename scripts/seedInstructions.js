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

const instructionSeed = [
  {
    name: "Mix dry ingredients",
    directions:
      "Place all dry ingredient in bowl; mix with whisk until thoroughly combined.",
    inventory: [
      "5ce3572393924e4978e3f196",
      "5ce3572393924e4978e3f199",
      "5ce3572393924e4978e3f19b"
    ],
    equipment: ["5ce3571794248168d016c8f5", "5ce3571794248168d016c8f7"],
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
