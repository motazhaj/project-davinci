import LoadingSpinner from "../shared/LoadingSpinner";
import ProductCard from "./ProductCard";
import { productCardProps } from "./ProductCard";

const ProductGrid = ({ products, loading }: { products: productCardProps[]; loading: boolean }) => {
  return (
    <section className="max-w-screen-lg mx-auto px-4">
      <ul className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {loading ? (
          <LoadingSpinner />
        ) : (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </ul>
    </section>
  );
};

export default ProductGrid;
