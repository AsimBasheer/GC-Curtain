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

router.post("/register", register);
router.post("/login", login);
router.get("/getUser", getUser);

// Product Crud routes
router.get("/getAllProduct", getAllProduct);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

router.post("/uploadImage", uploadImage);

// router.put('/products/:id', productController.updateProduct);
// router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
