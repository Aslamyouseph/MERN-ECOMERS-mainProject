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
// Route to Add Latest News details (Using Multer)
router.post(
  "/addNewNews",
  upload.fields([
    { name: "News_image_small", maxCount: 1 },
    { name: "News_image_large", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Validate file uploads
      if (
        !req.files ||
        !req.files.News_image_small ||
        !req.files.News_image_large
      ) {
        return res.status(400).json({
          success: false,
          message: "Both small and large images are required.",
        });
      }

      // Validate text fields
      const { News_title, News_description, News_Details } = req.body;
      if (!News_title || !News_description || !News_Details) {
        return res.status(400).json({
          success: false,
          message: "News Title, Description, and Details are required.",
        });
      }

      // Get uploaded file paths
      const News_image_smallPath = `/AdminProductImages/${req.files.News_image_small[0].filename}`;
      const News_image_largePath = `/AdminProductImages/${req.files.News_image_large[0].filename}`;

      // Prepare news data
      const newsData = {
        News_title,
        News_description,
        News_Details,
        News_image_small: News_image_smallPath,
        News_image_large: News_image_largePath,
      };

      // Insert into the database
      await AdminHelpers.addNewNews(newsData);

      res.status(200).json({
        success: true,
        message: "Latest News Added Successfully",
      });
    } catch (err) {
      console.error("Error adding Latest News:", err);
      res.status(500).json({
        success: false,
        message: "Error adding Latest News to the database.",
      });
    }
  }
);
//Admin adding the HowToDO
router.post(
  "/addNewHowToDo",
  upload.fields([
    { name: "HowToDo_image_small", maxCount: 1 },
    { name: "HowToDo_image_large", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Validate file uploads
      if (
        !req.files ||
        !req.files.HowToDo_image_small ||
        !req.files.HowToDo_image_large
      ) {
        return res.status(400).json({
          success: false,
          message: "Both small and large images are required.",
        });
      }

      // Validate text fields
      const { HowToDo_title, HowToDo_description, HowToDo_Details } = req.body;
      if (!HowToDo_title || !HowToDo_description || !HowToDo_Details) {
        return res.status(400).json({
          success: false,
          message: "HowToDo Title, Description, and Details are required.",
        });
      }

      // Get uploaded file paths
      const HowToDo_image_smallPath = `/AdminProductImages/${req.files.HowToDo_image_small[0].filename}`;
      const HowToDo_image_largePath = `/AdminProductImages/${req.files.HowToDo_image_large[0].filename}`;

      // Prepare HowToDo data
      const HowToDoData = {
        HowToDo_title,
        HowToDo_description,
        HowToDo_Details,
        HowToDo_image_small: HowToDo_image_smallPath,
        HowToDo_image_large: HowToDo_image_largePath,
      };

      // Insert into the database
      await AdminHelpers.addNewHowToDo(HowToDoData);

      res.status(200).json({
        success: true,
        message: "Latest HowToDo Added Successfully",
      });
    } catch (err) {
      console.error("Error adding Latest HowToDo:", err);
      res.status(500).json({
        success: false,
        message: "Error adding Latest HowToDo to the database.",
        error: err.message, // Send the actual error message for debugging
      });
    }
  }
);

//Accessing the Latest News details for frond page
router.get("/getNews", async (req, res) => {
  try {
    const News = await AdminHelpers.getNews();
    res.status(200).json({ News: News });
  } catch (err) {
    console.error("Error fetching Latest News information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching News Details ." });
  }
});
//The News  details are fetched here (When the user click the view more then the id will also passed)
router.get("/getNewsDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const NewsDetails = await AdminHelpers.getNewsDetails(id);
    res.status(200).json({ NewsDetails: NewsDetails });
  } catch (err) {
    console.error("Error fetching News details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching News details." });
  }
});

//Accessing the Latest HowTo details for frond page
router.get("/getHowToDO", async (req, res) => {
  try {
    const HowToDO = await AdminHelpers.getHowToDO();
    res.status(200).json({ HowToDO: HowToDO });
  } catch (err) {
    console.error("Error fetching Latest HowToDO information:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching HowToDO Details ." });
  }
});
//The HowToDo  details are fetched here (When the user click the view more then the id will also passed)
router.get("/getHowToDoDetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const HowToDODetails = await AdminHelpers.getHowToDoDetails(id);
    res.status(200).json({ HowToDODetails: HowToDODetails });
  } catch (err) {
    console.error("Error fetching HowToDo details:", err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching HowToDo details." });
  }
});

