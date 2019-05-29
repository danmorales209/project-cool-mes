const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    product: {
      type: Schema.ObjectId,
      ref: "Recipe"
<<<<<<< HEAD
    }
  ],
  status: {
    type: String,
    default: "New" //In Progress, Completed
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
=======
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
>>>>>>> 57de3e7018950dadc7133b08a39f06df16a39be5

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
