const mongoose = require("mongoose");

const HowToDoSchema = new mongoose.Schema(
  {
    HowToDo_title: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "HowToDo_title cannot be empty.",
      },
    },
    HowToDo_description: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "HowToDo_description cannot be empty.",
      },
    },
    HowToDo_Details: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "HowToDo_Details cannot be empty.",
      },
    },
    HowToDo_image_small: {
      type: String,
      required: true,
      trim: true,
      match: /\.(jpg|jpeg|png|webp)$/i, // Validate image file format
    },
    HowToDo_image_large: {
      type: String,
      required: true,
      trim: true,
      match: /\.(jpg|jpeg|png|webp)$/i,
    },
  },
  { timestamps: true }
);

const HowToDo = mongoose.model("HowToDo", HowToDoSchema);

module.exports = HowToDo;
