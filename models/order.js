const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    product: {
      type: Schema.ObjectId,
      ref: "Recipe"
    },
    inProgress: {
      type: String,
      default: "New" //In Progress, Completed
    },
    priority : {
      type: Number,
      required: true,
      default: 0
    },
    customer: {
      name: String,
      address: String,
      city: String,
      state: String,
      zip: Number
    },
    dueDate: String,
    qtyNeeded: Number
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
