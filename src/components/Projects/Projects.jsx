import "./project.css";
import SparklesOne from "../../assets/projects/Graphic (1).png";
import SparklesTwo from "../../assets/projects/Graphic (2).png";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="projects">
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
        <div>
          <img src={SparklesOne} alt="Sparkles" className="w-[62px] h-[64px]" />
        </div>

        {/* Project  */}
        <div>{/* Project 1 */}</div>
      </div>
    </div>
  );
};

export default Projects;
