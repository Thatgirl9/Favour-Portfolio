import "./contact.css";
import Girl from "../../assets/contactme/Cute Avatar.png";
import ArrowRight from "../../assets/general/ArrowRight.png";

const ContactMe = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <section id="contact" className="flex justify-center pb-[4em] lg:pb-[6em]">
      <main className="bg-surfacePrimary lg:w-[93%] w-full rounded-xl px-[1.5em] py-[3em] md:p-[3em] md:pb-[4.7em] flex justify-center items-center">
        <div className="flex lg:flex-row flex-col lg:gap-[6em] gap-[4em]">
          {/* First Div with Image */}
          <article className="flex flex-col gap-7">
            {/* Image */}
            <div>
              <img
                src={Girl}
                className="w-[160px] h-[160px]"
                alt="Girl in a circle Illustration"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3">
              <p className="font-textTypo text-secondaryBrand text-base">
                Contact
              </p>
              <h3 className="font-sectionTypo text-textPrimary font-medium text-xl">
                Enjoyed my work? Let’s work together
              </h3>
              <p className="font-sectionTypo text-textSecondary">
                I’m always up for a chat. Pop me an email at{" "}
                <span className="text-secondaryBrand underline hover:cursor-pointer">
                  favouroukonu@gmail.com
                </span>{" "}
                or give me a shout on
                <br className="hidden lg:block"></br> social media.
              </p>

              {/* Social Icons */}
              <div className="flex gap-2 mt-3 lg:mt-2">
                {/* Github */}
                <button className="bg-surfaceSecondary p-2 rounded-md border border-transparent hover:border-secondaryBrand">
                  <a
                    href="https://github.com/Thatgirl9"
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
                        className="hover:fill-secondaryBrand"
                      />
                    </svg>
                  </a>
                </button>
                {/* Linkedin */}
                <button className="bg-surfaceSecondary p-2 rounded-md border border-transparent hover:border-secondaryBrand">
                  <a
                    href="https://www.linkedin.com/in/favour-ukonu-486620261/"
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
                        d="M20.8205 1.5H3.29437C2.33672 1.5 1.5 2.18906 1.5 3.13547V20.7005C1.5 21.652 2.33672 22.5 3.29437 22.5H20.8153C21.7781 22.5 22.5 21.6464 22.5 20.7005V3.13547C22.5056 2.18906 21.7781 1.5 20.8205 1.5ZM8.00953 19.0045H5.00109V9.65063H8.00953V19.0045ZM6.60938 8.22844H6.58781C5.625 8.22844 5.00156 7.51172 5.00156 6.61453C5.00156 5.70094 5.64141 5.00109 6.62578 5.00109C7.61016 5.00109 8.2125 5.69578 8.23406 6.61453C8.23359 7.51172 7.61016 8.22844 6.60938 8.22844ZM19.0045 19.0045H15.9961V13.89C15.9961 12.6647 15.5583 11.8275 14.4698 11.8275C13.6383 11.8275 13.1461 12.39 12.9272 12.938C12.8452 13.1348 12.8231 13.403 12.8231 13.6767V19.0045H9.81469V9.65063H12.8231V10.9523C13.2609 10.3289 13.9448 9.43172 15.5363 9.43172C17.5111 9.43172 19.005 10.7334 19.005 13.5398L19.0045 19.0045Z"
                        fill="#F5F6F6"
                        className="hover:fill-secondaryBrand"
                      />
                    </svg>
                  </a>
                </button>
                {/* X/Twitter */}
                <button className="bg-surfaceSecondary p-2 rounded-md border border-transparent hover:border-secondaryBrand">
                  <a
                    href="https://twitter.com/favourukonu_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M5.14286 2.25C2.30625 2.25 0 4.26797 0 6.75V29.25C0 31.732 2.30625 33.75 5.14286 33.75H30.8571C33.6937 33.75 36 31.732 36 29.25V6.75C36 4.26797 33.6937 2.25 30.8571 2.25H5.14286ZM29.017 8.15625L20.6759 16.4953L30.4875 27.8438H22.8054L16.7946 20.9602L9.90804 27.8438H6.09107L15.0107 18.9211L5.60089 8.15625H13.4759L18.9161 14.4492L25.2 8.15625H29.017ZM25.9795 25.8469L12.3268 10.0477H10.0527L23.858 25.8469H25.9714H25.9795Z"
                        fill="#F5F6F6"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </article>

          {/* Second Div with Form */}
          <article className=" ">
            <form
              action=""
              className="flex flex-col gap-[1em]"
              onSubmit={handleForm}
            >
              <input
                type="name"
                className="bg-surfaceBackground px-[1em] py-[0.4em] rounded-lg text-textSecondary lg:w-[20em] w-full border-[1.5px] border-transparent hover:border-secondaryBrand focus:outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="bg-surfaceBackground px-[1em] py-[0.4em] rounded-lg text-textSecondary lg:w-[20em] w-full border-[1.5px] border-transparent hover:border-secondaryBrand focus:outline-none"
                placeholder="E-mail"
              />
              <textarea
                type="text"
                className="bg-surfaceBackground px-[1em] py-[0.4em] rounded-lg text-textSecondary lg:w-[20em] w-full border-[1.5px] border-transparent hover:border-secondaryBrand focus:outline-none h-[10em]"
                placeholder="Your message"
              ></textarea>
              <button
                className=" bg-primaryBrand500 rounded-md  hover:bg-gradientPurple py-[12px]  flex items-center justify-center gap-2 text-textPrimary w-[60%] md:w-[15em] lg:w-[65%] mt-[1em]"
                type="submit"
              >
                <span>Send me a message</span>
                <span>
                  <img
                    src={ArrowRight}
                    className="w-[24px] h-[24px]"
                    alt="Arrow Right Icon"
                  />
                </span>
              </button>
            </form>
          </article>
        </div>
      </main>
    </section>
  );
};

export default ContactMe;
