const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product: [
    {
      type: Schema.ObjectId,
      ref: "Recipe"
    }
  ],
  inProgress: {
    type: Boolean,
    default: false
  },
  customer: {
    name: String,
    address: String,
    city: String,
    state: String,
    zip: Number
  },
  dueDate: Date,
  qtyNeeded: Number
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
