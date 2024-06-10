const { Product } = require("../../models/models");
const multer = require("multer");
const storageInstance = require("../../config/firebaseconfig");

const upload = multer({ storage: multer.memoryStorage() });

// upload image file on firebaseStorage

exports.uploadImage = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        const storageRef = storageInstance.ref();
        const fileRef = storageRef.child(req.file.originalname);
        const metadata = {
          contentType: req.file.mimetype,
        };

        fileRef
          .put(req.file.buffer, metadata)
          .then((snapshot) => {
            const url = `https://firebasestorage.googleapis.com/v0/b/${storageRef.bucket}/o/${fileRef.name}?alt=media`;
            res.status(200).json({ url });
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Create Products
exports.createProduct = async (req, res) => {
  //upload images on fb

  // For Multi Product Create

  const products = req.body.products;
  if (!products || !Array.isArray(products)) {
    return res
      .status(400)
      .send({ message: "Invalid request. Products array is required." });
  }

  try {
    const productDocs = products.map((product) => {
      return new Product({
        productCode: product.productCode,
        productName: product.productName,
        description: product.description,
        unitPrice: product.unitPrice,
        quantity: product.quantity,
        supplier: product.supplier,
        category: product.category,
        subCategory: product.subCategory,
        images: product.images,
      });
    });

    const result = await Product.insertMany(productDocs);
    res.send({ message: `Created ${result.insertedCount} products` });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error creating products" });
  }

  // For single PRoduct create
  // const {
  //   productCode,
  //   productName,
  //   description,
  //   unitPrice,
  //   quantity,
  //   category,
  //   subCategory,
  //   supplier,
  // } = req.body;
  // const product = new Product({
  //   productCode,
  //   productName,
  //   description,
  //   unitPrice,
  //   quantity,
  //   category,
  //   subCategory,
  //   supplier,
  // });
  // const existedProduct = await Product.findOne({ productCode });
  // if (existedProduct) {
  //   return res.status(401).send({
  //     message: "Product Already Exists",
  //     status: "Not Succes",
  //     data: {
  //       existedProduct,
  //     },
  //   });
  // }
  // try {
  //   await product.save();
  //   res.status(201).json({ message: "Product created successfully" });
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

// Fetch All Products
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({
      message: "Products Fetched Successfuly",
      status: "Success",
      data: {
        products,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = req.body;
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    //   res.json(product);
    res.status(200).send({
      message: "Product Updated Successfuly",
      status: "Success",
      data: {
        product,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
