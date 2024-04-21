import { Link } from "react-router-dom";

export const navItems = [
  { id: 0, name: "Categories", link: "/categories" },
  { id: 1, name: "Products", link: "/products" },
  { id: 2, name: "Projects", link: "/projects" },
  { id: 3, name: "About Us", link: "/about" },
  { id: 4, name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full absolute z-50 py-14 pb-0 text-green-950">
      <div className="h-full flex justify-between align-middle items-center max-w-screen-lg mx-auto px-4">
        <Link to="/" className="flex gap-2 text-3xl items-center ">
          <img className="h-11" src="/images/greenhouse-logo.png" alt="green house logo" />
          <div className="font-bold">Green House</div>
        </Link>

        <ul className="flex gap-16 justify-end text-base font-bold items-center">
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
