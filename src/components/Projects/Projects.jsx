import { Link } from "react-router-dom";
import "./project.css";
import SparklesOne from "../../assets/projects/Graphic (1).png";
import SparklesTwo from "../../assets/projects/Graphic (2).png";
import ArrowRight from "../../assets/general/ArrowRight.png";
import ProjectOne from "../../assets/projects/Placeholder.png";
import Tailwind from "../../assets/aboutme/Tailwind.png";
import React from "../../assets/aboutme/React.png";
import Js from "../../assets/aboutme/Frame.png";
import Vue from "../../assets/aboutme/logo vue.png";
import Html from "../../assets/aboutme/logo html5.png";
import Css from "../../assets/aboutme/logo css3.png";
import Github from "../../assets/aboutme/logo github.png";
import CvLogo from "../../assets/homehero/ReadCvLogo.png";

const Projects = () => {
  return (
    <div
      className="flex flex-col justify-center items-center pb-[3em]"
      id="projects"
    >
      <div className="text-center flex flex-col gap-2 mb-[2em]">
        <h1 className="font-textTypo text-secondaryBrand text-base">
          Projects
        </h1>
        <h2 className="font-sectionTypo text-textPrimary text-xl ">
          Take a look at my<br className="block sm:hidden"></br> highlighted
          projects
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center relative pt-[5em] pb-[3em] ">
        {/* Sparkles */}
        <div className="absolute left-[-1em] md:left-[-1.5em] md:top-0 top-[2.3em]">
          <img src={SparklesOne} alt="Sparkles" className="w-[62px] h-[64px]" />
        </div>

        {/* Project  */}
        <div className="flex gap-7 lg:gap- 5 md:flex-row flex-col md:flex-wrap md:full  justify-center items-center pb-[3em]">
          {/* Project 1 */}
          <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit">
            <div>
              <img
                src={ProjectOne}
                alt="ChatApp Project Image"
                className="w-[20em]"
              />
            </div>
            <div className="mt-2 font-sectionTypo">
              <div className="flex justify-between">
                <p className="text-textSecondary text-sm">October 2023</p>
                <p className="flex gap-3">
                  <img
                    src={Tailwind}
                    alt="Tailwind Logo"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src={Js}
                    alt="JavaScript Logo"
                    className="w-[24px] h-[22px]"
                  />
                  <img
                    src={React}
                    alt="React Logo"
                    className="w-[24px] h-[24px]"
                  />
                </p>
              </div>

              <h2 className="text-textPrimary mt-3 text-xl font-medium">
                QuaaPay Chat App
              </h2>
              <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
                Dashboard Chat App to connect people and spark conversations for
                QuaaPay Wallet.
              </p>
            </div>
          </div>
          {/* End of Project Card */}

          {/* Project 1 */}
          <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer  w-[90%] md:w-fit">
            <div>
              <img
                src={ProjectOne}
                alt="ChatApp Project Image"
                className="w-[20em]"
              />
            </div>
            <div className="mt-2 font-sectionTypo">
              <div className="flex justify-between">
                <p className="text-textSecondary text-sm">October 2023</p>
                <p className="flex gap-3">
                  <img
                    src={Tailwind}
                    alt="Tailwind Logo"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src={Js}
                    alt="JavaScript Logo"
                    className="w-[24px] h-[22px]"
                  />
                  <img
                    src={React}
                    alt="React Logo"
                    className="w-[24px] h-[24px]"
                  />
                </p>
              </div>

              <h2 className="text-textPrimary mt-3 text-xl font-medium">
                QuaaPay Chat App
              </h2>
              <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
                Dashboard Chat App to connect people and spark conversations for
                QuaaPay Wallet.
              </p>
            </div>
          </div>
          {/* End of Project Card */}

          {/* Project 1 */}
          <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer hover:z-50 md:hover:z-auto  w-[90%] md:w-fit ">
            <div>
              <img
                src={ProjectOne}
                alt="ChatApp Project Image"
                className="w-[20em]"
              />
            </div>
            <div className="mt-2 font-sectionTypo">
              <div className="flex justify-between">
                <p className="text-textSecondary text-sm">October 2023</p>
                <p className="flex gap-3">
                  <img
                    src={Tailwind}
                    alt="Tailwind Logo"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src={Js}
                    alt="JavaScript Logo"
                    className="w-[24px] h-[22px]"
                  />
                  <img
                    src={React}
                    alt="React Logo"
                    className="w-[24px] h-[24px]"
                  />
                </p>
              </div>

              <h2 className="text-textPrimary mt-3 text-xl font-medium">
                QuaaPay Chat App
              </h2>
              <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
                Dashboard Chat App to connect people and spark conversations for
                QuaaPay Wallet.
              </p>
            </div>
          </div>
          {/* End of Project Card */}

          {/* <button className=" bg-primaryBrand500 rounded-md  hover:bg-gradientPurple">
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
          </button> */}
        </div>
        {/* End of Product */}

        <button className=" bg-surfaceSecondary rounded-md hover:bg-surfaceTertiary text-textPrimary">
          <Link
            to="/contact "
            className="py-[12px] px-[15px]  sm:py-[12px] sm:px-[24px] flex items-center justify-center gap-1"
          >
            <span>See all</span>
            <span>
              <img
                src={ArrowRight}
                className="w-[24px] h-[24px]"
                alt="Arrow Right Icon"
              />
            </span>
          </Link>
        </button>

        {/* Sparkles Two */}
        <div className="absolute md:bottom-[1em] bottom-[7em] right-[-0.8em] lg:right-[-1.5em] z-30 md:z-auto">
          <img src={SparklesTwo} alt="Sparkles" className="w-[62px] h-[64px]" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
