import "./project.css";
// import ProjectOne from "../../assets/projects/Placeholder.png";
// import ProjectTwo from "../../assets/projects/Placeholder 1.png";
// import ProjectThree from "../../assets/projects/Placeholder 2.png";
import Tailwind from "../../assets/aboutme/Tailwind.png";
import React from "../../assets/aboutme/React.png";
import Js from "../../assets/aboutme/Frame.png";
import Vue from "../../assets/aboutme/logo vue.png";
import Html from "../../assets/aboutme/logo html5.png";
import Css from "../../assets/aboutme/logo css3.png";
import Github from "../../assets/aboutme/logo github.png";
import ArrowRight from "../../assets/general/ArrowRight.png";
import Img from "../../assets/projectPage/Placeholder.png";
import ImgOne from "../../assets/projectPage/Placeholder 1.png";
import ImgTwo from "../../assets/projectPage/Placeholder 2.png";
import ImgThree from "../../assets/projectPage/Placeholder 3.png";
import { useState } from "react";

const ProjectPage = () => {
  const [projectOne, setProjectOne] = useState(false);
  const [projectTwo, setProjectTwo] = useState(false);

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
          <div
            className="project-img  overflow-hidden relative"
            onMouseEnter={() => setProjectOne(true)}
            onMouseLeave={() => setProjectOne(false)}
          >
            <img src={Img} alt="To-do App Project Image" className="w-[20em]" />

            {projectOne && (
              <div className="absolute top-[4em] right-1 transform -translate-y-1/2 project-icon z-30 flex flex-col gap-1">
                <button className="bg-surfaceSecondary p-1 rounded-md border border-transparent hover:border-secondaryBrand">
                  <a
                    href="https://github.com/Thatgirl9/Todo-App-Vue"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.3569 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z"
                        fill="#F5F6F6"
                      />
                    </svg>
                  </a>
                </button>

                <button className="bg-surfaceSecondary p-1 rounded-md border border-transparent hover:border-secondaryBrand">
                  <a
                    href="https://thatgirl9-todo-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={ArrowRight}
                      className="w-[22px] h-[22px] transform rotate-[310deg] "
                      alt="Arrow Right Icon"
                    />
                  </a>
                </button>
              </div>
            )}
          </div>
          <div className="mt-2 font-sectionTypo">
            <div className="flex justify-between">
              <p className="text-textSecondary text-sm">November 2023</p>
              <p className="flex gap-3">
                <img src={Css} alt="CSS Logo" className="w-[24px] h-[22px]" />
                <img
                  src={Js}
                  alt="JavaScript Logo"
                  className="w-[24px] h-[22px]"
                />
                <img src={Vue} alt="Vue Logo" className="w-[24px] h-[22px]" />
              </p>
            </div>

            <h2 className="text-textPrimary mt-3 text-xl font-medium">
              To-do App
            </h2>
            <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
              Create new tasks on the to-do list and mark tasks as completed
              when finished.
            </p>
          </div>
        </div>
        {/* End of Project Card */}

        {/* Project 2 */}
        <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer  w-[90%] md:w-fit">
          <div
            className="project-img  overflow-hidden relative"
            onMouseEnter={() => setProjectTwo(true)}
            onMouseLeave={() => setProjectTwo(false)}
          >
            <img
              src={ImgTwo}
              alt="Podcast Project Image"
              className="w-[20em]"
            />

            {projectTwo && (
              <div className="absolute top-[4em] right-1 transform -translate-y-1/2 project-icon z-30 flex flex-col gap-1">
                <button className="bg-surfaceSecondary p-1 rounded-md border border-transparent hover:border-secondaryBrand">
                  <a
                    href="https://github.com/Thatgirl9/City-Skyline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.3569 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z"
                        fill="#F5F6F6"
                      />
                    </svg>
                  </a>
                </button>

                <button className="bg-surfaceSecondary p-1 rounded-md border border-transparent hover:border-secondaryBrand">
                  <a
                    href="https://thatgirl9.github.io/City-Skyline/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={ArrowRight}
                      className="w-[22px] h-[22px] transform rotate-[310deg] "
                      alt="Arrow Right Icon"
                    />
                  </a>
                </button>
              </div>
            )}
          </div>
          <div className="mt-2 font-sectionTypo">
            <div className="flex justify-between">
              <p className="text-textSecondary text-sm">December 2022</p>
              <p className="flex gap-3">
                <img src={Html} alt="Html Logo" className="w-[20px] h-[20px]" />
                <img src={Css} alt="CSS Logo" className="w-[20px] h-[20px]" />
              </p>
            </div>

            <h2 className="text-textPrimary mt-3 text-xl font-medium">
              City SkyLine
            </h2>
            <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
              Podcast page to deliver captivating audio contents to its
              audience.
            </p>
          </div>
        </div>
        {/* End of Project Card */}

        {/* Project 3 */}
        <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit ">
          <div>
            <img
              src={ImgThree}
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

        {/* Project 4 */}
        <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit">
          <div>
            <img
              src={ImgOne}
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

        {/* Project 5 */}
        <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer  w-[90%] md:w-fit">
          <div>
            <img
              src={ImgTwo}
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

        {/* Project 6 */}
        <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit ">
          <div>
            <img
              src={ImgThree}
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
