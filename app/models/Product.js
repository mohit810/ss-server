const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema({
  id: {
    type: "Number",
  },
  title: {
    type: "String",
  },
  description: {
    type: "String",
  },
  category: {
    type: "String",
  },
  price: {
    type: "Number",
  },
  discountPercentage: {
    type: "Number",
  },
  rating: {
    type: "Number",
  },
  stock: {
    type: "Number",
  },
  tags: {
    type: ["String"],
  },
  brand: {
    type: "String",
  },
  sku: {
    type: "String",
  },
  weight: {
    type: "Number",
  },
  dimensions: {
    width: {
      type: "Number",
    },
    height: {
      type: "Number",
    },
    depth: {
      type: "Number",
    },
  },
  warrantyInformation: {
    type: "String",
  },
  shippingInformation: {
    type: "String",
  },
  availabilityStatus: {
    type: "String",
  },
  reviews: [
    {
      rating: {
        type: "Number",
      },
      comment: {
        type: "String",
      },
      date: {
        type: "Date",
      },
      reviewerName: {
        type: "String",
      },
      reviewerEmail: {
        type: "String",
      },
    },
  ],
  returnPolicy: {
    type: "String",
  },
  minimumOrderQuantity: {
    type: "Number",
  },
  meta: {
    createdAt: {
      type: "Date",
    },
    updatedAt: {
      type: "Date",
    },
    barcode: {
      type: "String",
    },
    qrCode: {
      type: "String",
    },
  },
  images: {
    type: ["String"],
  },
  thumbnail: {
    type: "String",
  },
});

module.exports = mongoose.model("products", ProductSchema);
