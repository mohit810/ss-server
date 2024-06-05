const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const cartController = new (require("@controllers/CartController"))();

router.get("", asyncHandler(cartController.getAllCartItems.bind(this)));
router.post(
  "/save-cart/",
  asyncHandler(cartController.saveCart.bind(cartController))
);

module.exports = router;
