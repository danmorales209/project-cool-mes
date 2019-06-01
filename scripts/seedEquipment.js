const mongoose = require("mongoose");
const db = require("../models");

module.exports = equipmentSeed = [
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