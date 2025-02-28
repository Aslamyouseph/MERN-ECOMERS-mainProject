const mongoose = require("mongoose");
const GamingLaptop = require("../DB-Models/GamingLaptop");
const BusinessLaptop = require("../DB-Models/BusinessLaptop");
const BudgetLaptop = require("../DB-Models/BudgetLaptops");
const StudentLaptop = require("../DB-Models/StudentLaptop");
const Tablets = require("../DB-Models/Tablets");
const addTwoInOne = require("../DB-Models/TwoInOne");
const News = require("../DB-Models/News");
const HowToDo = require("../DB-Models/HowToDo");
const UserModel = require("../DB-Models/userAccount");
const ContactModel = require("../DB-Models/contactUser");
const ReturnRefundModel = require("../DB-Models/ReturnRefund");
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
  }, //adding the Latest News
  addNewNews: async (product) => {
    try {
      // Validate required fields before saving
      if (!product.News_title || !product.News_description) {
        throw new Error("Missing required fields");
      }

      // Create a new product document
      const newProduct = new News(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
  //adding the Latest HowToDo
  addNewHowToDo: async (product) => {
    try {
      // Validate required fields before saving
      if (!product.HowToDo_title || !product.HowToDo_description) {
        throw new Error("Missing required fields");
      }

      // Create a new product document
      const newProduct = new HowToDo(product);

      // Save the new record to the database
      return await newProduct.save();
    } catch (err) {
      console.error("Error adding product:", err.message);
      throw err;
    }
  },
  //Fetching the Latest news  information
  getNews: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await News.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching Latest  News Details:", err.message);
      throw err;
    }
  },
  //Particular News  details are fetcher here using the ID
  getNewsDetails: async (id) => {
    try {
      return await News.findById(id);
    } catch (err) {
      console.error("Error fetching News :", err.message);
      throw err;
    }
  }, //Fetching the Latest news  information
  getHowToDO: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await HowToDo.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching Latest  HowToDO Details:", err.message);
      throw err;
    }
  }, //Particular HowToDo  details are fetcher here using the ID
  getHowToDoDetails: async (id) => {
    try {
      return await HowToDo.findById(id);
    } catch (err) {
      console.error("Error fetching HowToDo Details :", err.message);
      throw err;
    }
  }, // Removing or deleting the gaming laptop by admin
  deleteGamingLaptop: async (productId) => {
    try {
      const deletedProduct = await GamingLaptop.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("Laptop not found");
      }

      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  // Removing or deleting the gaming laptop by admin
  deleteBudgetLaptop: async (productId) => {
    try {
      const deletedProduct = await BudgetLaptop.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("Laptop not found");
      }

      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  // Removing or deleting the Business laptop by admin
  deleteBusinessLaptop: async (productId) => {
    try {
      const deletedProduct = await BusinessLaptop.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("Laptop not found");
      }

      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  // Removing or deleting the Students laptop by admin
  deleteStudentsLaptop: async (productId) => {
    try {
      const deletedProduct = await StudentLaptop.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("Laptop not found");
      }

      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  // Removing or deleting the Tablets by admin
  deleteTablets: async (productId) => {
    try {
      const deletedProduct = await Tablets.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("Laptop not found");
      }

      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  // Removing or deleting the TwoInOne laptop by admin
  deleteTwoInOneLaptop: async (productId) => {
    try {
      const deletedProduct = await addTwoInOne.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("Laptop not found");
      }

      return deletedProduct;
    } catch (error) {
      throw error;
    }
  }, // Removing or deleting the News by admin
  deleteNewsDetails: async (productId) => {
    try {
      const deletedProduct = await News.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("News Detail is  not found");
      }
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  // Removing or deleting the HowToDo by admin
  deleteHowToDoDetails: async (productId) => {
    try {
      const deletedProduct = await HowToDo.findByIdAndDelete(productId);

      if (!deletedProduct) {
        throw new Error("News Detail is  not found");
      }
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  //Updating the gaming Laptop
  updateGamingLaptop: (id, productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        await GamingLaptop.findByIdAndUpdate(
          id,
          {
            Laptop_title: productDetails.Laptop_title,
            Laptop_description: productDetails.Laptop_description,
            Laptop_Details: productDetails.Laptop_Details,
            Laptop_keywords: productDetails.Laptop_keywords, // Ensure this is set correctly
            Laptop_image_small: productDetails.Laptop_image_small, // Update image path
            Laptop_image_large: productDetails.Laptop_image_large, // Update image path
            Laptop_original_price: productDetails.Laptop_original_price,
            Laptop_discount_price: productDetails.Laptop_discount_price,
          },
          { new: true, runValidators: true }
        ); // Return the updated document and run validators
        resolve();
      } catch (error) {
        console.error("Error updating gaming laptop:", error);
        reject(error);
      }
    });
  },
  //Updating the Business Laptop
  updateBusinessLaptop: (id, productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        await BusinessLaptop.findByIdAndUpdate(
          id,
          {
            Laptop_title: productDetails.Laptop_title,
            Laptop_description: productDetails.Laptop_description,
            Laptop_Details: productDetails.Laptop_Details,
            Laptop_keywords: productDetails.Laptop_keywords, // Ensure this is set correctly
            Laptop_image_small: productDetails.Laptop_image_small, // Update image path
            Laptop_image_large: productDetails.Laptop_image_large, // Update image path
            Laptop_original_price: productDetails.Laptop_original_price,
            Laptop_discount_price: productDetails.Laptop_discount_price,
          },
          { new: true, runValidators: true }
        ); // Return the updated document and run validators
        resolve();
      } catch (error) {
        console.error("Error updating gaming laptop:", error);
        reject(error);
      }
    });
  }, //Updating the Budget Laptop
  updateBudgetLaptop: (id, productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        await BudgetLaptop.findByIdAndUpdate(
          id,
          {
            Laptop_title: productDetails.Laptop_title,
            Laptop_description: productDetails.Laptop_description,
            Laptop_Details: productDetails.Laptop_Details,
            Laptop_keywords: productDetails.Laptop_keywords, // Ensure this is set correctly
            Laptop_image_small: productDetails.Laptop_image_small, // Update image path
            Laptop_image_large: productDetails.Laptop_image_large, // Update image path
            Laptop_original_price: productDetails.Laptop_original_price,
            Laptop_discount_price: productDetails.Laptop_discount_price,
          },
          { new: true, runValidators: true }
        ); // Return the updated document and run validators
        resolve();
      } catch (error) {
        console.error("Error updating gaming laptop:", error);
        reject(error);
      }
    });
  },
  //Updating the student Laptop
  updateStudentLaptop: (id, productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        await StudentLaptop.findByIdAndUpdate(
          id,
          {
            Laptop_title: productDetails.Laptop_title,
            Laptop_description: productDetails.Laptop_description,
            Laptop_Details: productDetails.Laptop_Details,
            Laptop_keywords: productDetails.Laptop_keywords, // Ensure this is set correctly
            Laptop_image_small: productDetails.Laptop_image_small, // Update image path
            Laptop_image_large: productDetails.Laptop_image_large, // Update image path
            Laptop_original_price: productDetails.Laptop_original_price,
            Laptop_discount_price: productDetails.Laptop_discount_price,
          },
          { new: true, runValidators: true }
        ); // Return the updated document and run validators
        resolve();
      } catch (error) {
        console.error("Error updating gaming laptop:", error);
        reject(error);
      }
    });
  },
  //Updating the Tablets
  updateTablets: (id, productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        await Tablets.findByIdAndUpdate(
          id,
          {
            Laptop_title: productDetails.Laptop_title,
            Laptop_description: productDetails.Laptop_description,
            Laptop_Details: productDetails.Laptop_Details,
            Laptop_keywords: productDetails.Laptop_keywords, // Ensure this is set correctly
            Laptop_image_small: productDetails.Laptop_image_small, // Update image path
            Laptop_image_large: productDetails.Laptop_image_large, // Update image path
            Laptop_original_price: productDetails.Laptop_original_price,
            Laptop_discount_price: productDetails.Laptop_discount_price,
          },
          { new: true, runValidators: true }
        ); // Return the updated document and run validators
        resolve();
      } catch (error) {
        console.error("Error updating gaming laptop:", error);
        reject(error);
      }
    });
  },
  //Updating the TwoInOne Laptops
  updateTwoInOneLaptops: (id, productDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        await addTwoInOne.findByIdAndUpdate(
          id,
          {
            Laptop_title: productDetails.Laptop_title,
            Laptop_description: productDetails.Laptop_description,
            Laptop_Details: productDetails.Laptop_Details,
            Laptop_keywords: productDetails.Laptop_keywords, // Ensure this is set correctly
            Laptop_image_small: productDetails.Laptop_image_small, // Update image path
            Laptop_image_large: productDetails.Laptop_image_large, // Update image path
            Laptop_original_price: productDetails.Laptop_original_price,
            Laptop_discount_price: productDetails.Laptop_discount_price,
          },
          { new: true, runValidators: true }
        ); // Return the updated document and run validators
        resolve();
      } catch (error) {
        console.error("Error updating gaming laptop:", error);
        reject(error);
      }
    });
  },
  // Updating the News in the database
  updateNews: (id, NewsDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedNews = await News.findByIdAndUpdate(
          id,
          {
            News_title: NewsDetails.News_title,
            News_description: NewsDetails.News_description,
            News_Details: NewsDetails.News_Details,
            News_image_small: NewsDetails.News_image_small, // Update image path
            News_image_large: NewsDetails.News_image_large, // Update image path
          },
          { new: true, runValidators: true } // Return the updated document and run validators
        );

        if (!updatedNews) {
          return reject(new Error("News not found"));
        }

        resolve(updatedNews); // Resolve with the updated document if needed
      } catch (error) {
        console.error("Error updating News:", error);
        reject(error);
      }
    });
  },
  // Updating the HowToDo in the database
  updateHowToDo: (id, HowToDoDetails) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedHowToDo = await HowToDo.findByIdAndUpdate(
          id,
          {
            HowToDo_title: HowToDoDetails.HowToDo_title,
            HowToDo_description: HowToDoDetails.HowToDo_description,
            HowToDo_Details: HowToDoDetails.HowToDo_Details,
            HowToDo_image_small: HowToDoDetails.HowToDo_image_small, // Update image path
            HowToDo_image_large: HowToDoDetails.HowToDo_image_large, // Update image path
          },
          { new: true, runValidators: true } // Return the updated document and run validators
        );

        if (!updatedHowToDo) {
          return reject(new Error("HowToDo not found"));
        }

        resolve(updatedHowToDo); // Resolve with the updated document if needed
      } catch (error) {
        console.error("Error updating HowToDo:", error);
        reject(error);
      }
    });
  },
  //Fetching the User  information
  getUsersDetails: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await UserModel.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching User Details:", err.message);
      throw err;
    }
  },
  // Removing or deleting the User Details by admin
  deleteUserDetails: async (UserId) => {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(UserId);

      if (!deletedUser) {
        throw new Error("User not found");
      }

      return deletedUser;
    } catch (error) {
      throw error;
    }
  },
  //Fetching the User contact  information
  getUsersContact: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await ContactModel.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching User Details:", err.message);
      throw err;
    }
  },
  // Removing or deleting the User Contact Details by admin
  deleteUsersContact: async (UserId) => {
    try {
      const deletedUserContact = await ContactModel.findByIdAndDelete(UserId);

      if (!deletedUserContact) {
        throw new Error("User not found");
      }

      return deletedUserContact;
    } catch (error) {
      throw error;
    }
  },
  //Fetching the Return & Refund  information
  getReturnRefund: async () => {
    try {
      //"".sort({ createdAt: -1 })""  =>This is used to display the products in latest added order
      return await ReturnRefundModel.find().sort({ createdAt: -1 }); // Newest first;
    } catch (err) {
      console.error("Error fetching  Return & Refund Details:", err.message);
      throw err;
    }
  },
  // Removing or deleting the Return & Refund Details by admin
  deleteReturnRefund: async (UserId) => {
    try {
      const deletedReturnRefund = await ReturnRefundModel.findByIdAndDelete(
        UserId
      );

      if (!deletedReturnRefund) {
        throw new Error("User not found");
      }

      return deletedReturnRefund;
    } catch (error) {
      throw error;
    }
  },
};
