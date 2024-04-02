import Navbar from "../components/Navbar";
import BestSellers from "../components/home/BestSellers";
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
      </main>
    </>
  );
};

export default Home;
