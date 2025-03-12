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
const Cart = require("../DB-Models/Cart");
const Order = require("../DB-Models/Order");
const { ObjectId } = require("mongoose").Types; // used to convert the string to ObjectId

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
  //
  //
  //Add To Cart operation
  addToCart: async (productID, userID) => {
    try {
      const userObjectId = new ObjectId(userID);
      const productObjectId = new ObjectId(productID);

      // Log the user and product IDs
      // console.log("User  ID:", userObjectId);
      // console.log("Product ID:", productObjectId);

      let userCart = await Cart.findOne({ userId: userObjectId });

      if (userCart) {
        // Check if product already exists in cart
        const productIndex = userCart.products.findIndex(
          (item) => item.productId.toString() === productID
        );

        if (productIndex !== -1) {
          // If product exists, increment the quantity
          userCart.products[productIndex].quantity += 1;
          await userCart.save();
          // console.log("Incremented quantity for product:", productID);
        } else {
          // If product does not exist, add it to the cart
          await Cart.updateOne(
            { userId: userObjectId },
            {
              $push: {
                products: {
                  productId: productObjectId,
                  quantity: 1,
                  productType: "GamingLaptop", // Change this based on the actual product type
                },
              },
            }
          );
          // console.log("Added new product to cart:", productID);
        }
        return { success: true, message: "Product added to cart" };
      } else {
        // Create a new cart if it doesn't exist
        const cartObj = {
          userId: userObjectId,
          products: [
            {
              productId: productObjectId,
              quantity: 1,
              productType: "GamingLaptop", // Change this based on the actual product type
            },
          ],
        };

        const newCart = new Cart(cartObj);
        await newCart.save();
        // console.log("Created new cart and added product:", productID);
        return { success: true, message: "New cart created and product added" };
      }
    } catch (error) {
      console.error("Error in addToCart:", error);
      return {
        success: false,
        message: "Failed to add product to cart",
        error,
      };
    }
  },
  //Fetching the cart details
  getCartItems: async (userID) => {
    try {
      const userObjectId = new ObjectId(userID);
      const cart = await Cart.findOne({ userId: userObjectId }).exec();

      if (!cart) {
        // console.log("No cart found for user.");
        return { products: [], totalQuantity: 0 }; // Return empty products and total quantity
      }

      if (!Array.isArray(cart.products)) {
        console.error("Cart products is not an array or is undefined.");
        return { products: [], totalQuantity: 0 };
      }

      let productDetails = [];
      let uniqueProductIds = new Set(); // To track unique product IDs

      for (const item of cart.products) {
        const productId = item.productId;

        // Check if the product is already added
        if (!uniqueProductIds.has(productId.toString())) {
          uniqueProductIds.add(productId.toString());

          // Try to find the product in each category
          let product =
            (await GamingLaptop.findById(productId)) ||
            (await BudgetLaptop.findById(productId)) ||
            (await BusinessLaptop.findById(productId)) ||
            (await addTwoInOne.findById(productId)) ||
            (await StudentLaptop.findById(productId)) ||
            (await Tablets.findById(productId));

          if (product) {
            productDetails.push({
              _id: product._id,
              name: product.Laptop_title || "Unknown",
              price: product.Laptop_discount_price || 0,
              image: product.Laptop_image_small || "default.jpg",
              quantity: item.quantity || 1, // Use the quantity from the cart
            });
          } else {
            console.warn(`Product not found for ID: ${productId}`);
          }
        }
      }

      // Calculate total quantity of unique products
      const totalQuantity = uniqueProductIds.size; // Count of unique products
      // console.log("Total quantity of unique products:", totalQuantity);
      return { products: productDetails, totalQuantity };
    } catch (error) {
      console.error("Error fetching cart items:", error);
      throw error;
    }
  },
  // Removing or deleting the cart item by user
  removeCartItem: async (userId, itemId) => {
    try {
      const userObjectId = new ObjectId(userId);
      const cart = await Cart.findOne({ userId: userObjectId });

      if (!cart) {
        console.warn("No cart found for user.");
        return; // No cart to remove item from
      }

      // Find the index of the product in the cart
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === itemId
      );

      if (productIndex !== -1) {
        // Remove the product from the cart
        cart.products.splice(productIndex, 1);
        await cart.save(); // Save the updated cart
        // console.log("Product removed from cart successfully.");
      } else {
        console.warn(`Product with ID ${itemId} not found in cart.`);
      }
    } catch (error) {
      console.error("Error removing cart item:", error);
      throw error; // Rethrow the error for further handling
    }
  },
  // Incrementing the quantity of the cart item by user
  incrementCartItem: async (userId, itemId) => {
    try {
      const userObjectId = new ObjectId(userId); // Convert userId to ObjectId
      const cart = await Cart.findOne({ userId: userObjectId }); // Find the user's cart

      if (!cart) {
        console.warn("No cart found for user.");
        return false; // No cart to increment quantity
      }

      // Find the index of the product in the cart
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === itemId
      );

      if (productIndex !== -1) {
        // Increment the quantity of the product
        cart.products[productIndex].quantity += 1;
        await cart.save(); // Save the updated cart
        return true; // Indicate success
      } else {
        console.warn(`Product with ID ${itemId} not found in cart.`);
        return false; // Item not found in cart
      }
    } catch (error) {
      console.error("Error incrementing cart item quantity:", error);
      throw error; // Rethrow the error for further handling
    }
  }, // decrementing the quantity of the cart item by user
  decrementCartItem: async (userId, itemId) => {
    try {
      const userObjectId = new ObjectId(userId); // Convert userId to ObjectId
      const cart = await Cart.findOne({ userId: userObjectId }); // Find the user's cart

      if (!cart) {
        console.warn("No cart found for user.");
        return false; // No cart to decrement quantity
      }

      // Find the index of the product in the cart
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === itemId
      );

      if (productIndex !== -1) {
        // Check if the quantity is greater than 1 before decrementing
        if (cart.products[productIndex].quantity > 1) {
          // Decrement the quantity of the product
          cart.products[productIndex].quantity -= 1;
          await cart.save(); // Save the updated cart
          return true; // Indicate success
        } else {
          console.warn(
            `Quantity of product with ID ${itemId} is already zero.`
          );
          return false; // Prevent decrementing below zero
        }
      } else {
        console.warn(`Product with ID ${itemId} not found in cart.`);
        return false; // Item not found in cart
      }
    } catch (error) {
      console.error("Error decrementing cart item quantity:", error);
      throw error; // Rethrow the error for further handling
    }
  },
  //  place an order operations
  placeOrder: async (userId, ProductDetails) => {
    try {
      const { address, pincode, mobile, place, paymentMethod, totalAmount } =
        ProductDetails;

      // Fetch the user's cart
      const cart = await Cart.findOne({ userId }).populate(
        "products.productId"
      );
      if (!cart) {
        return { error: true, status: 404, message: "Cart not found" };
      }

      // // Debugging: Log the cart products
      // console.log("Cart Products:", cart.products);

      // Determine order status based on payment method
      const status = paymentMethod === "cod" ? "placed" : "pending";

      // Create the order
      const order = new Order({
        deliveryDetails: {
          address,
          pincode,
          mobile,
          place,
          totalAmount,
        },
        userId,
        paymentMethod,
        products: cart.products, // Include products from the cart
        status,
      });

      await order.save();

      // Delete the user's cart after placing the order
      await Cart.deleteMany({ userId }); // This will delete all products in the user's cart

      return { order }; // Return the created order
    } catch (error) {
      console.error("Error in placeOrder:", error);
      return { error: true, status: 500, message: "Internal server error" }; // Return error object
    }
  },
  //Fetching the All Ordered information and displaying for user
  getAllOrders: async (userId) => {
    try {
      // Fetch the user without the password field
      const user = await UserModel.findById(userId).select("-password");

      if (!user) {
        return { success: false, message: "User  not found." };
      }

      // Find all orders associated with the user's ID
      const orders = await Order.find({ userId: user._id }).lean();

      if (!orders.length) {
        return []; // Return an empty array if no orders exist
      }

      // Fetch product details for each order
      const ordersWithProductDetails = await Promise.all(
        orders.map(async (order) => {
          const productsWithDetails = await Promise.all(
            order.products.map(async (product) => {
              let productData = null;
              const model = product.productType; // Model name based on product type

              // Check if the product type is one of the specified models
              if (
                [
                  "GamingLaptop",
                  "BudgetLaptop",
                  "BusinessLaptop",
                  "StudentLaptop",
                  "Tablets",
                  "TwoInOne",
                ].includes(model)
              ) {
                productData = await mongoose
                  .model(model)
                  .findById(product.productId)
                  .select("name");
              }

              return {
                productId: product.productId,
                quantity: product.quantity,
                name: productData,
              };
            })
          );

          return { ...order, products: productsWithDetails };
        })
      );

      return ordersWithProductDetails; // Return the orders with product details
    } catch (err) {
      console.error("Error fetching orders:", err.message);
      throw new Error("Failed to fetch orders");
    }
  },
};
