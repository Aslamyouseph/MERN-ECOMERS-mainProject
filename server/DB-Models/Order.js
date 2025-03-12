const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "productType", // Keep this if you have separate collections for each product category
  },
  quantity: { type: Number, default: 1, min: 1 },
});

const orderSchema = new Schema(
  {
    deliveryDetails: {
      mobile: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /^\d{10}$/.test(v);
          },
          message: (props) => `${props.value} is not a valid mobile number!`,
        },
      },
      address: { type: String, required: true },
      pincode: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /^\d{6}$/.test(v);
          },
          message: (props) => `${props.value} is not a valid pincode!`,
        },
      },
      place: { type: String, required: true },
      totalAmount: { type: Number, required: true },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Removed extra space
    },
    paymentMethod: {
      type: String,
      enum: ["cod", "online"],
      required: true,
    },
    status: {
      type: String,
      enum: ["placed", "pending", "shipped", "delivered"],
      required: true,
    },
    products: [productSchema], // Embedded product details
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
