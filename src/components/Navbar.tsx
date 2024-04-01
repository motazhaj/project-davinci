const Navbar = () => {
  const navItems = ["Products", "Projects", "About", "Contact"];

  return (
    <nav className="w-full fixed z-50 flex justify-between h-14 shadow-xl bg-lime-500/60 backdrop-blur-md px-24 align-middle items-center">
      <a href="" className="flex gap-4 text-white text-2xl items-center ">
        <img className="h-9" src="./images/greenhouse-logo.png" alt="green house logo" />
        <div className="font-bold">Green House</div>
      </a>

      <ul className="flex gap-8 text-lg text-white font-bold items-center">
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
