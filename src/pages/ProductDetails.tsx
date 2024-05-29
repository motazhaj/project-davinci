import { useParams } from "react-router-dom";
import ProductImageReview from "../components/product/ProductImageReview";
import ProductOrderDetails from "../components/product/ProductOrderDetails";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    console.log(`http://localhost:5000/products/${params.id}`);

    fetch(`http://localhost:5000/products/${params.id}`).then((data) =>
      data.json().then((data) => setProduct(data))
    );
  }, []);

  return (
    <>
      <div className="flex flex-col gap-16 relative -top-24">
        <div className="w-full pt-28 pb-8 shadow-md bg-gray-50" />
        {product && (
          <section className="w-full max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <ProductImageReview product={product} />
            <ProductOrderDetails product={product} />
          </section>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
