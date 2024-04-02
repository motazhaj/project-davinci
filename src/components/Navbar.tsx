const Navbar = () => {
  const navItems = ["Products", "Projects", "About", "Contact"];

  return (
    <nav className="w-full z-50 fixed flex justify-between h-14 backdrop-blur-md px-24 align-middle items-center text-green-800">
      <a href="" className="flex gap-4 text-2xl items-center ">
        <img className="h-9 drop-shadow-md" src="./images/greenhouse-logo.png" alt="green house logo" />
        <div className="font-bold">Green House</div>
      </a>

      <ul className="flex gap-8 text-sm font-bold items-center">
        {navItems.map((item) => {
          return (
            <li className="hover:scale-125 hover:text-orange-300 transition-all">
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
