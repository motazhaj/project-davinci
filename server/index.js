const express = require("express");
const cors = require("cors");
const sortValues = require("./data/sortOptions.json");
const filterValues = require("./data/filterOptions.json");
const { handleProducts } = require("./utils");
const filterOptions = { sortValues, filterValues };

const app = express();

app.use(cors());

app.get("/products", async (req, res) => {
  const products = await handleProducts(req.query);
  res.status(200).json(products);
});

app.get("/sort-options", async (req, res) => {
  res.status(200).json(filterOptions);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
