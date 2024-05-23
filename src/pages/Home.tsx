import Categories from "../components/home/Categories";
import FeaturedCollague from "../components/home/FeaturedCollague";
import HeroBanner from "../components/home/HeroBanner";
import NewArrivals from "../components/home/NewArrivals";

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
      <NewArrivals />
      <Categories list={categories} />
      <FeaturedCollague />
    </>
  );
};

export default Home;
