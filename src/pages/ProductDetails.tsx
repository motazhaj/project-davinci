import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const product = {
  id: 0,
  title: "Product 1",
  category: "Category 1",
  descripion: "This is product 1, a great product.",
  price: "10.99",
  image: "product1.jpg",
};

const ProductDetails = () => {
  return (
    <>
      <div className="w-full pt-28 pb-8 shadow-md bg-gray-50" />
      <section className="w-full max-w-screen-lg mx-auto px-4 flex justify-between">
        <div className="w-1/2 rounded-xl overflow-hidden shadow-lg">
          <img src="/images/outdoor-bag.jpg" alt={product.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-4 w-1/2 p-8">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-400">{product.category}</p>
          <p className="h-32 overflow-auto">{product.descripion}</p>
          <p className="text-4xl font-bold">₪ {product.price}</p>
          <hr />
          <div className="flex gap-8 items-center">
            <p className="text-xl font-semibold">Quantity</p>
            <input
              className="bg-slate-200 rounded-lg p-2 text-center w-24 focus:outline outline-lime-500"
              type="number"
              placeholder="1"
              step={1}
            />
          </div>
          <div className="w-full flex gap-4 pt-10">
            <button className="w-full p-4 bg-lime-600 rounded-xl text-white flex gap-4 items-center justify-center transition-all hover:scale-105 hover:bg-lime-300 hover:text-black">
              <IoCart size={24} />
              <p className="text-xl font-semibold">Add to cart</p>
            </button>

            <button className="w-full p-4 bg-gray-200 rounded-xl flex gap-4 items-center justify-center transition-all hover:scale-105 hover:bg-red-500 hover:text-white">
              <FaRegHeart size={24} />
              <p className="text-xl font-semibold">Add to favourites</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
