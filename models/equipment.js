const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  equipmentType: {
    type: String,
    required: true
  },
  equipment: [
    {
      name: String,
      status: {
        type: String,
        default: "Available"
      }
    }
  ]
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
