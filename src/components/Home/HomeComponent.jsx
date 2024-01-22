// import { useState } from "react";
import NavBar from "../Nav";
import "./home.css";
import HomeBro from "../../assets/homehero/bro.png";
import CvLogo from "../../assets/homehero/ReadCvLogo.png";
import ArrowRight from "../../assets/general/ArrowRight.png";
const Hero = () => {
  return (
    <section className="bg-surfaceBackground lg:h-screen">
      <NavBar />
      <div className="flex justify-center items-center">
        <div
          className={`z-20 flex justify-center items-center mt-[5em] lg:flex-row flex-col-reverse gap-[3em] lg:gap-[14em] w-[87%]  `}
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

            <div className="text-textPrimary flex gap-4">
              <button className="flex items-center justify-center bg-surfaceSecondary gap-1 rounded-md py-[12px] px-[24px]">
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vSvUNFmp_5p4-ixbcCKLFBmwjEdxGuwjaFOKDR4-BAFS6v5rgz9rOGux93a3qe0NghkM4f-hF_lBHPa/pub?embedded=true"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <span>
                    <img src={CvLogo} className="w-[24px] h-[24px]" />
                  </span>
                  <span>My resume</span>
                </a>
              </button>
              <button className="flex items-center justify-center bg-primaryBrand500 gap-1 rounded-md py-[12px] px-[24px]">
                <span>Get in touch</span>
                <span>
                  <img src={ArrowRight} className="w-[24px] h-[24px]" />
                </span>
              </button>
            </div>
          </div>

          {/* Img */}
          <div>
            <img src={HomeBro} width="400em" height="208.5px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
