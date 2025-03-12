const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userHelpers");

// TODO:checking the user is logged or not .This block is used to check the user is logged or not when the control is came from the frontend
router.get("/checksection", (req, res) => {
  // console.log("Session after checksection:", req.session.user);
  if (req.session.user) {
    return res.status(200).json({ isLoggedIn: true, user: req.session.user });
  } else {
    return res.status(200).json({ isLoggedIn: false });
  }
});

/* TODO:checking the user is logged or not .This block is used to check the user is logged or not when the control is came from the Backend itself
 In here if the user is logged then the next() will work  . if the user is not logged then the "success: false" perform and the control will goes to the catch block*/
const verifyLogin = (req, res, next) => {
  // console.log("Session after verifyLogin:", req.session.userLoggedIn);
  if (req.session.userLoggedIn === true) {
    next();
  } else {
    // Return JSON with a 401 status instead of redirecting
    res.status(401).json({
      success: false,
      message: "User is not logged in. Please log in to continue.",
    });
  }
};

// Signup operation
router.post("/signup", async (req, res) => {
  try {
    const response = await userHelpers.doSignup(req.body);

    req.session.user = {
      id: response.user._id,
      name: response.user.name,
      email: response.user.email,
      phone: response.user.phone,
      password: response.user.password,
    };
    req.session.userLoggedIn = true;
    // console.log("Session after signup:", req.session.userLoggedIn);

    // Save the session data before responding
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error saving session",
        });
      }
      // console.log("Session after signup:", req.session);

      res.status(200).json({
        success: true,
        message: "Signup successful",
        user: response.user,
      });
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Signup failed!",
      error: error.message,
    });
  }
});

// login operation
router.post("/login", (req, res) => {
  userHelpers.dologin(req.body).then((response) => {
    // console.log("Session before login:", req.session); // Log the session after setting user data
    // console.log("Login Response:", response); // Log the response
    if (response.status == true) {
      req.session.user = {
        id: response.user._id,
        name: response.user.name,
        email: response.user.email,
        phone: response.user.phone,
        password: response.user.password,
      };
      req.session.userLoggedIn = true;
      // console.log("Session after login:", req.session.userLoggedIn);
      // let user = req.session.user;
      // console.log("user details from the session after login:", user);
      // console.log("Session after login:", req.session);
      // Respond back with success
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: response.user, // Send user data back
      });
    } else {
      req.session.userLoginErr = true;
      res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
  });
});

// logout operation
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to log out" });
    }
    res.clearCookie("connect.sid", { path: "/" });
    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  });
});

// contact form operation

router.post("/contact", verifyLogin, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    await userHelpers.doContact(req.body);
    res.status(200).json({
      success: true,
      message:
        "Your request has been submitted successfully! Our staff will contact you very soon.",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      success: false,
      message: "Contact failed!",
      error: error.message,
    });
  }
});

//ReturnRefund operations

router.post("/returnRefund", verifyLogin, async (req, res) => {
  try {
    const { orderId, phone, reason } = req.body;

    // Validate input fields
    if (!orderId || !phone || !reason) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    try {
      await userHelpers.doReturnRefund(req.body);
    } catch (dbError) {
      console.error("Database error:", dbError);
      return res.status(500).json({
        success: false,
        message: "Failed to process your request. Please try again later.",
      });
    }
    // Success response
    res.status(200).json({
      success: true,
      message:
        "Your request has been submitted successfully! Our support team will review your request and get back to you shortly.",
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while processing your request!",
      error: error.message,
    });
  }
});
//Adding  the user review for gaming laptops
router.put("/addReviewGaming", verifyLogin, async (req, res) => {
  // console.log("Received review data:", req.body); // Debugging

  try {
    await userHelpers.addReviewGaming(req.body);
    res.status(200).json({
      success: true,
      message: "Review added successfully!",
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      success: false,
      message: "Error adding review.",
      error: error.message,
    });
  }
});
//Adding  the user review for Budget laptops
router.put("/addReviewBudget", verifyLogin, async (req, res) => {
  // console.log("Received review data:", req.body); // Debugging

  try {
    await userHelpers.addReviewBudget(req.body);
    res.status(200).json({
      success: true,
      message: "Review added successfully!",
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      success: false,
      message: "Error adding review.",
      error: error.message,
    });
  }
});

//Adding  the user review for Business laptops
router.put("/addReviewBusiness", verifyLogin, async (req, res) => {
  // console.log("Received review data:", req.body); // Debugging

  try {
    await userHelpers.addReviewBusiness(req.body);
    res.status(200).json({
      success: true,
      message: "Review added successfully!",
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      success: false,
      message: "Error adding review.",
      error: error.message,
    });
  }
});

//Adding  the user review for Student laptops
router.put("/addReviewStudent", verifyLogin, async (req, res) => {
  // console.log("Received review data:", req.body); // Debugging

  try {
    await userHelpers.addReviewStudent(req.body);
    res.status(200).json({
      success: true,
      message: "Review added successfully!",
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      success: false,
      message: "Error adding review.",
      error: error.message,
    });
  }
});

