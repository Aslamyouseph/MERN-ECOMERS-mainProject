const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const AdminHelpers = require("../helpers/AdminHelpers");
const fs = require("fs");

//TODO:  From Here onwards the MULTER (file adding operation starts)
// Define Upload Folder
const uploadFolder = path.join(
  __dirname,
  "../../client/src/Admin-Components/AdminProductImages"
);

// Ensure the folder exists
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// File Filter (Allow only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG, and JPG files are allowed!"), false);
  }
};

// Multer Upload Middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit: 5MB
  fileFilter: fileFilter,
});

// Route to Add Gaming Laptop (Using Multer)
router.post(
  "/addGamingLaptop",
  upload.fields([
    { name: "Laptop_image_small", maxCount: 1 },
    { name: "Laptop_image_large", maxCount: 1 },
  ]),
  async (req, res) => {
    //console.log("Control came to here");
    try {
      // Validate required fields
      if (
        !req.files ||
        !req.files.Laptop_image_small ||
        !req.files.Laptop_image_large
      ) {
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded." });
      }
      //console.log("Uploaded files:", req.files);

      const {
        Laptop_title,
        Laptop_description,
        Laptop_Details,
        Laptop_original_price,
        Laptop_discount_price,
        Laptop_keywords,
      } = req.body;

      if (
        !Laptop_title ||
        !Laptop_description ||
        !Laptop_original_price ||
        !Laptop_discount_price ||
        !Laptop_keywords
      ) {
        return res
          .status(400)
          .json({ success: false, message: "Missing required fields." });
      }

      // Get uploaded file paths
      const Laptop_image_smallPath = `/AdminProductImages/${req.files.Laptop_image_small[0].filename}`;
      const Laptop_image_largePath = `/AdminProductImages/${req.files.Laptop_image_large[0].filename}`;

      // Prepare product data
      const productData = {
        Laptop_title,
        Laptop_description,
        Laptop_Details,
        Laptop_keywords: Laptop_keywords.split(","), // Convert comma-separated string to array
        Laptop_image_small: Laptop_image_smallPath,
        Laptop_image_large: Laptop_image_largePath,
        Laptop_original_price,
        Laptop_discount_price,
      };

      await AdminHelpers.addProduct(productData);

      res.status(200).json({
        success: true,
        message: "Gaming Laptop Added Successfully",
      });
    } catch (err) {
      console.error("Error adding Gaming Laptop:", err);
      res
        .status(500)
        .json({ success: false, message: "Error adding product to database." });
    }
  }
);

module.exports = router;
