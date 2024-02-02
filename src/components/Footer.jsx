import ArrowRight from "../assets/general/ArrowRight.png";
import "animate.css";
const Footer = () => {
  // const backToTopBtn = {
  //   background: "black",
  //   animateRepeat: "4",
  // };
  return (
    <footer className="flex lg:justify-center justify-start items-start lg:items-center pb-[2em] px-[1.5em] lg:px-0">
      <main className="text-textSecondary font-sectionTypo text-base flex justify-between flex-col lg:flex-row lg:w-[86%] gap-[1.6em] lg:gap-0">
        <p className="">Favour Ukonu 2023 @Thatgirl9</p>

        <div className="flex gap-[2.5em]">
          <p>
            <a
              href="https://github.com/Thatgirl9"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/favour-ukonu-486620261/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/favourukonu_"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </p>
          <button
            className="animate__bounce animate__animated animate__repeat-3 animate__delay-4s"
            // style={backToTopBtn}
          >
            <img
              src={ArrowRight}
              className="w-[24px] h-[24px] transform rotate-[270deg] "
              alt="Arrow Right Icon"
            />
          </button>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
