import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./project.css";
import SparklesOne from "../../assets/projects/Graphic (1).png";
import SparklesTwo from "../../assets/projects/Graphic (2).png";
import ArrowRight from "../../assets/general/ArrowRight.png";

import "animate.css";
import ProjectComponent from "../ProjectCom";
// import AOS from "aos";

const Projects = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if (entry.isIntersecting) {
          //   setIsIntersecting(true);
          // }
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(animatedElementRef.current);

    return () => observer.disconnect();
  }, []);

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

      <div className="flex flex-col justify-center items-center pt-[5em] pb-[3em] relative">
        {/* Sparkles */}

        {/* <div className="justify-start items-start flex w-full lg:pb-[2em] pb-0">
          <img src={SparklesOne} alt="Sparkles" className="w-[62px] h-[64px]" />
        </div> */}

        <div className="absolute left-[-1em] md:left-[-1.5em] md:top-0 top-[2.3em]">
          <img src={SparklesOne} alt="Sparkles" className="w-[62px] h-[64px]" />
        </div>

        <ProjectComponent />

        <button className=" bg-surfaceSecondary rounded-md hover:bg-surfaceTertiary text-textPrimary">
          <Link
            to="/projectpage"
            className="py-[12px] px-[15px]  sm:py-[12px] sm:px-[24px] flex items-center justify-center gap-1"
          >
            <span>See project catalog</span>
            <span
              ref={animatedElementRef}
              className={` ${
                isIntersecting ? "animate__headShake" : ""
              } animate__animated  animate__repeat-2 inline-block  transition-all`}
            >
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
