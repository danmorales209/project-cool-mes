const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  inProgress: { // status
    type: Boolean,
    default: false
  },
  recipe: [
    {
      type: Schema.ObjectId,
      ref: "Recipe"
    }
  ]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
