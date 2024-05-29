import { productInterface } from "../../utility/productsUtils";

const ProductImageReview = ({ product }: { product: productInterface }) => {
  return (
    <div className="size-[350px] md:size-[600px] rounded-xl overflow-hidden shadow-lg">
      <img src={product.image} alt={product.title} className="size-full object-cover" />
    </div>
  );
};

export default ProductImageReview;
