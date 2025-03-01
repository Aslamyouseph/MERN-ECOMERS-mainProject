const mongoose = require("mongoose");

const BusinessLaptopSchema = new mongoose.Schema(
  {
    Laptop_title: {
      type: String,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Laptop_title cannot be empty.",
      },
    },
    Laptop_description: {
      type: String,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Laptop_description cannot be empty.",
      },
    },
    Laptop_Details: {
      type: String,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Laptop_Details cannot be empty.",
      },
    },
    Laptop_keywords: {
      type: [String],
      set: (keywords) => keywords.map((kw) => kw.toLowerCase().trim()), // Convert to lowercase & trim
    },
    Laptop_image_small: {
      type: String,
      trim: true,
      match: /\.(jpg|jpeg|png|webp)$/i, // Validate image file format
    },
    Laptop_image_large: {
      type: String,
      trim: true,
      match: /\.(jpg|jpeg|png|webp)$/i,
    },
    Laptop_original_price: { type: Number, min: 0 }, // Prevent negative price
    Laptop_discount_price: { type: Number, min: 0 },
    //laptop reviews
    Laptop_Review: [
      {
        name: String, // Store the name of the reviewer
        review: String, // Store the review text
        date: { type: Date, default: Date.now }, // Store review date
      },
    ],
  },
  { timestamps: true }
);

const BusinessLaptop = mongoose.model("BusinessLaptop", BusinessLaptopSchema);

module.exports = BusinessLaptop;
