const { getAllProducts, saveProduct } = require("@services/ProductsService");

class ProductsController {
  constructor() {}

  /**
   * Gets All the Products
   **/
  async getProducts(req, res) {
    const resp = await getAllProducts();
    res.send(resp);
  }

  /**
   * Save a Product in DB
   **/
  async saveProduct(req, res) {
    const resp = await saveProduct(req.body);
    res.send(resp);
  }
}

module.exports = ProductsController;
