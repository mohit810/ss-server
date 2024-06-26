const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const cartController = new (require("@controllers/CartController"))();

router.get("", asyncHandler(cartController.getAllCartItems.bind(this)));
router.post(
  "/save-cart",
  asyncHandler(cartController.saveCart.bind(cartController))
);
router.patch("/update-cart", cartController.updateCart.bind(cartController));
router.delete(
  "/delete-cart/:createdBy",
  cartController.deleteOneCart.bind(cartController)
);
router.delete(
  "/delete-cartItem/:createdBy/:productID",
  cartController.deleteCartItem.bind(cartController)
);

module.exports = router;
