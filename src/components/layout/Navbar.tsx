import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export const navItems = [
  { id: 0, name: "Categories", link: "/categories" },
  { id: 1, name: "Products", link: "/products" },
  // { id: 2, name: "Projects", link: "/projects" },
  { id: 3, name: "About Us", link: "/about" },
  // { id: 4, name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full sticky z-50 h-24 pb-0 text-green-950">
      <div className="h-full flex justify-between items-end max-w-screen-lg mx-auto px-4">
        <Link to="/" className="flex gap-2 text-3xl items-center ">
          <img className="h-11" src="/images/greenhouse-logo.png" alt="green house logo" />
          <div className="font-bold">Green House</div>
        </Link>
        <div className="flex gap-10">
          <ul className="flex gap-6 justify-end text-base font-bold items-center">
            {navItems.map((item) => {
              return (
                <li key={item.id} className="hover:scale-125 hover:text-primary transition-all">
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-6 justify-end text-base font-bold items-center">
            <li className="hover:scale-125 hover:text-primary transition-all">
              <Link to={"/cart"}>
                <FaShoppingCart className="text-xl" />
              </Link>
            </li>
            <li className="hover:scale-125 hover:text-red-600 transition-all">
              <Link to={`/favourites`}>
                <FaHeart className="text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
