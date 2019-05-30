const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeInventorySchema = new Schema(
  {
    order: {
      type: Schema.ObjectId,
      Ref: "Order",
      required: true
    },
    items: [
      {
        id : {
          type : Schema.ObjectId,
          ref: "Inventory"
        },
        quantity : Number
      }
    ]
  }
);

const RecipeInventory = mongoose.model("RecipeInventory", recipeInventorySchema);

module.exports = RecipeInventory;
