import "./contact.css";
import Girl from "../../assets/contactme/Cute Avatar.png";
import ArrowRight from "../../assets/general/ArrowRight.png";

const ContactMe = () => {
  return (
    <section id="contact" className="flex justify-center pb-[4em] lg:pb-[6em]">
      <main className="bg-surfacePrimary lg:w-[93%] w-full rounded-md px-[1.5em] py-[3em] md:p-[3em] md:pb-[4.7em] flex justify-center items-center">
        <div className="flex lg:flex-row flex-col gap-[6em]">
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
                </button>
                {/* Linkedin */}
                <button className="bg-surfaceSecondary p-2 rounded-md border border-transparent hover:border-secondaryBrand">
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
                </button>
                {/* InstaGram */}
                <button className="bg-surfaceSecondary p-2 rounded-md border border-transparent hover:border-secondaryBrand">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.3748 3.24984C17.5342 3.25331 18.6451 3.71539 19.4648 4.53517C20.2846 5.35495 20.7467 6.46582 20.7502 7.62516V16.3748C20.7467 17.5342 20.2846 18.6451 19.4648 19.4648C18.6451 20.2846 17.5342 20.7467 16.3748 20.7502H7.62516C6.46582 20.7467 5.35495 20.2846 4.53517 19.4648C3.71539 18.6451 3.25331 17.5342 3.24984 16.3748V7.62516C3.25331 6.46582 3.71539 5.35495 4.53517 4.53517C5.35495 3.71539 6.46582 3.25331 7.62516 3.24984H16.3748ZM16.3748 1.5H7.62516C4.25625 1.5 1.5 4.25625 1.5 7.62516V16.3748C1.5 19.7437 4.25625 22.5 7.62516 22.5H16.3748C19.7437 22.5 22.5 19.7437 22.5 16.3748V7.62516C22.5 4.25625 19.7437 1.5 16.3748 1.5Z"
                      fill="#F5F6F6"
                    />
                    <path
                      d="M17.6873 7.62512C17.4278 7.62512 17.174 7.54815 16.9582 7.40393C16.7423 7.25971 16.5741 7.05472 16.4748 6.81489C16.3754 6.57507 16.3494 6.31117 16.4001 6.05657C16.4507 5.80197 16.5757 5.5681 16.7593 5.38454C16.9428 5.20099 17.1767 5.07599 17.4313 5.02534C17.6859 4.9747 17.9498 5.00069 18.1896 5.10003C18.4294 5.19937 18.6344 5.3676 18.7786 5.58344C18.9229 5.79928 18.9998 6.05303 18.9998 6.31262C19.0002 6.48509 18.9665 6.65593 18.9007 6.81533C18.8349 6.97474 18.7382 7.11958 18.6163 7.24153C18.4943 7.36348 18.3495 7.46014 18.1901 7.52597C18.0306 7.5918 17.8598 7.62549 17.6873 7.62512ZM12 8.49981C12.6923 8.49981 13.369 8.70509 13.9446 9.08969C14.5202 9.4743 14.9688 10.0209 15.2337 10.6605C15.4986 11.3001 15.568 12.0038 15.4329 12.6828C15.2978 13.3618 14.9645 13.9854 14.475 14.4749C13.9855 14.9645 13.3618 15.2978 12.6828 15.4329C12.0039 15.5679 11.3001 15.4986 10.6606 15.2337C10.021 14.9688 9.47433 14.5201 9.08973 13.9445C8.70513 13.369 8.49985 12.6922 8.49985 12C8.50084 11.072 8.86992 10.1823 9.52611 9.52608C10.1823 8.86989 11.072 8.5008 12 8.49981ZM12 6.74997C10.9617 6.74997 9.94662 7.05787 9.08326 7.63475C8.2199 8.21163 7.54699 9.03157 7.14963 9.99088C6.75227 10.9502 6.64831 12.0058 6.85088 13.0242C7.05345 14.0426 7.55347 14.9781 8.28769 15.7123C9.02192 16.4465 9.95738 16.9465 10.9758 17.1491C11.9942 17.3517 13.0498 17.2477 14.0091 16.8503C14.9684 16.453 15.7883 15.7801 16.3652 14.9167C16.9421 14.0534 17.25 13.0383 17.25 12C17.25 10.6076 16.6969 9.27222 15.7123 8.28766C14.7277 7.30309 13.3924 6.74997 12 6.74997Z"
                      fill="#F5F6F6"
                      className="hover:fill-secondaryBrand"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Second Div with Form */}
          <article className=" ">
            <form action="" className="flex flex-col gap-[1em]">
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
                className="bg-surfaceBackground px-[1em] py-[0.4em] rounded-lg text-textSecondary lg:w-[20em] w-full border-[1.5px] border-transparent hover:border-secondaryBrand focus:outline-none"
                placeholder="Your message"
              ></textarea>
              <button className=" bg-primaryBrand500 rounded-md  hover:bg-gradientPurple py-[12px] px-[15px]  sm:py-[12px] sm:px-[24px] flex items-center justify-center gap-1 text-textPrimary">
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
