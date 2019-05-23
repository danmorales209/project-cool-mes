const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructionsSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  directions: {
    type: String,
    required: true
  },

  inventory: [
    {
      type: Schema.ObjectId,
      ref: "Inventory"
    }
  ],

  equipment: [
    {
      type: Schema.ObjectId,
      ref: "Equipment"
    }
  ],
  duration: {
    type: Number,
    required: true
  }
});

const Instructions = mongoose.model("Instructions", instructionsSchema);

module.exports = Instructions;
