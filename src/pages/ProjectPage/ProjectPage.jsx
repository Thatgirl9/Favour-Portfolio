import "./project.css";
import ProjectOne from "../../assets/projects/Placeholder.png";
import ProjectTwo from "../../assets/projects/Placeholder 1.png";
import ProjectThree from "../../assets/projects/Placeholder 2.png";
import Tailwind from "../../assets/aboutme/Tailwind.png";
import React from "../../assets/aboutme/React.png";
import Js from "../../assets/aboutme/Frame.png";
import Vue from "../../assets/aboutme/logo vue.png";
import Html from "../../assets/aboutme/logo html5.png";
import Css from "../../assets/aboutme/logo css3.png";
import Github from "../../assets/aboutme/logo github.png";

const ProjectPage = () => {
  return (
    <section className="bg-surfaceBackground">
      <div className="text-center flex flex-col gap-2 py-[2em] pb-[5em]">
        <h1 className="font-textTypo text-secondaryBrand text-base">
          Project Catalog
        </h1>
        <p className="font-sectionTypo text-textPrimary text-xl ">
          Here are other projects of mine
        </p>
      </div>

      {/* Project  */}
      <div className="flex gap-10 lg:gap- 5 md:flex-row flex-col md:flex-wrap md:full  justify-center items-center pb-[3em] ">
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
              src={ProjectTwo}
              alt="Podcast Project Image"
              className="w-[20em]"
            />
          </div>
          <div className="mt-2 font-sectionTypo">
            <div className="flex justify-between">
              <p className="text-textSecondary text-sm">May 2023</p>
              <p className="flex gap-3">
                <img src={Html} alt="Html Logo" className="w-[20px] h-[20px]" />
                <img src={Css} alt="CSS Logo" className="w-[20px] h-[20px]" />
              </p>
            </div>

            <h2 className="text-textPrimary mt-3 text-xl font-medium">
              Podcast Landing Page
            </h2>
            <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
              Podcast page to deliver captivating audio contents to its
              audience.
            </p>
          </div>
        </div>
        {/* End of Project Card */}

        {/* Project 1 */}
        <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit ">
          <div>
            <img
              src={ProjectThree}
              alt="Noir Chef Project Image"
              className="w-[20em]"
            />
          </div>
          <div className="mt-2 font-sectionTypo">
            <div className="flex justify-between">
              <p className="text-textSecondary text-sm">January 2024</p>
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
                <img src={Vue} alt="Vue Logo" className="w-[20px] h-[20px]" />
              </p>
            </div>

            <h2 className="text-textPrimary mt-3 text-xl font-medium">
              Noir Chef Landing Page
            </h2>
            <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
              A restaurant that specializes in Homestyle Sushi and Dining
              Events.
            </p>
          </div>
        </div>
        {/* End of Project Card */}

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
              src={ProjectTwo}
              alt="Podcast Project Image"
              className="w-[20em]"
            />
          </div>
          <div className="mt-2 font-sectionTypo">
            <div className="flex justify-between">
              <p className="text-textSecondary text-sm">May 2023</p>
              <p className="flex gap-3">
                <img src={Html} alt="Html Logo" className="w-[20px] h-[20px]" />
                <img src={Css} alt="CSS Logo" className="w-[20px] h-[20px]" />
              </p>
            </div>

            <h2 className="text-textPrimary mt-3 text-xl font-medium">
              Podcast Landing Page
            </h2>
            <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
              Podcast page to deliver captivating audio contents to its
              audience.
            </p>
          </div>
        </div>
        {/* End of Project Card */}

        {/* Project 1 */}
        <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit ">
          <div>
            <img
              src={ProjectThree}
              alt="Noir Chef Project Image"
              className="w-[20em]"
            />
          </div>
          <div className="mt-2 font-sectionTypo">
            <div className="flex justify-between">
              <p className="text-textSecondary text-sm">January 2024</p>
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
                <img src={Vue} alt="Vue Logo" className="w-[20px] h-[20px]" />
              </p>
            </div>

            <h2 className="text-textPrimary mt-3 text-xl font-medium">
              Noir Chef Landing Page
            </h2>
            <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
              A restaurant that specializes in Homestyle Sushi and Dining
              Events.
            </p>
          </div>
        </div>
        {/* End of Project Card */}
      </div>
      {/* End of Project */}

      <footer className="pt-[5em] pb-[2em] flex justify-center items-center">
        <div>
          <p className="text-textSecondary flex justify-center items-center gap-1">
            To see more, Please visit my
            <a
              className="flex items-center gap-1"
              href="https://github.com/Thatgirl9"
              target="_blank"
              rel="noreferrer"
            >
              Github{" "}
              <span>
                <img
                  src={Github}
                  alt="Github Logo"
                  className="w-[24px] h-[24px]"
                />
              </span>
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ProjectPage;
