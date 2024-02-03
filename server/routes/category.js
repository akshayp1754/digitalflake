const { Router } = require("express");
const {
  category,
  getCategories,
  deleteCategory,
  updateCategory,
} = require("../controller/category");
const router = Router();
const { authMiddleware } = require("../middleware/index");

router.post("/", authMiddleware,  category);

router.get("/", authMiddleware,getCategories);

router.patch("/:categoryId",authMiddleware, updateCategory);


router.delete("/:categoryId", authMiddleware, deleteCategory);

module.exports = router;