// Removing or deleting the gaming laptop by admin
router.delete("/deleteGamingLaptop/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deletedLaptop = await AdminHelpers.deleteGamingLaptop(productId); // Await the delete operation

    if (!deletedLaptop) {
      return res
        .status(404)
        .json({ success: false, message: "Laptop not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Laptop deleted successfully!" });
  } catch (err) {
    console.error("Error deleting laptop:", err);
    res.status(500).json({ success: false, message: "Error deleting laptop." });
  }
});
// Removing or deleting the Budget laptop by admin
router.delete("/deleteBudgetLaptop/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deletedLaptop = await AdminHelpers.deleteBudgetLaptop(productId); // Await the delete operation

    if (!deletedLaptop) {
      return res
        .status(404)
        .json({ success: false, message: "Laptop not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Laptop deleted successfully!" });
  } catch (err) {
    console.error("Error deleting laptop:", err);
    res.status(500).json({ success: false, message: "Error deleting laptop." });
  }
});
// Removing or deleting the Business laptop by admin
router.delete("/deleteBusinessLaptop/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deletedLaptop = await AdminHelpers.deleteBusinessLaptop(productId); // Await the delete operation

    if (!deletedLaptop) {
      return res
        .status(404)
        .json({ success: false, message: "Laptop not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Laptop deleted successfully!" });
  } catch (err) {
    console.error("Error deleting laptop:", err);
    res.status(500).json({ success: false, message: "Error deleting laptop." });
  }
});
// Removing or deleting the Students laptop by admin
router.delete("/deleteStudentsLaptop/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deletedLaptop = await AdminHelpers.deleteStudentsLaptop(productId); // Await the delete operation

    if (!deletedLaptop) {
      return res
        .status(404)
        .json({ success: false, message: "Laptop not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Laptop deleted successfully!" });
  } catch (err) {
    console.error("Error deleting laptop:", err);
    res.status(500).json({ success: false, message: "Error deleting laptop." });
  }
});
// Removing or deleting the Tablets by admin
router.delete("/deleteTablets/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deletedLaptop = await AdminHelpers.deleteTablets(productId); // Await the delete operation

    if (!deletedLaptop) {
      return res
        .status(404)
        .json({ success: false, message: "Laptop not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Laptop deleted successfully!" });
  } catch (err) {
    console.error("Error deleting laptop:", err);
    res.status(500).json({ success: false, message: "Error deleting laptop." });
  }
});
// Removing or deleting the TwoInOne Laptops by admin
router.delete("/deleteTwoInOneLaptop/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deletedLaptop = await AdminHelpers.deleteTwoInOneLaptop(productId); // Await the delete operation

    if (!deletedLaptop) {
      return res
        .status(404)
        .json({ success: false, message: "Laptop not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Laptop deleted successfully!" });
  } catch (err) {
    console.error("Error deleting laptop:", err);
    res.status(500).json({ success: false, message: "Error deleting laptop." });
  }
});

// Removing or deleting the News by admin
router.delete("/deleteNewsDetails/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deletedNews = await AdminHelpers.deleteNewsDetails(productId); // Await the delete operation

    if (!deletedNews) {
      return res
        .status(404)
        .json({ success: false, message: "News Details not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "News deleted successfully!" });
  } catch (err) {
    console.error("Error deleting News:", err);
    res.status(500).json({ success: false, message: "Error deleting News." });
  }
});
// Removing or deleting the HowToDo by admin
router.delete("/deleteHowToDoDetails/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Getting the laptop ID from request params

    const deleteHowToDo = await AdminHelpers.deleteHowToDoDetails(productId); // Await the delete operation

    if (!deleteHowToDo) {
      return res
        .status(404)
        .json({ success: false, message: "HowToDo Details not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "HowToDo deleted successfully!" });
  } catch (err) {
    console.error("Error deleting HowToDo:", err);
    res
      .status(500)
      .json({ success: false, message: "Error deleting HowToDo." });
  }
});
//Updating the gaming laptops
router.put(
  "/updateGamingLaptop/:id",
  upload.fields([
    { name: "Laptop_image_small" },
    { name: "Laptop_image_large" },
  ]),
  async (req, res) => {
    const { id } = req.params;

    // Prepare product details
    const productDetails = {
      Laptop_title: req.body.Laptop_title,
      Laptop_description: req.body.Laptop_description,
      Laptop_Details: req.body.Laptop_Details,
      Laptop_keywords: req.body.Laptop_keywords || [], // Ensure it's an array
      Laptop_original_price: req.body.Laptop_original_price,
      Laptop_discount_price: req.body.Laptop_discount_price,
    };

    // Handle image uploads
    if (req.files) {
      if (req.files.Laptop_image_small) {
        const smallImageFile = req.files.Laptop_image_small[0];
        const smallImagePath = `/AdminProductImages/${smallImageFile.filename}`; // Adjust path as needed
        productDetails.Laptop_image_small = smallImagePath; // Set the path for small image
      }

      if (req.files.Laptop_image_large) {
        const largeImageFile = req.files.Laptop_image_large[0];
        const largeImagePath = `/AdminProductImages/${largeImageFile.filename}`; // Adjust path as needed
        productDetails.Laptop_image_large = largeImagePath; // Set the path for large image
      }
    }

    try {
      await AdminHelpers.updateGamingLaptop(id, productDetails);
      res.status(200).json({ message: "Laptop updated successfully" });
    } catch (error) {
      console.error("Error updating laptop:", error);
      res
        .status(500)
        .json({ message: "Failed to update laptop. Please try again." });
    }
  }
);

module.exports = router;
