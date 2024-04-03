const Navbar = () => {
  const navItems = ["Products", "Projects", "About", "Contact"];

  return (
    <nav className="w-full absolute z-50 p-14 text-green-950">
      <div className="h-full flex justify-between align-middle items-center mx-auto px-8">
        <a href="" className="flex gap-2 text-3xl items-center ">
          <img
            className="h-11"
            src="./images/greenhouse-logo.png"
            alt="green house logo"
          />
          <div className="font-bold">Green House</div>
        </a>

        <ul className="flex gap-8 text-base font-bold items-center">
          {navItems.map((item) => {
            return (
              <li className="hover:scale-125 hover:text-lime-600 transition-all">
                <a href="">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
