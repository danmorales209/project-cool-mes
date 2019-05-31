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
    db.Order.findOneAndUpdate({ _id: req.params.id }, { $set: { "inProgress": req.body.progress, "priority": req.body.priority } })
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
    let recipeEquip = {};
    let enoughInventory = false;
    let enoughEquipment = false;

    db.Recipe.findById(req.body.product)
      .then(response => {

        // Loop over steps
        response.steps.forEach(step => {

          // Loop over stepInventory
          step.stepInventory.forEach(inventoryItem => {

            let invName = inventoryItem.inventory;


            // Key-value pair exists in recipe inventory
            if (recipeInv.hasOwnProperty(invName)) {
              recipeInv[invName] += inventoryItem.quantity;
            }

            // Key-value pair does not exist in recipe inventory
            else {
              recipeInv[invName] = inventoryItem.quantity;
            }
          });
          // End loop over stepInventory

          // Loop over equipment
          step.equipmentType.forEach(equipmentItem => {
            
            let equipName = equipmentItem;
            
            if (recipeEquip.hasOwnProperty(equipName)) {
              recipeEquip[equipName]++; 
            }
            else {
              recipeEquip[equipName] = 1;
            }
          });
          // End loop over equipment

        });
        // End Loop over steps

        console.log(recipeEquip);

        let inventoryIDs = Object.keys(recipeInv).map(e => new mongoose.Types.ObjectId(e));
        let invQuantity = Object.values(recipeInv);

        db.Inventory.find({
          _id: {
            $in: inventoryIDs
          }
        })
          .then(resp => {

            let inventoryDifference = resp
              .map((e, index) => e.quantity - invQuantity[index])
              .filter(x => x < 0)
              .length;

            if (inventoryDifference != 0) {
              console.log("Not enough inventory");

            }
            else {
              enoughInventory = true;
            }
          });

      });

      //let equipmentIDs = recipeEquip.map(e => new mongoose.Types.ObjectId(e));

      /* db.Equipment.find({
        _id : {
          $in : 
        }
      }) */

  }
};
