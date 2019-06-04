const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    product: {
      type: Schema.ObjectId,
      ref: "Recipe",
      required: true
    },

    productName: {
      type: String
    },

    status: {
      type: String,
      default: "New", //In Progress, Completed
      required: true
    },

    priority: {
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

    currentStep: {
      type: Number,
      default : 0
    },

    dueDate: String,

    qtyNeeded:
    {
      type: Number,
      default: 1
    }
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
