const { Router } = require("express");
const router = Router();
const { authMiddleware} = require("../middleware/index");
const { createProduct, getProducts, deleteProduct, updateProduct } = require("../controller/products");
const { upload} =  require("../utils/uploader");

router.post("/",authMiddleware, upload.single("productimage"), createProduct);

router.get("/", authMiddleware, getProducts)

router.patch("/:productId",authMiddleware, updateProduct);


router.delete("/:productId", authMiddleware,deleteProduct);



module.exports = router;
