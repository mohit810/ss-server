const Product = require("@models/Product");

/**
 * Queries the DB to get Products
 **/
const getAllProducts = async () => {
  return await Product.find({}).lean();
};

/**
 * Saves the product from api in the DB
 **/
const saveProduct = async (body) => {
  return await new Product(body).save();
};

module.exports = {
  getAllProducts,
  saveProduct,
};