//Adding  the user review for Tablets
router.put("/addReviewTablets", verifyLogin, async (req, res) => {
  // console.log("Received review data:", req.body); // Debugging

  try {
    await userHelpers.addReviewTablets(req.body);
    res.status(200).json({
      success: true,
      message: "Review added successfully!",
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      success: false,
      message: "Error adding review.",
      error: error.message,
    });
  }
});
//Adding  the user review for TwoInOne laptops
router.put("/addReviewTwoInOne", verifyLogin, async (req, res) => {
  // console.log("Received review data:", req.body); // Debugging

  try {
    await userHelpers.addReviewTwoInOne(req.body);
    res.status(200).json({
      success: true,
      message: "Review added successfully!",
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      success: false,
      message: "Error adding review.",
      error: error.message,
    });
  }
});
//
//
//Add To Cart Operation
//Adding the used clicked product to the cart
router.post("/addToCart/:id", verifyLogin, async (req, res) => {
  try {
    const productID = req.params.id;

    // Ensure user session exists before accessing user ID
    if (!req.session.user) {
      return res.status(401).json({
        success: false,
        message: "User not logged in.",
      });
    }
    // This is used to access the session user ID
    const userID = req.session.user.id;

    // console.log("Product ID:", productID);
    // console.log("User ID:", userID);

    // Call helper function to add the product to the cart
    const result = await userHelpers.addToCart(productID, userID);

    if (!result) {
      return res.status(500).json({
        success: false,
        message: "Failed to add product to cart.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product added successfully!",
    });
  } catch (error) {
    console.error("Error adding Laptop to cart:", error);
    res.status(500).json({
      success: false,
      message: "Error adding Laptop to cart.",
      error: error.message,
    });
  }
});
// Fetching the cart details
router.get("/getCartDetails", verifyLogin, async (req, res) => {
  try {
    if (!req.session.user || !req.session.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not logged in.",
      });
    }

    const userId = req.session.user.id;
    // console.log("Fetching cart for user ID:", userId); // Debugging line
    const { products, totalQuantity } = await userHelpers.getCartItems(userId);
    // console.log("Cart details retrieved:", { products, totalQuantity }); // Debugging line

    res.status(200).json({
      success: true,
      message: "Cart details retrieved successfully!",
      cartDetails: products, // Return the products array
      totalQuantity, // Include total quantity of unique products
    });
  } catch (error) {
    console.error("Error retrieving cart details:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving cart details.",
      error: error.message,
    });
  }
});

//Delete item from cart
router.delete("/deleteCartItem/:id", verifyLogin, async (req, res) => {
  try {
    const userId = req.session.user.id;
    const itemId = req.params.id;

    await userHelpers.removeCartItem(userId, itemId);

    res.status(200).json({
      success: true,
      message: "Item removed from cart.",
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting item.",
      error: error.message,
    });
  }
});
//handling the increment operation of the cart
router.put("/incrementCartItemQuantity/:id", verifyLogin, async (req, res) => {
  try {
    const userId = req.session.user.id; // Get the user ID from the session
    const itemId = req.params.id; // Get the item ID from the request parameters

    // Call the helper function to increment the cart item quantity
    const result = await userHelpers.incrementCartItem(userId, itemId);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Item quantity incremented.",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Item not found in cart.",
      });
    }
  } catch (error) {
    console.error("Error incrementing item quantity:", error);
    res.status(500).json({
      success: false,
      message: "Error incrementing item quantity.",
      error: error.message,
    });
  }
});
//handling the decrement operation of the cart
router.put("/decrementCartItemQuantity/:id", verifyLogin, async (req, res) => {
  try {
    const userId = req.session.user.id; // Get the user ID from the session
    const itemId = req.params.id; // Get the item ID from the request parameters

    // Call the helper function to decrement the cart item quantity
    const result = await userHelpers.decrementCartItem(userId, itemId);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Item quantity decremented.",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Item not found in cart or quantity is already zero.",
      });
    }
  } catch (error) {
    console.error("Error decrementing item quantity:", error);
    res.status(500).json({
      success: false,
      message: "Error decrementing item quantity.",
      error: error.message,
    });
  }
});
//placing the order
router.post("/placeOrder", verifyLogin, async (req, res) => {
  try {
    const userId = req.session.user.id;
    const result = await userHelpers.placeOrder(userId, req.body);

    if (result.error) {
      return res.status(result.status).json({
        success: false,
        message: result.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Order placed successfully!",
      order: result.order,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Error placing order.",
      error: error.message,
    });
  }
});
// Fetching all orders and user details for the logged-in user
router.get("/getAllOrders", verifyLogin, async (req, res) => {
  try {
    const userId = req.session.user.id;

    const orders = await userHelpers.getAllOrders(userId);

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ success: false, message: "Error fetching data." });
  }
});
// Fetching Order  details
router.get("/getAllOrders", verifyLogin, async (req, res) => {
  try {
    const userId = req.session.user.id;

    const orders = await userHelpers.getAllOrders(userId);

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ success: false, message: "Error fetching data." });
  }
});

module.exports = router;
