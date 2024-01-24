import "./project.css";
import SparklesOne from "../../assets/projects/Graphic (1).png";
import SparklesTwo from "../../assets/projects/Graphic (2).png";
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
      <div className="text-center flex flex-col gap-2">
        <h1 className="font-textTypo text-secondaryBrand text-base">
          Projects
        </h1>
        <h2 className="font-sectionTypo text-textPrimary text-xl ">
          Take a look at my<br className="block sm:hidden"></br> highlighted
          projects
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        {/* Sparkles */}
        <div className="">
          <img src={SparklesOne} alt="Sparkles" className="w-[62px] h-[64px]" />
        </div>

        {/* Project  */}
        <div>
          {/* Project 1 */}
          <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer">
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
              <p className="w-[35ch] text-textPrimary mt-3 text-base">
                Dashboard Chat App to connect people and spark conversations for
                QuaaPay Wallet.
              </p>
            </div>
          </div>
          {/* End of Project Card */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
