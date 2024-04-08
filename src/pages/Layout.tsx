import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-[64px] min-h-svh w-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
