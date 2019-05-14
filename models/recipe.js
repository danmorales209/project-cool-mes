const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String
  },
  steps: [
    {
      type: Schema.ObjectId,
      ref: "Recipe"
    }
  ],
  requiredInventory: [
    {
      type: Schema.ObjectId,
      ref: "Inventory"
    }
  ],
  requiredEquipment: [
    {
      type: Schema.ObjectId,
      ref: "Equpiment"
    }
  ]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
