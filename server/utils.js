const products = require("./data/products.json");

const handleProducts = async (params) => {
  let { search, filter, sort, pageSize, pageNumber } = params;
  pageSize = pageSize || 5;
  pageNumber = pageNumber || 1;

  let filteredResults = products;

  if (search) {
    filteredResults = searchItems(products, search);
  }
  if (filter) {
    filteredResults = filterItems(filteredResults, filter);
  }
  if (sort) {
    filteredResults = sortItems(filteredResults, sort);
  }
  filteredResults = paginateItems(filteredResults, pageSize, pageNumber);
  return filteredResults;
};

function searchItems(products, searchTerm) {
  const searchTermLower = searchTerm.toLowerCase().trim();
  const filteredItems = products.filter((item) => {
    const titleLower = item.title.toLowerCase();
    const categoryLower = item.category.toLowerCase();
    return titleLower.includes(searchTermLower) || categoryLower.includes(searchTermLower);
  });

  return filteredItems;
}

const filterItems = (items, filter) => {
  if (filter === "") {
    return;
  } else {
    return items.filter((item) => item.category.toLowerCase() === filter);
  }
};

const sortItems = (items, sort) => {
  if (sort === "newest") {
    return items;
  } else if (sort === "oldest") {
    return items.reverse();
  } else if (sort === "price-low-to-high") {
    return items.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (sort === "price-high-to-low") {
    return items.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  } else if (sort === "a-to-z") {
    return items.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "z-to-a") {
    return items.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    return items;
  }
};

const paginateItems = (items, pageSize, pageNumber) => {
  return items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

module.exports = {
  handleProducts,
};
