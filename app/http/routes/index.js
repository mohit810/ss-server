var express = require("express");
const app = express();
const port = process.env.port || 8080;
const cors = require("cors");

const product = require("./Products.js");
const cart = require("./Cart.js");

app.use(express.json());
app.options(
  "*",
  cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 })
); // replace with your Website Serving URL

app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 })); //replace with your Website Serving URL

app.use("/api/products", product);
app.use("/api/cart", cart);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
