import { useState } from "react";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header className="bg-surfaceBackground w-full md:px-12 px-4 py-4">
      {/* second header */}
      <nav className="lg:flex lg:justify-between lg:items-center">
        {/* Logo Hamburger */}
        <div className="flex items-center justify-between">
          <h2 className="font-textTypo text-textPrimary text-2xl">Favour</h2>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="w-6 h-6 text-3xl text-textPrimary lg:hidden "
          >
            <ion-icon
              name={open ? "close" : "menu"}
              className="text-textPrimary"
            ></ion-icon>
          </button>
        </div>

        {/* Links */}
        <div
          className={`links h-0 overflow-hidden transition-all lg:h-auto bg-surfaceSecondary lg:bg-transparent absolute top-[4em] right-0 lg:relative lg:top-0 lg:right-0 lg:border-none  lg:rounded-none duration-150 ease-in-out
          ${open ? "h-[100vh] md:w-[50%] w-[60%] overflow-auto" : "h-0 "}`}
        >
          <ul className="flex lg:flex-row lg:gap-5 text-textSecondary font-sectionTypo font-normal gap-[2em] justify-end lg:justify-normal lg:items-center items-end flex-col pr-2 lg:pr-0">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="hover:text-textPrimary hover:font-semibold transition-all ease-in-out"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
