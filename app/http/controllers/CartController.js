const { getCartItems, saveNUpdateCart } = require("@services/CartService");

class CartController {
  constructor() {}

  /**
   * Gets All the Cart Items
   **/
  async getAllCartItems(req, res) {
    const { createdBy } = req.query;
    const data = await getCartItems(createdBy);
    if (data[0] != undefined) {
      data[0].ItemsList.forEach((item) => {
        for (let ele of data[0].Items) {
          if (ele.productID.toString() == item._id.toString()) {
            item.qty = Number(ele.qty);
          }
        }
      });
    }
    res.send(data);
  }

  /**
   * Save a Cart in DB
   **/
  async saveCart(req, res) {
    const { createdBy } = req.query;
    var Items = req.body.items.map((ele) => {
      return { productID: ele._id, qty: ele.qty };
    });
    var data = { createdBy, Items };
    const resp = await saveNUpdateCart({ createdBy }, data);
    res.send(resp);
  }

  /**
   * Update a Cart in DB
   **/
  async updateCart(req, res) {
    const { createdBy } = req.query;
    const resp = await saveNUpdateCart(
      {
        createdBy,
        "Items.productID": req.body._id,
      },
      {
        "Items.$.qty": req.body.qty,
      }
    );
    res.send(resp);
  }
}

module.exports = CartController;
