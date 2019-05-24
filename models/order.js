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
  Customer: [
    {
      name: String,
      Address: String,
      City: String,
      State: String,
      Zip: Number
    }
  ],
  dueDate: Date,
  qtyNeeded: Number
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
