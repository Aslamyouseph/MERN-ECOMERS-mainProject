const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    News_title: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "News_title cannot be empty.",
      },
    },
    News_description: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "News_description cannot be empty.",
      },
    },
    News_Details: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "News_Details cannot be empty.",
      },
    },
    News_image_small: {
      type: String,
      required: true,
      trim: true,
      match: /\.(jpg|jpeg|png|webp)$/i, // Validate image file format
    },
    News_image_large: {
      type: String,
      required: true,
      trim: true,
      match: /\.(jpg|jpeg|png|webp)$/i,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
