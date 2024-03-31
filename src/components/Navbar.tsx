const Navbar = () => {
  return (
    <nav className="w-full flex justify-between h-14 bg-lime-500 px-10 align-middle items-center">
      <a href="" className="text-white text-2xl">
        Green House
      </a>

      <ul className="flex gap-4 text-white">
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
