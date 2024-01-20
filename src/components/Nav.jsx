import { useState } from "react";
import "./Home/home.css";

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
        <div className="flex ">
          {/* <div
            className={`${
              open
                ? "blur-sm h-screen md:w[50%] w-[60%] lg:hidden block"
                : "blur-none h-0"
            }  absolute top-[3.8em] left-0 lg:relative lg:top-0 lg:left-0 lg:h-auto border-2 w-1/2 h-screen z-30`}
          >
            {" "}
          </div> */}
          <div
            className={`links h-0 overflow-hidden transition-all lg:h-auto bg-surfacePrimary lg:bg-transparent absolute top-[3.8em] right-0 lg:relative lg:top-0 lg:right-0 lg:border-none  lg:rounded-none duration-150 ease-in-out
          ${open ? "h-[100vh] md:w-[50%] w-[60%] overflow-auto" : "h-0 "}`}
          >
            <ul className="flex lg:flex-row lg:gap-6 text-textSecondary font-sectionTypo font-normal gap-[1.7em] justify-end lg:justify-normal lg:items-center items-end flex-col  px-5 py-8 mx-1 lg:mx-0 lg:p-0 border-b-2 border-t-0 border-surfaceSecondary lg:border-none">
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
