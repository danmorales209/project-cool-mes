const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  units: { type: String, required: true }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
