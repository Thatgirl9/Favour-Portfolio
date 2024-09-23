import { useState } from "react";
import ProjectOne from "../assets/projects/Placeholder.png";
import ProjectTwo from "../assets/projects/Placeholder 2.png";
import ProjectThree from "../assets/projects/Placeholder 3.png";
// import Project
import Tailwind from "../assets/aboutme/Tailwind.png";
import React from "../assets/aboutme/React.png";
import Js from "../assets/aboutme/Frame.png";
import Vue from "../assets/aboutme/logo vue.png";
import ArrowRight from "../assets/general/ArrowRight.png";
const ProjectComponent = () => {
  // To track the hovered Project Image
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);

  return (
    <div className="flex gap-7 lg:gap- 5 md:flex-row flex-col md:flex-wrap md:full  justify-center items-center pb-[3em] ">


     {/* Project 1 */}
     <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer  w-[90%] md:w-fit">
        <div
          className="project-img  overflow-hidden relative"
          onMouseEnter={() => setIsHoveredTwo(true)}
          onMouseLeave={() => setIsHoveredTwo(false)}
        >
          <img
            src={ProjectOne}
            alt="ChatApp Project Image"
            className="w-[20em]"
          />

          {isHoveredTwo && (
            <div className="absolute top-[4em] right-1 transform -translate-y-1/2 project-icon z-30 flex flex-col gap-1">
              <button className="bg-surfaceSecondary p-1 rounded-md border border-transparent hover:border-secondaryBrand">
                <a
                  href="https://github.com/Thatgirl9/Fitness-clinic"
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
                  href="https://fitness-clinic.netlify.app/"
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
            <p className="text-textSecondary text-sm">July 2024</p>
            <p className="flex gap-3">

           
              <img
                src={Tailwind}
                alt="Tailwind Logo"
                className="w-[24px] h-[24px]"
              />
              <svg width="24" height="24" viewBox="0 0 128 128" fill="none">
                <path fill="#2C243B" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#9955E8"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
              <svg viewBox="0 0 128 128" width="24" height="24" fill="#9955E8">
            <circle cx="64" cy="64" r="64"></circle><path fill="#2c243B" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"></path><path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#2c243B"></stop><stop offset="1" stopColor="#2c243B"stopOpacity="0"></stop></linearGradient><linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#2c243B"></stop><stop offset="1" stopColor="#2c243B"stopOpacity="0"></stop></linearGradient></defs>
            </svg>
            </p>
          </div>

          <h2 className="text-textPrimary mt-3 text-xl font-medium">
            Fitness Clinic
          </h2>
          <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
           Fitness Clinic helps users to stay fit while tracking their progress.
          </p>
        </div>
      </div>
      {/* End of Project Card */}


      {/* Project 1 */}
      <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit ">
        <div
          className="project-img  overflow-hidden relative"
          onMouseEnter={() => setIsHoveredThree(true)}
          onMouseLeave={() => setIsHoveredThree(false)}
        >
          <img
            src={ProjectThree}
            alt="Noir Chef Project Image"
            className="w-[20em]"
          />

          {isHoveredThree && (
            <div className="absolute top-[4em] right-1 transform -translate-y-1/2 project-icon z-30 flex flex-col gap-1">
              <button className="bg-surfaceSecondary p-1 rounded-md border border-transparent hover:border-secondaryBrand">
                <a
                  href="https://github.com/Thatgirl9/Linkly"
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
                  href="https://lin-kly.netlify.app/"
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
            <p className="text-textSecondary text-sm">March 2024</p>
            <p className="flex gap-3">
              <img
                src={Tailwind}
                alt="Tailwind Logo"
                className="w-[24px] h-[24px]"
              />
              <svg width="24" height="24" viewBox="0 0 128 128" fill="none">
                <path fill="#2C243B" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#9955E8"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
              <img src={React} alt="Vue Logo" className="w-[24px] h-[24px]" />
            </p>
          </div>

          <h2 className="text-textPrimary mt-3 text-xl font-medium">Linkly</h2>
          <p className="w-[33ch] md:w-[35ch] text-textPrimary mt-3 text-base">
            A URL Shortener that takes a long link and shortens it, generates a
            QR code.
          </p>
        </div>
      </div>
      {/* End of Project Card */}

      {/* Project 1 */}
      <div className="bg-surfacePrimary p-[1.3em] pb-[2em] rounded-xl hover:border hover:border-secondaryBrand project-card hover:cursor-pointer w-[90%] md:w-fit project-div">
        <div
          className="project-img  overflow-hidden relative"
          onMouseEnter={() => setIsHoveredOne(true)}
          onMouseLeave={() => setIsHoveredOne(false)}
        >
          <img
            src={ProjectTwo}
            alt="Noir Chef Project Image"
            className="w-[20em]"
          />

          {isHoveredOne && (
            <div className="absolute top-[4em] right-1 transform -translate-y-1/2 project-icon z-30 flex flex-col gap-1">
              <button className="bg-surfaceSecondary p-1 rounded-md border border-transparent hover:border-secondaryBrand">
                <a
                  href="https://github.com/Thatgirl9/Noir-Chef"
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
                  href="https://noir-chef.netlify.app/"
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
            A restaurant that specializes in Homestyle Sushi and Dining Events.
          </p>
        </div>
      </div>
      {/* End of Project Card */}

     
    </div>
  );
};

export default ProjectComponent;
