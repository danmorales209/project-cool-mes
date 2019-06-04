const db = require("../models");
const mongoose = require("mongoose");

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
    db.Order.findOneAndUpdate({ _id: req.params.id }, { $set: { "status": req.body.progress, "priority": req.body.priority } })
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
              console.log("Enough inventory");
            }
          });

      }).then(() => {

        let equipmentIDs = Object.keys(recipeEquip).map(e => new mongoose.Types.ObjectId(e));
        let equipQuantity = Object.values(recipeEquip);

        db.Equipment.find({
          _id: {
            $in: equipmentIDs
          }
        }).then(response => {

          let equipmentDifference = response
            .map((el, index) => el.equipment.length - equipQuantity[index])
            .filter(num => num < 0)
            .length;

          if (equipmentDifference !== 0) {
            console.log("Not enough equipment");
          }
          else {
            enoughEquipment = true;
            console.log("Enough equipment");
          }
        }).then(() => {

          if (enoughEquipment && enoughInventory) {

            db.RecipeInventory.create({
              order: req.body.order,
              items: Object.entries(recipeInv).map(e => {
                return {
                  _id: e[0],
                  quantity: e[1]
                }
              })
            }).then(data => {

              console.log(data)

              Promise.all(data.items.map(e => {
                db.Inventory.updateOne({ _id: e._id }, {
                  $inc: {
                    quantity: Number(e.quantity * -1)
                  }
                }).then((res) => console.log("Woohoo ", res))
                  .catch(err => console.error(err))
              })
              )


            });

          }
          else {
            res.json({ check: "fail" })
          }

        })

      })

  }
};
