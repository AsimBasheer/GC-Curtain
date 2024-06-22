const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const { register, login, getUser } = require("../controllers/auth/controller");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/products/products");

const {
  createStock,
  getAllStock,
  updateStock,
  deleteStock,
} = require("../controllers/stocks/stocks");

router.post("/register", register);
router.post("/login", login);
router.get("/getUser", getUser);

// Product Crud routes
router.get("/getAllProduct", getAllProduct);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

router.post("/uploadImage", uploadImage);

// Stock Crud
router.post("/createStock", createStock);
router.get("/getAllStock", getAllStock);
router.put("/updateStock/:id", updateStock);
router.delete("/deleteStock/:id", deleteStock);

module.exports = router;
