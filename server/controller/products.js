const { Product } = require("../schema/product");
const { User } = require("../schema/user");
const cloudinary = require("../utils/cloudinary");

module.exports.createProduct = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;

    const userId = await User.findById(id);
    if (!userId) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        data: null,
      });
    }
    const { productname, packsize, MRP, status, selectedCategory } = req.body;
    const file = req.file;

    const responseURL = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "products" }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        })
        .end(file.buffer);
    });

    const post = await Product.create({
      user: id,
      productname,
      packsize,
      MRP,
      status,
      selectedCategory,
      image: responseURL.secure_url,
    });

    return res.status(200).json({
      message: "Product created successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const userId = await User.findById(id);
    if (!userId) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        data: null,
      });
    }
    const allProducts = await Product.find({ user: id });

    return res.status(200).json({
      message: "Fetched all products",
      success: true,
      data: allProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { productname, packsize, MRP, status, category } = req.body;
    const { productId } = req.params;

    const product = await Product.findOneAndUpdate(
      { _id: productId },
      { productname, packsize, MRP, status, category },
      { new: true }
    );
    return res.status(200).json({
      message: "product updated successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;

    const { productId } = req.params;

    const product = await Product.findById({ _id: productId });

    if (id !== product.user.toString()) {
      return res.status(401).json({
        message: "You are not authorized to delete this task",
        success: false,
      });
    }

    await Product.findOneAndDelete({ _id: productId });

    return res.status(200).json({
      message: "Product deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
