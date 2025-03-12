const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "productType", // This allows you to reference different product types
  },
  quantity: { type: Number, default: 1, min: 1 }, // Ensure quantity is at least 1
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User ",
    required: true,
  },
  products: [productSchema], // Use a single array for all products
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
