const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Equipment collection and adds the items below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mesData");

const instrucionSeed = [
  {
    name: "Medium Bowl 1",
    equipmentType: "Medium Bowl"
  },
  {
    name: "Medium Bowl 2",
    equipmentType: "Medium Bowl"
  },
  {
    name: "Whisk 1",
    equipmentType: "Whisk"
  },
  {
    name: "Whisk 2",
    equipmentType: "whisk"
  },
  {
    name: "Oven 1",
    equipmentType: "Oven"
  },
  {
    name: "Oven 2",
    equipmentType: "Oven"
  },
  {
    name: "Blender 1",
    equipmentType: "Blender"
  },
  {
    name: "Blender 2",
    equipmentType: "Blender"
  },
  {
    name: "Round Cake Pan 1",
    equipmentType: "Round Cake Pan"
  },
  {
    name: "Round Cske Pan 2",
    equipmentType: "Round Cake Pan"
  },
  {
    name: "Cooling Rack 1",
    equipmentType: "Cooling Rack"
  },
  {
    name: "Cooling Rack 2",
    equipmentType: "Cooling Rack"
  }
];

db.Inventory.remove({})
  .then(() => db.Inventory.collection.insertMany(instructionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
