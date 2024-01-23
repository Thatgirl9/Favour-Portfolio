import { Link, Outlet } from "react-router-dom";
import NavBar from "../Nav";
import "./home.css";
import HomeBro from "../../assets/homehero/bro.png";
import CvLogo from "../../assets/homehero/ReadCvLogo.png";
import ArrowRight from "../../assets/general/ArrowRight.png";
import ArrowImg from "../../assets/homehero/Graphic.png";

const Hero = () => {
  return (
    <section className="bg-surfaceBackground">
      <NavBar />
      <div className="flex justify-center items-center  flex-col relative md:pb-[7em] pb-[3em] ">
        <div
          className={`z-20 flex justify-center items-center mt-[5em] lg:flex-row flex-col-reverse gap-[3em] lg:gap-[14em] w-[87%]`}
          // ${
          //   open
          //     ? "blur-sm h-screen md:w[50%] w-[60%] lg:hidden block"
          //     : "blur-none h-0"
          // }
        >
          {/* Text */}
          <div className="text-textPrimary font-sectionTypo flex flex-col">
            <h1 className="font-textTypo gradient bg-gradient-to-r from-gradientPurple to-gradientGreen bg-clip-text text-transparent text-3xl mb-[1em]">
              Hi, I’m Favour
            </h1>
            <h3 className="text-xl font-medium mb-[0.5em]">
              Front-End developer and Web developer
            </h3>
            <p className="text-textSecondary text-base mb-[1.8em]">
              I specialize in building innovative web applications using
              <br className="hidden lg:block"></br> technologies such as
              JavaScript, React.js, and Vue.js.
            </p>

            <div className="text-textPrimary flex gap-4 ">
              <button className=" bg-surfaceSecondary rounded-md hover:bg-surfaceTertiary">
                <Link
                  to=""
                  className="flex items-center justify-center gap-1 py-[12px] px-[20px]  sm:py-[12px] sm:px-[24px]"
                >
                  <span>
                    <img
                      src={CvLogo}
                      className="w-[24px] h-[24px]"
                      alt="Book Icon"
                    />
                  </span>
                  <span>My resume</span>
                </Link>
              </button>

              <button className=" bg-primaryBrand500 rounded-md  hover:bg-gradientPurple ">
                <Link
                  to="/contact "
                  className="py-[12px] px-[15px]  sm:py-[12px] sm:px-[24px] flex items-center justify-center gap-1"
                >
                  <span>Get in touch</span>
                  <span>
                    <img
                      src={ArrowRight}
                      className="w-[24px] h-[24px]"
                      alt="Arrow Right Icon"
                    />
                  </span>
                </Link>
              </button>
            </div>
          </div>

          {/* Img */}
          <div>
            <img
              src={HomeBro}
              width="400em"
              height="208.5px"
              alt="Hands Typing on a keyboard"
            />
          </div>
        </div>

        {/* Arrow Img */}
        {/* Phone and Laptop view */}
        <img
          src={ArrowImg}
          width="121.069px"
          height="33.707px"
          alt="Arrow Illustration"
          className="absolute -bottom-[4em] md:bottom-0 lg:right-[26em]  right-[4em] z-50 md:hidden lg:block"
        />

        {/* Tablet view */}
        <img
          src={ArrowImg}
          width="121.069px"
          height="33.707px"
          alt="Arrow Illustration"
          className="absolute -bottom-[4em] md:bottom-0 lg:right-[26em]  right-[4em] z-50 left-[8em] hidden md:block lg:hidden"
        />
      </div>
      <Outlet></Outlet>
    </section>
  );
};

export default Hero;
