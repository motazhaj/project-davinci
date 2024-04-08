import { Link } from "react-router-dom";

export const navItems = [
  { id: 0, name: "Products", link: "/products" },
  { id: 1, name: "Projects", link: "/projects" },
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full absolute z-50 p-14 text-green-950">
      <div className="h-full flex justify-between align-middle items-center mx-auto px-8">
        <Link to="/" className="flex gap-2 text-3xl items-center ">
          <img className="h-11" src="./images/greenhouse-logo.png" alt="green house logo" />
          <div className="font-bold">Green House</div>
        </Link>

        <ul className="flex gap-8 text-base font-bold items-center">
          {navItems.map((item) => {
            return (
              <li key={item.id} className="hover:scale-125 hover:text-lime-600 transition-all">
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
