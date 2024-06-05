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
 * Queries the DB to save(if doesn't exist) and can also update Cart Items
 **/
const saveNUpdateCart = async (filter, update) => {
  return await Cart.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
    strict: false,
  });
};

/**
 * Queries the DB to delete a Cart associated according to the filter
 **/
const deleteCart = async (filter) => {
  return await Cart.deleteOne(filter);
};

/**
 * Queries the DB to delete a Cart Item associated with a user Cart
 **/
const deleteCartItem = async (filter, update) => {
  return await Cart.updateOne(filter, update);
};

module.exports = {
  getCartItems,
  saveNUpdateCart,
  deleteCart,
  deleteCartItem,
};
