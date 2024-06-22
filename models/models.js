const mongoose = require("mongoose");
const uuid = require("uuid");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  number: String,
  isMinor: Number,
});

const productSchema = new mongoose.Schema({
  productCode: { type: String, required: true },
  barcode: { type: String },
  productName: { type: String, required: true },
  description: { type: String },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  reorderLevel: { type: Number },
  reorderQuantity: { type: Number },
  supplier: { type: String, required: true },
  category: { type: String },
  subCategory: { type: String },
  images: { type: String },
  // images: [
  //   {
  //     type: String,
  //     required: false,
  //   },
  // ],
});

// Stock schema
const stockSchema = new mongoose.Schema({
  product: {
    type: Object,
    // required: true,
  },
  quantity: { type: Number, required: true },
  warehouse: { type: String },
  location: { type: String },
  stockStatus: { type: String, enum: ["inStock", "outOfStock", "lowStock"] },
});

// Order schema
const orderSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true },
  buyerName: { type: String },
  buyerLocation: { type: String },
  orderLastDate: { type: Date },
  orderCreatedBy: { type: String },
  createdAt: { type: Date },
  price: { type: Number },
  orderStatus: {
    type: String,
    enum: ["pending", "inProduction", "halt", "delivered"],
  },
});

// In/Out schema
const inOutSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  quantity: { type: Number, required: true },
  checkedBy: { type: String },
  createdBy: { type: String },
  price: { type: Number },
  status: { type: String, enum: ["dispatch", "arrive"] },
});

// Payment schema
const paymentSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  quantity: { type: Number, required: true },
  buyerName: { type: String },
  buyerLocation: { type: String },
  orderCreatedBy: { type: String },
  createdBy: { type: String },
  total_amount: { type: Number },
  paymentStatus: { type: String, enum: ["pending", "recieve", "cancel"] },
});

module.exports = {
  Product: mongoose.model("Product", productSchema),
  Stock: mongoose.model("Stock", stockSchema),
  User: mongoose.model("User", userSchema),
  Order: mongoose.model("Order", orderSchema),
  InOut: mongoose.model("InOut", inOutSchema),
  Payment: mongoose.model("Payment", paymentSchema),
};
