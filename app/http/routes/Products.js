const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const productController = new (require("@controllers/ProductsController"))();

router.get("/", asyncHandler(productController.getProducts.bind(this)));
router.post(
  "/save-product",
  asyncHandler(productController.saveProduct.bind(productController))
);

module.exports = router;
