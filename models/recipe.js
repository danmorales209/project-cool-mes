const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String
  },

  description: {
    type: String
  },

  steps: [
    {
      directions: {
        type: String,
        required: true
      },

      stepInventory: [
        {
          inventory: {
            type: Schema.ObjectId,
            ref: "Inventory"
          },
          quantity: Number
        }
      ],

      equipmentType: [
        {
          type: Schema.ObjectId,
          ref: "Equipment"
        },
      ],
      duration: {
        type: Number,
        required: true
      }
    }
  ],

  yield: Number
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
