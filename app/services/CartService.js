const Cart = require("@models/Cart");

/**
 * Queries the DB to get Cart Items
 **/
const getCartItems = async (createdBy) => {
  return await Cart.find({ createdBy })
    .lean()
    .populate(
      "ItemsList",
      "title category price discountPercentage rating thumbnail"
    );
};

/**
 * Queries the DB to save(if doesn't exist) and update Cart Items
 **/
const saveNUpdateCart = async (filter, update) => {
  return await Cart.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
    strict: false,
  });
};

module.exports = {
  getCartItems,
  saveNUpdateCart,
};
