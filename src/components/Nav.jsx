import { useState } from "react";
import "./Home/home.css";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const NavBar = () => {
  // NavBar.propTypes = {
  //   setOpen: PropTypes.func.isRequired,
  //   open: PropTypes.bool.isRequired,
  // };

  let Links = [
    { name: "Home", link: "/", newtab: false },
    { name: "About", link: "#about", newtab: false },
    { name: "Projects", link: "#projects", newtab: false },
    { name: "Contact", link: "#contact", newtab: false },
    { name: "Blog", link: "https://thatgirl.hashnode.dev/", newtab: true },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header className="bg-surfaceBackground w-full md:px-14 px-6 py-4 fixed z-50">
      {/* second header */}
      <nav className="lg:flex lg:justify-between lg:items-center">
        {/* Logo Hamburger */}
        <div className="flex items-center justify-between">
          <h2 className="font-textTypo text-textPrimary text-2xl">
            Favour<span className="font-semibold">Ukonu</span>
          </h2>

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
        <div className=" block">
          {/* <div
            className={`${
              open
                ? "fixed top-[3.8em] left-0 z-20 h-screen md:w[50%] w-[60%] lg:hidden block bg-transparent blur-2xl"
                : "blur-none h-0"
            }  fixed top-[3.8em] left-0 lg:relative lg:top-0 lg:left-0 lg:h-screen w-1/2 h-screen z-30 bg-blend-overlay block lg:hidden `}
          >
            {" "}
          </div> */}
          <div
            className={`links h-0 overflow-hidden transition-all lg:h-auto bg-surfacePrimary lg:bg-transparent absolute top-[3.8em] right-0 lg:relative lg:top-0 lg:right-0 lg:border-none  lg:rounded-none duration-150 ease-in-out z-50
          ${open ? "h-[100vh] md:w-[50%] w-[60%] overflow-auto" : "h-0 "}`}
          >
            <ul className="flex lg:flex-row lg:gap-6 text-textSecondary font-sectionTypo font-normal gap-[1.7em] justify-end lg:justify-normal lg:items-center items-end flex-col  px-5 py-8 mx-1 lg:mx-0 lg:p-0 border-b-2 border-t-0 border-surfaceSecondary lg:border-none">
              {Links.map((link) => (
                <li key={link.name}>
                  {/* <Link
                    to={link.link}
                    // target="_blank"
                    // rel="noreferrer"
                    className="hover:text-textPrimary hover:font-semibold transition-all ease-in-out"
                  >
                    {link.name}
                  </Link> */}
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
