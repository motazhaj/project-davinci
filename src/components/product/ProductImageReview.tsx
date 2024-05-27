import { productInterface } from "../../utility/productsUtils";

const ProductImageReview = ({ product }: { product: productInterface }) => {
  return (
    <div className="w-1/2 rounded-xl overflow-hidden shadow-lg">
      <img
        src="/images/outdoor-bag.jpg"
        alt={product.title}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default ProductImageReview;
