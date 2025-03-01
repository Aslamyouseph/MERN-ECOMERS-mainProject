const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserModel = require("../DB-Models/userAccount");
const ContactModel = require("../DB-Models/contactUser");
const ReturnRefundModel = require("../DB-Models/ReturnRefund");
const GamingLaptop = require("../DB-Models/GamingLaptop");
const BudgetLaptop = require("../DB-Models/BudgetLaptops");
const BusinessLaptop = require("../DB-Models/BusinessLaptop");
const StudentLaptop = require("../DB-Models/StudentLaptop");
const Tablets = require("../DB-Models/Tablets");
const addTwoInOne = require("../DB-Models/TwoInOne");

module.exports = {
  // used for the signup operation
  doSignup: (userData) => {
    // console.log("Signup data in userHelpers:", userData);
    return new Promise(async (resolve, reject) => {
      try {
        const newUser = new UserModel(userData);
        const result = await newUser.save(); // Save to database
        // console.log("Signup successful!", result);
        resolve({ user: result });
      } catch (error) {
        reject(error);
      }
    });
  },
  //login operation
  dologin: (userData) => {
    return new Promise(async (resolve, reject) => {
      try {
        // console.log("This is the user entered data:", userData);
        // console.log("used entered email:", userData.email);

        let user = await UserModel.findOne({ email: userData.email });
        // console.log("User found in the database:", user);
        // if there is not a valid user available
        if (!user) {
          // console.log("User not found in the database.");

          return resolve({ status: false, message: "User not found" });
        }
        // console.log("User found, checking password...");

        const isPasswordCorrect = await bcrypt.compare(
          String(userData.password),
          user.password
        );
        // console.log("isPasswordCorrect:", isPasswordCorrect);

        if (!isPasswordCorrect) {
          // console.log("Incorrect password.");

          return resolve({ status: false, message: "Incorrect password" });
        }
        // console.log("Login successful!");

        resolve({ status: true, user: user });
      } catch (error) {
        console.error("Error during login:", error);
        reject({ status: false, message: "Login error occurred" });
      }
    });
  },
  doContact: (contactData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newContact = new ContactModel(contactData);
        const result = await newContact.save(); // Save to database
        resolve({ user: result });
      } catch (error) {
        reject(error);
      }
    });
  },
  //Return and refund operations
  doReturnRefund: (doReturnRefundData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newReturnRefund = new ReturnRefundModel(doReturnRefundData);
        const result = await newReturnRefund.save(); // Fixed the variable name
        resolve({ user: result });
      } catch (error) {
        reject(error);
      }
    });
  },
  // Adding the user review of gaming laptops
  addReviewGaming: (reviewData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const laptopId = reviewData.id; // Correcting the field name

        // Validate the laptopId
        if (!laptopId) {
          return reject(new Error("Laptop ID is required"));
        }

        if (!mongoose.Types.ObjectId.isValid(laptopId)) {
          return reject(new Error("Invalid Laptop ID format"));
        }

        const updatedLaptop = await GamingLaptop.findByIdAndUpdate(
          laptopId,
          {
            $push: {
              Laptop_Review: {
                name: reviewData.name,
                review: reviewData.review, // Fixing review field name
                date: new Date(),
              },
            },
          },
          { new: true }
        );

        if (!updatedLaptop) {
          return reject(new Error("Laptop not found"));
        }

        resolve(updatedLaptop);
      } catch (error) {
        console.error("Error Adding the Reviews:", error);
        reject(error);
      }
    });
  },
  // Adding the user review of Budget laptops
  addReviewBudget: (reviewData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const laptopId = reviewData.id; // Correcting the field name

        // Validate the laptopId
        if (!laptopId) {
          return reject(new Error("Laptop ID is required"));
        }

        if (!mongoose.Types.ObjectId.isValid(laptopId)) {
          return reject(new Error("Invalid Laptop ID format"));
        }

        const updatedLaptop = await BudgetLaptop.findByIdAndUpdate(
          laptopId,
          {
            $push: {
              Laptop_Review: {
                name: reviewData.name,
                review: reviewData.review, // Fixing review field name
                date: new Date(),
              },
            },
          },
          { new: true }
        );

        if (!updatedLaptop) {
          return reject(new Error("Laptop not found"));
        }

        resolve(updatedLaptop);
      } catch (error) {
        console.error("Error Adding the Reviews:", error);
        reject(error);
      }
    });
  },

  // Adding the user review of Business laptops
  addReviewBusiness: (reviewData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const laptopId = reviewData.id; // Correcting the field name

        // Validate the laptopId
        if (!laptopId) {
          return reject(new Error("Laptop ID is required"));
        }

        if (!mongoose.Types.ObjectId.isValid(laptopId)) {
          return reject(new Error("Invalid Laptop ID format"));
        }

        const updatedLaptop = await BusinessLaptop.findByIdAndUpdate(
          laptopId,
          {
            $push: {
              Laptop_Review: {
                name: reviewData.name,
                review: reviewData.review, // Fixing review field name
                date: new Date(),
              },
            },
          },
          { new: true }
        );

        if (!updatedLaptop) {
          return reject(new Error("Laptop not found"));
        }

        resolve(updatedLaptop);
      } catch (error) {
        console.error("Error Adding the Reviews:", error);
        reject(error);
      }
    });
  },

  // Adding the user review of students laptops
  addReviewStudent: (reviewData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const laptopId = reviewData.id; // Correcting the field name

        // Validate the laptopId
        if (!laptopId) {
          return reject(new Error("Laptop ID is required"));
        }

        if (!mongoose.Types.ObjectId.isValid(laptopId)) {
          return reject(new Error("Invalid Laptop ID format"));
        }

        const updatedLaptop = await StudentLaptop.findByIdAndUpdate(
          laptopId,
          {
            $push: {
              Laptop_Review: {
                name: reviewData.name,
                review: reviewData.review, // Fixing review field name
                date: new Date(),
              },
            },
          },
          { new: true }
        );

        if (!updatedLaptop) {
          return reject(new Error("Laptop not found"));
        }

        resolve(updatedLaptop);
      } catch (error) {
        console.error("Error Adding the Reviews:", error);
        reject(error);
      }
    });
  },
  // Adding the user review of Tablets laptops
  addReviewTablets: (reviewData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const laptopId = reviewData.id; // Correcting the field name

        // Validate the laptopId
        if (!laptopId) {
          return reject(new Error("Laptop ID is required"));
        }

        if (!mongoose.Types.ObjectId.isValid(laptopId)) {
          return reject(new Error("Invalid Laptop ID format"));
        }

        const updatedLaptop = await Tablets.findByIdAndUpdate(
          laptopId,
          {
            $push: {
              Laptop_Review: {
                name: reviewData.name,
                review: reviewData.review, // Fixing review field name
                date: new Date(),
              },
            },
          },
          { new: true }
        );

        if (!updatedLaptop) {
          return reject(new Error("Laptop not found"));
        }

        resolve(updatedLaptop);
      } catch (error) {
        console.error("Error Adding the Reviews:", error);
        reject(error);
      }
    });
  },

  // Adding the user review of TwoInOne laptops
  addReviewTwoInOne: (reviewData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const laptopId = reviewData.id; // Correcting the field name

        // Validate the laptopId
        if (!laptopId) {
          return reject(new Error("Laptop ID is required"));
        }

        if (!mongoose.Types.ObjectId.isValid(laptopId)) {
          return reject(new Error("Invalid Laptop ID format"));
        }

        const updatedLaptop = await addTwoInOne.findByIdAndUpdate(
          laptopId,
          {
            $push: {
              Laptop_Review: {
                name: reviewData.name,
                review: reviewData.review, // Fixing review field name
                date: new Date(),
              },
            },
          },
          { new: true }
        );

        if (!updatedLaptop) {
          return reject(new Error("Laptop not found"));
        }

        resolve(updatedLaptop);
      } catch (error) {
        console.error("Error Adding the Reviews:", error);
        reject(error);
      }
    });
  },
};
