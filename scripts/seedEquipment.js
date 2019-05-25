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

const equipmentSeed = [
  {
    equipmentType: "Medium Bowl",
    equipment: [
      {
        name: "Medium Bowl 1",
        status: "Available"
      },

      {
        name: "Medium Bowl 2",
        status: "Available"
      }
    ]
  },
  {
    equipmentType: "Whisk",
    equipment: [
      {
        name: "Whisk 1",
        status: "Available"
      },

      {
        name: "Whisk 2",
        status: "Available"
      }
    ]
  },
  {
    equipmentType: "Oven",
    equipment: [
      {
        name: "Oven 1",
        status: "Available"
      },

      {
        name: "Oven 2",
        status: "Available"
      }
    ]
  },
  {
    equipmentType: "Spoon",
    equipment: [
      {
        name: "Spoon 1",
        status: "Available"
      },

      {
        name: "Spoon 2",
        status: "Available"
      }
    ]
  }
];

db.Equipment.remove({})
  .then(() => db.Equipment.collection.insertMany(equipmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
