const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const AdminHelpers = require("../helpers/AdminHelpers");
const fs = require("fs");

//TODO:  From Here onwards the MULTER (file adding operation starts)
//
//TODO:In the index.js there is the path where defined
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
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG,webp, and JPG files are allowed!"), false);
  }
};
// Multer Upload Middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit: 5MB
  fileFilter: fileFilter,
});
//
//
//
//

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

      await AdminHelpers.addGamingLaptop(productData);

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
// Route to Add Business Laptop (Using Multer)
router.post(
  "/addBusinessLaptop",
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

      await AdminHelpers.addBusinessLaptop(productData);

      res.status(200).json({
        success: true,
        message: "Business Laptop Added Successfully",
      });
    } catch (err) {
      console.error("Error adding Business Laptop:", err);
      res
        .status(500)
        .json({ success: false, message: "Error adding product to database." });
    }
  }
);
// Route to Add Budget Laptop (Using Multer)
router.post(
  "/addBudgetLaptop",
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

      await AdminHelpers.addBudgetLaptop(productData);

      res.status(200).json({
        success: true,
        message: "Budget Laptop Added Successfully",
      });
    } catch (err) {
      console.error("Error adding Budget Laptop:", err);
      res
        .status(500)
        .json({ success: false, message: "Error adding product to database." });
    }
  }
);
// Route to Add Student Laptop (Using Multer)
router.post(
  "/addStudentLaptop",
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

      await AdminHelpers.addStudentLaptop(productData);

      res.status(200).json({
        success: true,
        message: "Student Laptop Added Successfully",
      });
    } catch (err) {
      console.error("Error adding Student Laptop:", err);
      res
        .status(500)
        .json({ success: false, message: "Error adding product to database." });
    }
  }
);
// Route to Add Tablets (Using Multer)
router.post(
  "/addTablets",
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

      await AdminHelpers.addTablets(productData);

      res.status(200).json({
        success: true,
        message: "Tablets added Successfully",
      });
    } catch (err) {
      console.error("Error adding Student Laptop:", err);
      res
        .status(500)
        .json({ success: false, message: "Error adding product to database." });
    }
  }
);

