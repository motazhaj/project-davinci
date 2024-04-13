import { Link } from "react-router-dom";
import { navItems } from "./Navbar";

const Footer = () => {
  return (
    <footer className="w-full h-[300px] bg-gray-100 p-8 mt-[128px] shadow-inner">
      <div className="w-full h-full max-w-screen-lg flex justify-between items-start mx-auto">
        <Link to="/" className="flex gap-2 text-3xl items-center ">
          <img className="h-11" src="./images/greenhouse-logo.png" alt="green house logo" />
          <div className="font-bold">Green House</div>
        </Link>
        <div>
          <ul className="flex flex-col gap-8 text-base font-bold items-center">
            {navItems.map((item) => {
              return (
                <li key={item.id} className="hover:scale-125 hover:text-lime-600 transition-all">
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className="text-center py-2 border-t border-lime-500">
        © {new Date().getFullYear()} Green House. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
