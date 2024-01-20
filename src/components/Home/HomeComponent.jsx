// import { useState } from "react";
import NavBar from "../Nav";
import "./home.css";
const Hero = () => {
  // const [navbar, setNavbar] = useState(false);
  return (
    <section className="bg-surfaceBackground h-screen">
      <NavBar />
      <div
        className={`${
          open
            ? "blur-sm h-screen md:w[50%] w-[60%] lg:hidden block"
            : "blur-none h-0"
        } `}
      >
        {/* Text */}
        <div>
          <h1 className="font-textTypo gradient bg-gradient-to-r from-gradientPurple to-gradientGreen bg-clip-text text-transparent text-2xl">
            Hi, I’m Favour
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
