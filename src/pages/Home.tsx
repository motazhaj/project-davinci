import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/home/Categories";
import FeaturedCollague from "../components/home/FeaturedCollague";
import HeroBanner from "../components/home/HeroBanner";
import NewArrivals from "../components/home/NewArrivals";

const newArrivals = [
  { id: 0, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 1, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 2, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 3, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
  { id: 4, title: "Outdoor Bag XL", category: "School Bag", price: "39.99", image: "outdoor-bag.jpg" },
];
const categories = [
  { id: 0, category: "Note Books", image: "notebooks.webp" },
  { id: 1, category: "Note Books", image: "notebooks.webp" },
  { id: 2, category: "Note Books", image: "notebooks.webp" },
  { id: 3, category: "Note Books", image: "notebooks.webp" },
  { id: 4, category: "Note Books", image: "notebooks.webp" },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-[64px] min-h-svh w-screen">
        <HeroBanner />
        <NewArrivals list={newArrivals} />
        <Categories list={categories} />
        <FeaturedCollague />
      </main>
      <Footer />
    </>
  );
};

export default Home;
