import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-16 min-h-svh w-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
