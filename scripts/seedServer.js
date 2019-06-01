const path = "mongodb://production_seeds:Thisisourpassword123@ds349455.mlab.com:49455/heroku_sr0htsjk";
const db = require("../models");
const mongoose = require("mongoose");

const orderSeeds = require("./seedOrder")
const recipeSeeds = require("./seedRecipe")
const inventorySeeds = require("./seedInventory")
const equipmentSeeds = require("./seedEquipment")

mongoose.connect(
    path,
    { useNewUrlParser: true }
);

var inventory, equipment, recipe;


db.Inventory.deleteMany({})
    .then(() => {
        db.Inventory.collection.insertMany(inventorySeeds)
            .then(response => {
                inventory = response.ops;
                console.log(response.result.n + ' inventory records created');

            }).then(() => {
                db.Equipment.deleteMany({})

                    .then(() => {

                        db.Equipment.collection.insertMany(equipmentSeeds)
                            .then(response => {
                                equipment = response.ops;
                                console.log(response.result.n + ' equipmqnt records created');
                            })
                            .then(() => {
                                db.Recipe.deleteMany({})
                                    .then(() => {
                                        db.Recipe.collection.insertMany(recipeSeeds(inventory.map(inv => inv._id), equipment.map(eqp => eqp._id)))
                                            .then(response => {
                                                recipe = response.ops
                                                console.log(response.result.n + ' recipe records created');
                                            })
                                            .then(() => {
                                                db.Order.deleteMany({})
                                                    .then(() => {
                                                        db.Order.collection.insertMany(orderSeeds(recipe.map(rec => rec._id)))
                                                            .then(response => {
                                                                console.log(response.result.n + ' order records created');
                                                            })
                                                            .then(() => {
                                                                process.exit(0);
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
    });