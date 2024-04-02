import Navbar from "../components/Navbar";
import HeroBanner from "../components/home/HeroBanner";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10 min-h-svh">
        <HeroBanner />
        <NewArrivals />
      </main>
    </>
  );
};

export default Home;
