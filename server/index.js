const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const UserRouter = require("./routes/userRoutes"); // This is the user routes
const connectDB = require("./DB-Configaration/DataBaseConnection"); // This is the connection code , to connect to the mongoDB

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 5000; // This project is run on the port number 5000

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend origin
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse form data

// Configure session (Place before routes)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallback-secret-key", // Use a strong secret key
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something is stored
    store: MongoStore.create({
      client: mongoose.connection.getClient(), // Replace with your DB name
      collectionName: "sessions", // Store sessions in "sessions" collection
    }),
    cookie: {
      httpOnly: true, // Prevent XSS attacks
      secure: false, // Set `true` if using HTTPS
      sameSite: "lax", // Prevent CSRF
      maxAge: 10 * 60 * 1000, // Session expires in 10 mins
    },
  })
);

// Routes
app.use("/api/user", UserRouter);

// Debugging: Check if session is working
app.get("/api/session", (req, res) => {
  res.json({ session: req.session });
});

// Handle 404 errors
app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
