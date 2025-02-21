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

// Connect to MongoDB
connectDB();

// Create an express app
const app = express();

// Set port
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallback-secret-key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
      collectionName: "sessions",
    }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 10 * 60 * 1000,
    },
  })
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
  console.log(`Server running on http://localhost:${port}`);
});
