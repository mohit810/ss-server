const {
  getCartItems,
  saveNUpdateCart,
  deleteCart,
  deleteCartItem,
} = require("@services/CartService");
const mongoose = require("mongoose");

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
   * Save's a Cart in DB
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
   * Update's a Cart in DB
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

  /**
   * Delete's a Cart in DB
   **/
  async deleteOneCart(req, res) {
    const { createdBy } = req.params;
    const resp = await deleteCart({ createdBy });
    res.send(resp);
  }

  /**
   * Delete's a Cart Item in DB
   **/
  async deleteCartItem(req, res) {
    const { createdBy } = req.params;
    const { productID } = req.params;
    const resp = await deleteCartItem(
      { createdBy },
      {
        $pull: {
          Items: { productID: new mongoose.Types.ObjectId(productID) },
        },
      }
    );
    res.send(resp);
  }
}

module.exports = CartController;
