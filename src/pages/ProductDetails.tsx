// import { useEffect, useState } from "react";
import ProductImageReview from "../components/product/ProductImageReview";
import ProductOrderDetails from "../components/product/ProductOrderDetails";

const product = {
  id: 0,
  title: "Product 1",
  category: "Category 1",
  description: "This is product 1, a great product.",
  price: "10.99",
  image: "product1.jpg",
};

const ProductDetails = () => {
  // const [product, setProduct] = useState();
  // useEffect(() => {});

  return (
    <>
      <div className="flex flex-col gap-16 relative -top-24">
        <div className="w-full pt-28 pb-8 shadow-md bg-gray-50" />
        <section className="w-full max-w-screen-lg mx-auto px-4 flex justify-between">
          <ProductImageReview product={product} />
          <ProductOrderDetails product={product} />
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
