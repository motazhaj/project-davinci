import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BestSellers from "../components/home/BestSellers";
import FeaturedCollague from "../components/home/FeaturedCollague";
import HeroBanner from "../components/home/HeroBanner";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10 min-h-svh">
        <HeroBanner />
        <NewArrivals />
        <BestSellers />
        <FeaturedCollague />
      </main>
      <Footer />
    </>
  );
};

export default Home;
