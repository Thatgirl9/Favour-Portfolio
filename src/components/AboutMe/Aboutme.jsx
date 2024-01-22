import "./About.css";
import GirlIllustration from "../../assets/aboutme/bro.png";
import Tailwind from "../../assets/aboutme/Tailwind.png";
import React from "../../assets/aboutme/React.png";
import Js from "../../assets/aboutme/Frame.png";
import Vue from "../../assets/aboutme/logo vue.png";
import Html from "../../assets/aboutme/logo html5.png";
import Css from "../../assets/aboutme/logo css3.png";
import Github from "../../assets/aboutme/logo github.png";

const AboutMe = () => {
  return (
    <section className="flex justify-center" id="about">
      <div className="bg-surfacePrimary lg:w-[93%] w-full rounded-md p-[3em] flex justify-center items-center">
        <div className="flex justify-center  lg:gap-[10em] gap-[2em] flex-col lg:flex-row">
          {/* IMG */}
          <div>
            <img
              src={GirlIllustration}
              width="400em"
              height="198px"
              alt="Illustration of a Girl on her Laptop with her Cat"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-[1.6em]">
            {/* Skills */}
            <div className="flex gap-4">
              <img src={Html} alt="Html Logo" className="w-[24px] h-[24px]" />
              <img src={Css} alt="CSS Logo" className="w-[24px] h-[24px]" />
              <img
                src={Tailwind}
                alt="Tailwind Logo"
                className="w-[24px] h-[24px]"
              />
              <img
                src={Js}
                alt="JavaScript Logo"
                className="w-[24px] h-[24px]"
              />
              <img src={React} alt="React Logo" className="w-[24px] h-[24px]" />
              <img src={Vue} alt="Vue Logo" className="w-[24px] h-[24px]" />
              <img
                src={Github}
                alt="Github Logo"
                className="w-[24px] h-[24px]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <p className="font-textTypo text-secondaryBrand text-base">
                About me
              </p>
              <h3 className="font-sectionTypo text-textPrimary font-medium text-xl">
                I’m a passionate Front-End developer looking for
                <br className="hidden lg:block"></br> my first opportunity
              </h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
