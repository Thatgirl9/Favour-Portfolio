import AboutMe from "./components/AboutMe/Aboutme";
import HomeComponent from "./components/Home/HomeComponent";
import Projects from "./components/Projects/Projects";

const Portfolio = () => {
  return (
    <div className="bg-surfaceBackground">
      <HomeComponent />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Portfolio;
