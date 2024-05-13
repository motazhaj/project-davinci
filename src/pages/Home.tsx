import Categories from "../components/home/Categories";
import FeaturedCollague from "../components/home/FeaturedCollague";
import HeroBanner from "../components/home/HeroBanner";
import NewArrivals from "../components/home/NewArrivals";

const newArrivals = [
  { id: 0, title: "Outdoor Bag XL", category: "School Bag", price: "39.99" },
  { id: 1, title: "Outdoor Bag XL", category: "School Bag", price: "39.99" },
  { id: 2, title: "Outdoor Bag XL", category: "School Bag", price: "39.99" },
  { id: 3, title: "Outdoor Bag XL", category: "School Bag", price: "39.99" },
  { id: 4, title: "Outdoor Bag XL", category: "School Bag", price: "39.99" },
];
const categories = [
  { id: 0, title: "Note Books" },
  { id: 1, title: "Note Books" },
  { id: 2, title: "Note Books" },
  { id: 3, title: "Note Books" },
  { id: 4, title: "Note Books" },
];

const Home = () => {
  return (
    <>
      <HeroBanner />
      <NewArrivals list={newArrivals} />
      <Categories list={categories} />
      <FeaturedCollague />
    </>
  );
};

export default Home;
