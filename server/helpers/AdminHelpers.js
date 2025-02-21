const mongoose = require("mongoose");
const GamingLaptop = require("../DB-Models/GamingLaptop");

module.exports = {
  addProduct: async (product) => {
    try {
      // Validate required fields before saving
      if (
        !product.Laptop_title ||
        !product.Laptop_description ||
        !product.Laptop_original_price ||
        !product.Laptop_discount_price ||
        !product.Laptop_keywords
      ) {
        throw new Error("Missing required fields");
      }

      // Create a new product document
      const newProduct = new GamingLaptop(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
};
