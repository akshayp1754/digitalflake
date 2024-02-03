const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  selectedCategory: {
    type: String,
  },
  productname: {
    type: String,
  },
  packsize: {
    type: String,
  },
  MRP: {
    type: Number,
  },
  status: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: String,
  }
});

module.exports.Product = mongoose.model("Product", productSchema);
