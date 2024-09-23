import "./About.css";
import { Link } from "react-router-dom";
import GirlIllustration from "../../assets/aboutme/bro.png";
import Tailwind from "../../assets/aboutme/Tailwind.png";
import React from "../../assets/aboutme/React.png";
import Js from "../../assets/aboutme/Frame.png";
import Vue from "../../assets/aboutme/logo vue.png";
import Html from "../../assets/aboutme/logo html5.png";
import Css from "../../assets/aboutme/logo css3.png";
import Github from "../../assets/aboutme/logo github.png";
import CvLogo from "../../assets/homehero/ReadCvLogo.png";

const AboutMe = () => {
  return (
    <section
      className="flex justify-center pb-[4em] lg:pb-[6em] scroll-m-16"
      id="about"
    >
      <div className="bg-surfacePrimary lg:w-[93%] w-full rounded-none lg:rounded-xl px-[1.5em] py-[3em] md:p-[3em] md:pb-[4.7em] flex justify-center items-center">
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
              <svg width="24" height="24" viewBox="0 0 128 128" fill="none">
                <path fill="#2C243B" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#9955E8"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>

              <img src={React} alt="React Logo" className="w-[24px] h-[24px]" />
              <img src={Vue} alt="Vue Logo" className="w-[24px] h-[24px]" />
              
            <svg viewBox="0 0 128 128" width="24" height="24" fill="#9955E8">
            <circle cx="64" cy="64" r="64"></circle><path fill="#2c243B" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"></path><path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#2c243B"></stop><stop offset="1" stopColor="#2c243B"stopOpacity="0"></stop></linearGradient><linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#2c243B"></stop><stop offset="1" stopColor="#2c243B"stopOpacity="0"></stop></linearGradient></defs>
            </svg>
          
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
                <br className="hidden lg:block"></br> opportunities
              </h3>
              <p className="text-textSecondary font-sectionTypo text-base mt-3 leading-tighter">
                Beyond coding, I am a Technical Writer , a pet lover, who enjoys{" "}
                <br className="hidden lg:block"></br> spending my free time
                watching a movie or reading an article{" "}
                <br className="hidden lg:block"></br> or surfing the net to
                learn something new.
                <br className="hidden lg:block"></br> I am currently seeking
                opportunities to bring my skills and
                <br className="hidden lg:block"></br> enthusiasm to a tech
                company.
              </p>

              <button className=" bg-primaryBrand500 rounded-md hover:bg-gradientPurple text-textPrimary w-[10em] mt-4">
                <Link
                  to="https://drive.google.com/file/d/14q-890aCZHjSgvq_FcSkBwaMfqux6eik/view?usp=sharing"
                  className="flex items-center justify-center gap-1 py-[11px] px-[20px] sm:py-[12px] sm:px-[24px] "
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <img
                      src={CvLogo}
                      className="w-[24px] h-[24px]"
                      alt="Book Icon"
                    />
                  </span>
                  <span>My resume</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
