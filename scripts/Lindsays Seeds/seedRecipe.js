const mongoose = require("mongoose");
const db = require("../models");

// This file empties the recipe collection and adds the items below

mongoose.connect(
  "mongodb://recipeion_seeds:Thisisourpassword123@ds349455.mlab.com:49455/heroku_sr0htsjk",
  { useNewUrlParser: true }
);

const recipeSeed = [
  {
    name: "PB&J",
    description: "Peanut Butter and Jelly Sandwich Recipe",
    steps: [
      {
        type: [{ObjectId:""}],
        ref: "Instructions"
      }
    ]
  },
];

db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
