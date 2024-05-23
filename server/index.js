const express = require("express");
const cors = require("cors");

const { handleProducts, getNewArrivals, getCategories } = require("./utils");

const app = express();

app.use(cors());

app.get("/products", async (req, res) => {
  const products = await handleProducts(req.query);
  res.status(200).json(products);
});

app.get("/new-arrivals", async (req, res) => {
  const products = await getNewArrivals();
  res.status(200).json(products);
});

app.get("/categories", async (req, res) => {
  const categories = await getCategories();
  res.status(200).json(categories);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
