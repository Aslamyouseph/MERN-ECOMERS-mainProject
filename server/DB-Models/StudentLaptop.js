const mongoose = require("mongoose");

const StudentLaptopSchema = new mongoose.Schema(
  {
    Laptop_title: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Laptop_title cannot be empty.",
      },
    },
    Laptop_description: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Laptop_description cannot be empty.",
      },
    },
    Laptop_Details: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Laptop_Details cannot be empty.",
      },
    },
    Laptop_keywords: {
      type: [String],
      required: true,
      set: (keywords) => keywords.map((kw) => kw.toLowerCase().trim()), // Convert to lowercase & trim
    },
    Laptop_image_small: {
      type: String,
      required: true,
      trim: true,
      match: /\.(jpg|jpeg|png)$/i, // Validate image file format
    },
    Laptop_image_large: {
      type: String,
      required: true,
      trim: true,
      match: /\.(jpg|jpeg|png)$/i,
    },
    Laptop_original_price: { type: Number, required: true, min: 0 }, // Prevent negative price
    Laptop_discount_price: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

const StudentLaptop = mongoose.model("StudentLaptop", StudentLaptopSchema);

module.exports = StudentLaptop;
