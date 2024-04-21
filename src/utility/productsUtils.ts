import { productCardProps } from "../components/product/ProductCard";

export function searchItems(products: productCardProps[], searchTerm: string) {
  const searchTermLower = searchTerm.toLowerCase().trim();
  const filteredItems = products.filter((item) => {
    const titleLower = item.title.toLowerCase();
    const categoryLower = item.category.toLowerCase();
    return titleLower.includes(searchTermLower) || categoryLower.includes(searchTermLower);
  });

  return filteredItems;
}

export const onFilter = async (search: string | null, filter: string | null, sort: string | null) => {
  const response = await fetch("/data/products.json");
  const products = await response.json();
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
  return filteredResults;
};

const filterItems = (items: productCardProps[], filter: string) => {
  if (filter === "") {
    return;
  } else {
    return items.filter((item: productCardProps) => item.category.toLowerCase() === filter);
  }
};

const sortItems = (items: productCardProps[], sort: string) => {
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
