const mongoose = require("mongoose");
const db = require("../models");

module.exports = seedRecipe = (path) => {

  // This file empties the Equipment collection and adds the items below

  // connect to heroku DB for seeding
  mongoose.connect(
    path,
    { useNewUrlParser: true }
  );

  //connect to local DB for seeding
  // mongoose.connect("mongodb://localhost/mesData", { useNewUrlParser: true });

  const recipeSeed = [
    {
      name: "Birthday Cake",

      description:
        "A yellow cake with chocolate buttercream frosting and colorful sprinkles",

      steps: [
        {
          directions:
            "Place all dry ingredient in bowl; mix with whisk until thoroughly combined.",
          stepInventory: [
            { inventory: "5cf08936570f5a42f8c98459", quantity: 2 },
            { inventory: "5cf08936570f5a42f8c9845c", quantity: 1 },
            { inventory: "5cf08936570f5a42f8c9845e", quantity: 3 }
          ],
          equipmentType: ["5cf08923fa6c5d1f3c193750", "5cf08923fa6c5d1f3c193751"],
          duration: 0.083
        },

        {
          directions:
            "Place all wet ingredient in bowl; mix with whisk until thoroughly combined.",
          stepInventory: [
            { inventory: "5cf08936570f5a42f8c9845a", quantity: 1 },
            { inventory: "5cf08936570f5a42f8c9845b", quantity: 2 },
            { inventory: "5cf08936570f5a42f8c9845d", quantity: 3 }
          ],
          equipmentType: ["5cf08923fa6c5d1f3c193750", "5cf08923fa6c5d1f3c193751"],
          duration: 0.083
        }
      ]
    }
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
}