const mongoose = require("mongoose");

// Defining the Return & Refund schema
const ReturnRefundSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, trim: true, maxlength: 100 },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10,15}$/, "Please enter a valid phone number"], // 10-15 digits
    },
    reason: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Creating the ReturnRefund model
const ReturnRefundModel = mongoose.model("ReturnRefund", ReturnRefundSchema);

module.exports = ReturnRefundModel;
