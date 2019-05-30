const db = require("../models");
const mongoose = require("mongoose")

module.exports = {
  // Find all based upon query, and return sorted based upon status
  findAll: function (req, res) {

    db.Order.find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Order.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Order.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Order.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Order.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  check: function (req, res) {
    let recipeInv = {};
    let recipeEquip = [];

    db.Recipe.findById(req.body.product)
      .then(response => {

        // Loop over steps
        response.steps.forEach(step => {

          // Loop over stepInventory
          step.stepInventory.forEach(inventoryItem => {

            let name = inventoryItem.inventory;

            
            // Key-value pair exists in recipe inventory
            if (recipeInv.hasOwnProperty(name)) {
              recipeInv[name] += inventoryItem.quantity;
            }

            // Key-value pair does not exist in recipe inventory
            else {
              recipeInv[name] =  inventoryItem.quantity;
            }
          });

          // Loop over equipment
          step.equipmentType.forEach(equipmentItem => {
            recipeEquip.push(equipmentItem)
          });
        });

        let inventoryIDs = Object.keys(recipeInv).map(e => new mongoose.Types.ObjectId(e));

        console.log(inventoryIDs)

        db.Inventory.find(inventoryIDs)
        .then( resp => res.json(resp));
       
      })
  }
};
