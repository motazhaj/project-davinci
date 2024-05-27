import CategoriesSection from "../components/home/CategoriesSection";
import FeaturedCollague from "../components/home/FeaturedCollague";
import HeroBanner from "../components/home/HeroBanner";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <NewArrivals />
      <CategoriesSection />
      <FeaturedCollague />
    </>
  );
};

export default Home;
