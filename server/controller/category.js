const { Category } = require("../schema/category");
const { User } = require("../schema/user");

module.exports.category = async (req, res) => {
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
    const { categoryName, Description, value } = req.body;

    const newCategory = await Category.create({
      user: id,
      categoryName,
      Description,
      value,
    });
    console.log(newCategory);
    return res.status(201).json({
      message: "new category created successfully",
      success: true,
      data: newCategory,
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

module.exports.getCategories = async (req, res) => {
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
    const allCategories = await Category.find({user:id});


    return res.status(200).json({
      message: "Fetched all categories",
      success: true,
      data: allCategories,
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

module.exports.updateCategory = async (req, res) => {
  try {

    const { categoryName, Description, value } = req.body;
    const { categoryId } = req.params;

    const category = await Category.findOneAndUpdate(
      { _id: categoryId },
      { categoryName, Description, value },
      { new: true }
    );
    return res.status(200).json({
      message: "category updated successfully",
      success: true,
      data: category,
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

module.exports.deleteCategory = async (req, res) => {
  try {
    const {
      user: { id },
    } = req;

    const { categoryId } = req.params;
    const category = await Category.findById({ _id: categoryId });

    if (id !== category.user.toString()) {
      return res.status(401).json({
        message: "You are not authorized to delete this task",
        success: false,
      });
    }

    await Category.findOneAndDelete({ _id: categoryId });

    return res.status(200).json({
      message: "Category deleted successfully",
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
