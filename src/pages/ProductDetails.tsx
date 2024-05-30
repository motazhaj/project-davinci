import { useParams } from "react-router-dom";
import ProductImageReview from "../components/product/ProductImageReview";
import ProductOrderDetails from "../components/product/ProductOrderDetails";
import { useEffect, useState } from "react";
import NavSpacer from "../components/layout/NavSpacer";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.id}`).then((data) => data.json().then((data) => setProduct(data)));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-16 relative -top-24">
        <NavSpacer />
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
