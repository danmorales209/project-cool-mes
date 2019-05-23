const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Instructions collection and adds the items below

mongoose.connect(
    "mongodb://production_seeds:Thisisourpassword123@ds349455.mlab.com:49455/heroku_sr0htsjk",
    { useNewUrlParser: true }
);

const instructionsSeed = [
    {
        name: "Peanut Butter and Chocolate Sandwich",
        directions: "Medium Bowl",
        inventory: [{ObjectId:"5ce5f259a504c22c8ceca7a1"}],
        equipment: [{ObjectId:""}]
    },
    {
        name: "Peanut Butter and Jelly Sandwich",
        directions: "Medium Bowl",
        inventory: [{ObjectId:"5ce5f259a504c22c8ceca7a1"}],
        equipment: [{ObjectId:""}]
    }
];

db.Instructions.remove({})
    .then(() => db.Instructions.collection.insertMany(instructionsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
