import AboutMe from "./components/AboutMe/Aboutme";
import ContactMe from "./components/ContactMe/Contact";
import Footer from "./components/Footer";
import HomeComponent from "./components/Home/HomeComponent";
import Projects from "./components/Projects/Projects";

const Portfolio = () => {
  return (
    <div className="bg-surfaceBackground">
      <HomeComponent />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Portfolio;
