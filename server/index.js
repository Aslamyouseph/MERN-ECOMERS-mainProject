const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const UserRouter = require("./routes/userRoutes");
const AdminRoute = require("./routes/AdminRoutes");
const connectDB = require("./DB-Configaration/DataBaseConnection");
const multer = require("multer"); // Multer for file upload
const path = require("path");
const fs = require("fs");
require("dotenv").config();
console.log("CLIENT_ORIGIN:", process.env.CLIENT_ORIGIN);

// Connect to MongoDB
connectDB();

// Create an express app
const app = express();

// Set port . it will run on render website port on in 5000 port
const port = process.env.PORT || 5000;

// Middleware
// Now i can run this project on locally and also in render website
// CLIENT_ORIGIN => value is available in the .env file
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:3000",
        process.env.CLIENT_ORIGIN,
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow request
      } else {
        callback(new Error("Not allowed by CORS")); // Block other origins
      }
    },
    credentials: true,
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret-key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/MainProject", // fallback to local Mongo
      collectionName: "sessions",
    }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true only on Render
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Render needs "none" for cross-origin
      maxAge: 10 * 60 * 1000, // 10 minutes
    },
  })
);

// This is the path which is used to store the images (MULTER code)
app.use(
  "/AdminProductImages",
  express.static(
    path.join(__dirname, "../client/src/Admin-Components/AdminProductImages")
  )
);

// Routes
app.use("/api/user", UserRouter); // This is the UserRouter
app.use("/api/admin", AdminRoute); // This is the AdminRouter

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
