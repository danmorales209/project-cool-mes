const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Order collection and adds the items below

mongoose.connect(
    "mongodb://production_seeds:Thisisourpassword123@ds349455.mlab.com:49455/heroku_sr0htsjk",
    { useNewUrlParser: true }
);
// are we putting the entire recipe in the order? How is that
// information associated with the order?
const orderSeed = [
    {
        name: {},
        inProgress: false,
        recipe: [{
            type: Schema.ObjectId,
            ref: "Recipe"
        }]
    },
    {
        name: {},
        inProgress: false,
        recipe: [{
            type: Schema.ObjectId,
            ref: "Recipe"
        }]
    },
    {
        name: {},
        inProgress: false,
        recipe: [{
            type: Schema.ObjectId,
            ref: "Recipe"
        }]
    }
];

db.Order.remove({})
    .then(() => db.Order.collection.insertMany(orderSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
