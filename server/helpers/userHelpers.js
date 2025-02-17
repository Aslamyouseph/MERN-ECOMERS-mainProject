const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserModel = require("../DB-Models/userAccount");
const ContactModel = require("../DB-Models/contactUser");
const ReturnRefundModel = require("../DB-Models/ReturnRefund");

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
};
