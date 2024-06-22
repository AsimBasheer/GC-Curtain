const { Stock, Product } = require("../../models/models");

// Create Stocks
exports.createStock = async (req, res) => {
  const { product, quantity, warehouse, location, stockStatus } = req.body;

  if (!product) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  const productObj = await Product.findById(product);
  const stock = new Stock({
    product: productObj,
    quantity,
    warehouse,
    location,
    stockStatus,
  });
  const existedStock = await Stock.findOne({ "product._id": productObj._id });
  console.log("&&&&&&&&&&&&&&&&", existedStock);
  if (existedStock) {
    return res.status(401).send({
      message: "Stock Already Exists",
      status: "false",
      data: {
        existedStock,
      },
    });
  }
  try {
    await stock.save();
    res.status(200).send({
      message: "Stock created successfully",
      status: "true",
      data: {
        stock,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fetch All Stocks
exports.getAllStock = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).send({
      message: "Stocks Fetched Successfuly",
      status: "Success",
      data: {
        stocks,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Stocks
exports.updateStock = async (req, res) => {
  try {
    const stockId = req.params.id;
    console.log(stockId);
    const { product, quantity, warehouse, location, stockStatus } = req.body;

    if (!product) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const productObj = await Product.findById(product);
    const updatedStock = {
      product: productObj,
      quantity,
      warehouse,
      location,
      stockStatus,
    };
    const stock = await Stock.findByIdAndUpdate(stockId, updatedStock, {
      new: true,
    });
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    //   res.json(product);
    res.status(200).send({
      message: "Stock Updated Successfuly",
      status: "Success",
      data: {
        stock,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Stocks
exports.deleteStock = async (req, res) => {
  try {
    const stockId = req.params.id;
    console.log(stockId);
    const stock = await Stock.findByIdAndDelete(stockId);
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    res.json({ message: "Stock deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
