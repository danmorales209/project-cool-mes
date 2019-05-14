const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  equipmentType: {
    type: String,
    required: true
  }
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
