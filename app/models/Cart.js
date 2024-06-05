const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CartSchema = new schema(
  {
    Items: [
      {
        productID: {
          type: schema.Types.ObjectId,
        },
        qty: {
          type: String,
        },
      },
    ],
    createdBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

CartSchema.virtual("ItemsList", {
  localField: "Items.productID",
  foreignField: "_id",
  ref: "products",
});

module.exports = mongoose.model("carts", CartSchema);
