import "./project.css";

const ProjectPage = () => {
  return (
    <section className="bg-surfaceBackground">
      <div className="text-center flex flex-col gap-2 mb-[2em]">
        <h1 className="font-textTypo text-secondaryBrand text-base">
          Project Catalog
        </h1>
        <p className="text-textSecondary font-sectionTypo">
          Here are some of my projects
        </p>
      </div>
    </section>
  );
};

export default ProjectPage;
