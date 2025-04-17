/*This is the connection code - to connect to the mongoDB  */

const mongoose = require("mongoose");
require("dotenv").config();
// In here we connected to the mongoDB Atlas . Atlas which is mainly using for storing the data in cloud
// mongoDB Compose is used to store the data locally on our devices
// during hosting time always the data needed to store in mongoDB Atlas
const connectDB = async () => {
  // MONGODB_URI => value is available in the .env file
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
