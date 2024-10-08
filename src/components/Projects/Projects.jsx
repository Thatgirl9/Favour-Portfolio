import { useRef, useEffect, useState } from "react";
import "./project.css";
import SparklesOne from "../../assets/projects/Graphic (1).png";
import SparklesTwo from "../../assets/projects/Graphic (2).png";
import Github from "../../assets/aboutme/logo github.png";

import "animate.css";
import ProjectComponent from "../ProjectCom";

const Projects = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
        
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
      className="flex flex-col justify-center items-center pb-[3em] scroll-m-20"
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

       

        <div className="absolute left-[-1em] md:left-[-1.5em] md:top-0 top-[2.3em]">
          <img src={SparklesOne} alt="Sparkles" className="w-[62px] h-[64px]" />
        </div>

        <ProjectComponent />

        <button className=" bg-surfaceSecondary rounded-md hover:bg-surfaceTertiary text-textPrimary">
        
             <a
              className="flex items-center gap-1  justify-center py-[12px] px-[15px]  sm:py-[12px] sm:px-[24px]"
              href="https://github.com/Thatgirl9"
              target="_blank"
              rel="noreferrer"
            >
            <span>See more on Github</span>
            <span
              ref={animatedElementRef}
              className={` ${
                isIntersecting ? "animate__headShake" : ""
              } animate__animated  animate__repeat-2 inline-block  transition-all`}
            >
              <img
                  src={Github}
                  alt="Github Logo"
                  className="w-[24px] h-[24px]"
                />
            </span>
            </a>
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
