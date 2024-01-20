const NavBar = () => {
  return (
    <header className="bg-surfaceBackground w-full md:px-12 px-4 py-4">
      {/* second header */}
      <nav className="lg:flex lg:justify-between lg:items-center">
        {/* Logo Hamburger */}
        <div className="flex items-end justify-between">
          <h2 className="font-textTypo text-textPrimary text-2xl">Favour</h2>

          {/* Navbar */}
          <button
            id="menu-btn"
            className="block hamburger focus:outline-none lg:hidden"
            // onClick={toggleNav}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Links */}
        <div className="links h-0 overflow-hidden transition-all lg:h-auto bg-surfaceSecondary lg:bg-transparent absolute top-[6.5em] right-2 lg:relative lg:top-0 lg:right-0 lg:border-none  rounded-md lg:rounded-none">
          <ul className="lg:flex lg:flex-row gap-5 text-textSecondary font-sectionTypo font-normal">
            <li>
              <a
                href="#"
                className="hover:text-textPrimary hover:font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-textPrimary hover:font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-textPrimary hover:font-semibold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-textPrimary hover:font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
