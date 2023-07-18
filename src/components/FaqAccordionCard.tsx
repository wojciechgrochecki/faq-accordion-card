import illustrationWomanMobile from "../assets/images/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../assets/images/bg-pattern-mobile.svg";
import bgPatternDesktop from "../assets/images/bg-pattern-desktop.svg";
import illustrationBoxDesktop from "../assets/images/illustration-box-desktop.svg";
import illustrationWomanDesktop from "../assets/images/illustration-woman-online-desktop.svg";

export default function FaqAccordionCard({}) {
  return (
    <div
      className="grid w-[90%] max-w-[600px] grid-flow-row content-center pb-5
      desktop:h-fit  desktop:max-w-[900px] desktop:grid-flow-col desktop:grid-cols-2 
       desktop:pb-0"
    >
      <div
        className="
        desktop:get-me-out { relative grid grid-rows-[5fr_3fr] place-items-center content-center 
        bg-transparent bg-no-repeat pb-[10%] desktop:grid-rows-1 desktop:rounded-l-[2rem]
        desktop:bg-white desktop:pb-0"
      >
        <div
          className="absolute row-start-2 h-full w-full rounded-t-[2rem] bg-white
         desktop:hidden"
        ></div>
        <img
          src={illustrationWomanMobile}
          alt=""
          className="z-10 row-span-2 row-start-1 w-[70%] translate-y-[3%] desktop:hidden"
        />
        <img
          src={illustrationBoxDesktop}
          alt=""
          className="desktop:animate-bounc hidden desktop:absolute desktop:block desktop:translate-x-[-120%]
          desktop:translate-y-[15%]"
        />
        <div
          className="absolute  flex h-fit w-full
        translate-y-[50%] justify-center desktop:hidden"
        >
          <img
            src={bgPatternMobile}
            alt=""
            className="w-[70%] desktop:w-full"
          />
        </div>
      </div>
      <div
        className="flex w-full flex-col items-center rounded-b-[2rem] bg-white px-7 pb-16  desktop:justify-center 
      desktop:rounded-[2rem] desktop:rounded-l-none desktop:px-24 desktop:py-24 desktop:pl-0 desktop:text-lg"
      >
        <h2 className="w-full text-center text-5xl font-bold text-primary-text-very-dark-desaturated-blue desktop:mb-10 desktop:text-left">
          FAQ
        </h2>
        <div className="w-full border-b border-neutral-divider-light-grayish-blue py-5">
          <input
            type="checkbox"
            id="ch1"
            className="peer absolute -z-10 opacity-0"
          />
          <label
            htmlFor="ch1"
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue transition-all transition-all
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon hover:text-primary-text-soft-red peer-checked:font-bold peer-checked:after:-rotate-180"
          >
            How many team members can I invite?
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr] peer-checked:pt-4">
            <div className="overflow-hidden  text-neutral-text-dark-grayish-blue peer-checked:h-10 peer-checked:py-5">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </div>
          </div>
        </div>

        <div className="w-full border-b border-neutral-divider-light-grayish-blue py-5">
          <input
            type="checkbox"
            id="ch2"
            className="peer absolute -z-10 opacity-0"
          />
          <label
            htmlFor="ch2"
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue transition-all
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon hover:text-primary-text-soft-red peer-checked:font-bold peer-checked:after:-rotate-180"
          >
            What is the maximum file upload size?
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr] peer-checked:pt-4">
            <div className="overflow-hidden  text-neutral-text-dark-grayish-blue peer-checked:h-10 peer-checked:py-5">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </div>
          </div>
        </div>

        <div className="w-full border-b border-neutral-divider-light-grayish-blue py-5">
          <input
            type="checkbox"
            id="ch3"
            className="peer absolute -z-10 opacity-0"
          />
          <label
            htmlFor="ch3"
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue transition-all
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon hover:text-primary-text-soft-red peer-checked:font-bold peer-checked:after:-rotate-180"
          >
            How do I reset my password?
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr] peer-checked:pt-4">
            <div className="overflow-hidden  text-neutral-text-dark-grayish-blue peer-checked:h-10 peer-checked:py-5">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </div>
          </div>
        </div>

        <div className="w-full border-b border-neutral-divider-light-grayish-blue py-5">
          <input
            type="checkbox"
            id="ch4"
            className="peer absolute -z-10 opacity-0"
          />
          <label
            htmlFor="ch4"
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue transition-all
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon hover:text-primary-text-soft-red peer-checked:font-bold peer-checked:after:-rotate-180"
          >
            Can I cancel my subscription?
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr] peer-checked:pt-4">
            <div className="overflow-hidden  text-neutral-text-dark-grayish-blue peer-checked:h-10 peer-checked:py-5">
              Yes! Send us a message and we'll process your request no questions
              asked.
            </div>
          </div>
        </div>

        <div className="w-full border-b border-neutral-divider-light-grayish-blue py-5">
          <input
            type="checkbox"
            id="ch5"
            className="peer absolute -z-10 opacity-0"
          />
          <label
            htmlFor="ch5"
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue transition-all
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon hover:text-primary-text-soft-red peer-checked:font-bold peer-checked:after:-rotate-180"
          >
            Do you provide additional support?
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr] peer-checked:pt-4">
            <div className="overflow-hidden  text-neutral-text-dark-grayish-blue peer-checked:h-10 peer-checked:py-5 ">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
