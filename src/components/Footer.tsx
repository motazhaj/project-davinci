import { Link } from "react-router-dom";
import { navItems } from "./Navbar";

const Footer = () => {
  return (
    <footer className="w-full h-[300px] bg-lime-950 text-white p-8 mt-[128px]">
      <div className="w-full h-full max-w-[1400px] flex justify-between items-start mx-auto">
        <Link to="/" className="flex gap-2 text-3xl items-center ">
          <div className="size-16 flex justify-center items-center bg-white rounded-full">
            <img className="h-11" src="./images/greenhouse-logo.png" alt="green house logo" />
          </div>
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
      <p className="text-center">© {new Date().getFullYear()} Green House. All rights reserved</p>
    </footer>
  );
};

export default Footer;
