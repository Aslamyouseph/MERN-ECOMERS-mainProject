const mongoose = require("mongoose");
const GamingLaptop = require("../DB-Models/GamingLaptop");
const BusinessLaptop = require("../DB-Models/BusinessLaptop");
const BudgetLaptop = require("../DB-Models/BudgetLaptops");
const StudentLaptop = require("../DB-Models/StudentLaptop");
const Tablets = require("../DB-Models/Tablets");
const addTwoInOne = require("../DB-Models/TwoInOne");
module.exports = {
  //adding the gaming laptop
  addGamingLaptop: async (product) => {
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
  //adding the business Laptop
  addBusinessLaptop: async (product) => {
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
      const newProduct = new BusinessLaptop(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
  //adding the Budget Laptop
  addBudgetLaptop: async (product) => {
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
      const newProduct = new BudgetLaptop(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
  //adding the students laptops
  addStudentLaptop: async (product) => {
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
      const newProduct = new StudentLaptop(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
  //adding the Tablets laptops
  addTablets: async (product) => {
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
      const newProduct = new Tablets(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
  //adding the addTwoInOne Laptops
  addTwoInOneLaptop: async (product) => {
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
      const newProduct = new addTwoInOne(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
  //
  //
  //
  //Fetching the gaming laptops information
  getGamingLaptops: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await GamingLaptop.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching gaming laptops information:", err.message);
      throw err;
    }
  },
  //Particular Gaming Laptop details are fetcher here using the ID
  getGamingLaptopDetails: async (id) => {
    try {
      return await GamingLaptop.findById(id);
    } catch (err) {
      console.error("Error fetching Laptop details:", err.message);
      throw err;
    }
  }, //Fetching the Business laptops information
  getBusinessLaptops: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await BusinessLaptop.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error(
        "Error fetching Business laptops information:",
        err.message
      );
      throw err;
    }
  },
  //Particular Business Laptop details are fetcher here using the ID
  getBusinessLaptopDetails: async (id) => {
    try {
      return await BusinessLaptop.findById(id);
    } catch (err) {
      console.error("Error fetching Laptop details:", err.message);
      throw err;
    }
  }, //Fetching the Budget laptops information
  getBudgetLaptops: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await BudgetLaptop.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching Budget laptops information:", err.message);
      throw err;
    }
  },
  //Particular Business Laptop details are fetcher here using the ID
  getBudgetLaptopDetails: async (id) => {
    try {
      return await BudgetLaptop.findById(id);
    } catch (err) {
      console.error("Error fetching Laptop details:", err.message);
      throw err;
    }
  },
  //Fetching the Student laptops information
  getStudentsLaptops: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await StudentLaptop.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error(
        "Error fetching Students laptops information:",
        err.message
      );
      throw err;
    }
  },
  //Particular Students Laptop details are fetcher here using the ID
  getStudentLaptopDetails: async (id) => {
    try {
      return await StudentLaptop.findById(id);
    } catch (err) {
      console.error("Error fetching Laptop details:", err.message);
      throw err;
    }
  },
  //Fetching the Tablets  information
  getTablets: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await Tablets.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching Tablets information:", err.message);
      throw err;
    }
  },
  //Particular Tablets details are fetcher here using the ID
  getTabletsDetails: async (id) => {
    try {
      return await Tablets.findById(id);
    } catch (err) {
      console.error("Error fetching Laptop details:", err.message);
      throw err;
    }
  }, //Fetching the Tablets  information
  getTwoInOneLaptops: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await addTwoInOne.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching TwoInOne information:", err.message);
      throw err;
    }
  },
  //Particular TwoInOne Laptop  details are fetcher here using the ID
  getTwoInOneLaptopDetails: async (id) => {
    try {
      return await addTwoInOne.findById(id);
    } catch (err) {
      console.error("Error fetching Laptop details:", err.message);
      throw err;
    }
  },
};
