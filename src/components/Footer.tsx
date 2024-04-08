const Footer = () => {
  const navItems = ["Products", "Projects", "About", "Contact"];

  return (
    <footer className="w-full h-[300px] bg-lime-950 text-white p-8 mt-[128px]">
      <div className="w-full h-full max-w-[1400px] flex justify-between items-start mx-auto">
        <a href="" className="flex gap-2 text-3xl items-center ">
          <div className="size-16 flex justify-center items-center bg-white rounded-full">
            <img className="h-11" src="./images/greenhouse-logo.png" alt="green house logo" />
          </div>
          <div className="font-bold">Green House</div>
        </a>
        <div>
          <ul className="flex flex-col gap-8 text-base font-bold items-center">
            {navItems.map((item) => {
              return (
                <li key={item} className="hover:scale-125 hover:text-lime-600 transition-all">
                  <a href="">{item}</a>
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
