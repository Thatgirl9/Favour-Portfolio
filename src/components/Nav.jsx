import { useState } from "react";
import "./Home/home.css";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/", newtab: false },
    { name: "About", link: "#about", newtab: false },
    { name: "Projects", link: "#projects", newtab: false },
    { name: "Contact", link: "#contact", newtab: false },
    { name: "Blog", link: "https://thatgirl.hashnode.dev/", newtab: true },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header
      className={`bg-surfaceBackground w-full md:px-14 px-6 py-4 fixed z-50 
      `}
    >
      {/* second header */}
      <nav className="md:flex md:justify-between md:items-center">
        {/* Logo Hamburger */}
        <div className="flex items-center justify-between">
          <h2 className="font-textTypo text-textPrimary text-2xl">
            Favour<span className="font-semibold">Ukonu</span>
          </h2>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="w-6 h-6 text-3xl text-textPrimary md:hidden "
          >
            <ion-icon
              name={open ? "close" : "menu"}
              className="text-textPrimary"
            ></ion-icon>
          </button>
        </div>

        {/* Links */}
        {/* <div className=" block "> */}
        <div
          className={`links h-0 overflow-hidden transition-all md:h-auto bg-surfacePrimary md:bg-transparent absolute top-[3.8em] right-0 md:relative md:top-0 md:right-0 md:border-none  md:rounded-none duration-150 ease-in-out z-50
          ${open ? "h-[100vh] md:w-[50%] w-[60%] overflow-auto" : "h-0 "}`}
        >
          <ul className="flex md:flex-row md:gap-6 text-textSecondary font-sectionTypo font-normal gap-[1.7em] justify-end md:justify-normal md:items-center items-end flex-col  px-5 py-8 mx-1 md:mx-0 md:p-0 border-b-2 border-t-0 border-surfaceSecondary md:border-none ">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="hover:text-textPrimary hover:font-semibold transition-all ease-in-out"
                  {...(link.newtab
                    ? { target: "_blank" }
                    : { target: "_self" })}
                  rel="noreferrer"
                >
                  {link.name}
                </a>
                {/* <Link
                  to={link.link}
                  className="hover:text-textPrimary hover:font-semibold transition-all ease-in-out"
                  {...(link.newtab
                    ? { target: "_blank" }
                    : { target: "_self" })}
                  rel="noreferrer"
                >
                  {link.name}
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default NavBar;
