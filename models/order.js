const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
<<<<<<< HEAD
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
=======
  product: [
>>>>>>> d0956b6727e967651e7bec63730d10135e897d74
    {
      type: Schema.ObjectId,
      ref: "Recipe"
    }
  ],
  inProgress: {
    type: Boolean,
    default: false
  },
  Customer: {
    name: String,
    Address: String,
    City: String,
    State: String,
    Zip: Number
  },
  dueDate: Date,
  qtyNeeded: Number
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