// Route to Add TwoInOne Laptops (Using Multer)
router.post(
  "/addTwoInOneLaptop",
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

      await AdminHelpers.addTwoInOneLaptop(productData);

      res.status(200).json({
        success: true,
        message: "TwoInOne Laptop added Successfully",
      });
    } catch (err) {
      console.error("Error adding TwoInOne Laptop:", err);
      res
        .status(500)
        .json({ success: false, message: "Error adding product to database." });
    }
  }
);
//
//
//
//
//Accessing the GamingLaptop details for frond page
router.get("/getGamingLaptops", async (req, res) => {
  try {
    const GamingLaptops = await AdminHelpers.getGamingLaptops();
    // console.log("Gaming Laptops Form backend:", GamingLaptops);
    res.status(200).json({ laptops: GamingLaptops });
  } catch (err) {
    console.error("Error fetching Gaming Laptops information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Gaming Laptops." });
  }
});
//The GamingLaptops details are fetched here (When the user click the view more then the id will also passed)
router.get("/getGamingLaptopDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Laptop ID:", id);
    const LaptopDetails = await AdminHelpers.getGamingLaptopDetails(id);
    // console.log("Laptop Details:", LaptopDetails);
    res.status(200).json({ laptopDetails: LaptopDetails });
  } catch (err) {
    console.error("Error fetching Laptop details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Laptop details." });
  }
});
//Accessing the BusinessLaptop details for frond page
router.get("/getBusinessLaptops", async (req, res) => {
  try {
    const BusinessLaptops = await AdminHelpers.getBusinessLaptops();
    // console.log("Business Laptops Form backend:", GamingLaptops);
    res.status(200).json({ laptops: BusinessLaptops });
  } catch (err) {
    console.error("Error fetching Business Laptops information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Business Laptops." });
  }
});
//The BusinessLaptop details are fetched here (When the user click the view more then the id will also passed)
router.get("/getBusinessLaptopDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Laptop ID:", id);
    const LaptopDetails = await AdminHelpers.getBusinessLaptopDetails(id);
    // console.log("Laptop Details:", LaptopDetails);
    res.status(200).json({ laptopDetails: LaptopDetails });
  } catch (err) {
    console.error("Error fetching Laptop details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Laptop details." });
  }
});
//Accessing the Budget Laptop details for frond page
router.get("/getBudgetLaptops", async (req, res) => {
  try {
    const BudgetLaptops = await AdminHelpers.getBudgetLaptops();
    // console.log("Budget Laptops Form backend:", GamingLaptops);
    res.status(200).json({ laptops: BudgetLaptops });
  } catch (err) {
    console.error("Error fetching Budget Laptops information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Budget Laptops." });
  }
});
//The Budget Laptop details are fetched here (When the user click the view more then the id will also passed)
router.get("/getBudgetLaptopDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Laptop ID:", id);
    const LaptopDetails = await AdminHelpers.getBudgetLaptopDetails(id);
    // console.log("Laptop Details:", LaptopDetails);
    res.status(200).json({ laptopDetails: LaptopDetails });
  } catch (err) {
    console.error("Error fetching Laptop details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Laptop details." });
  }
});
//Accessing the Students Laptop details for frond page
router.get("/getStudentsLaptops", async (req, res) => {
  try {
    const StudentsLaptops = await AdminHelpers.getStudentsLaptops();
    // console.log("Students Laptops Form backend:", GamingLaptops);
    res.status(200).json({ laptops: StudentsLaptops });
  } catch (err) {
    console.error("Error fetching Students Laptops information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Students Laptops." });
  }
});
//The Students Laptop details are fetched here (When the user click the view more then the id will also passed)
router.get("/getStudentLaptopDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Laptop ID:", id);
    const LaptopDetails = await AdminHelpers.getStudentLaptopDetails(id);
    // console.log("Laptop Details:", LaptopDetails);
    res.status(200).json({ laptopDetails: LaptopDetails });
  } catch (err) {
    console.error("Error fetching Laptop details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Laptop details." });
  }
});
//Accessing the Tablets details for frond page
router.get("/getTablets", async (req, res) => {
  try {
    const Tablets = await AdminHelpers.getTablets();
    // console.log("Tablets Laptops Form backend:", GamingLaptops);
    res.status(200).json({ laptops: Tablets });
  } catch (err) {
    console.error("Error fetching Tablets information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Tablets ." });
  }
});
//The Tablets details are fetched here (When the user click the view more then the id will also passed)
router.get("/getTabletsDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Laptop ID:", id);
    const LaptopDetails = await AdminHelpers.getTabletsDetails(id);
    // console.log("Laptop Details:", LaptopDetails);
    res.status(200).json({ laptopDetails: LaptopDetails });
  } catch (err) {
    console.error("Error fetching Laptop details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Laptop details." });
  }
});
//Accessing the TwoInOne details for frond page
router.get("/getTwoInOneLaptops", async (req, res) => {
  try {
    const TWoInOneLaptops = await AdminHelpers.getTwoInOneLaptops();
    // console.log("TWoInOneLaptops Laptops Form backend:", GamingLaptops);
    res.status(200).json({ laptops: TWoInOneLaptops });
  } catch (err) {
    console.error("Error fetching TwoInOne Laptops information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching TwoInOne Laptops ." });
  }
});
//The TwoInOne Laptop details are fetched here (When the user click the view more then the id will also passed)
router.get("/getTwoInOneLaptopDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Laptop ID:", id);
    const LaptopDetails = await AdminHelpers.getTwoInOneLaptopDetails(id);
    // console.log("Laptop Details:", LaptopDetails);
    res.status(200).json({ laptopDetails: LaptopDetails });
  } catch (err) {
    console.error("Error fetching Laptop details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Laptop details." });
  }
});
module.exports = router;
