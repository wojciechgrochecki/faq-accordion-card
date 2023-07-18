import illustrationWomanMobile from "../assets/images/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../assets/images/bg-pattern-mobile.svg";
import bgPatternDesktop from "../assets/images/bg-pattern-desktop.svg";
import illustrationBoxDesktop from "../assets/images/illustration-box-desktop.svg";
import illustrationWomanDesktop from "../assets/images/illustration-woman-online-desktop.svg";

export default function FaqAccordionCard({}) {
  return (
    <div
      className="grid w-[90%] max-w-[600px] grid-flow-row content-center pb-5
     desktop:max-w-none desktop:grid-flow-col desktop:grid-cols-2 "
    >
      <div className="relative grid grid-rows-[5fr_3fr] place-items-center content-center bg-transparent pb-[10%] desktop:rounded-l-[2rem] desktop:bg-white">
        <div className="absolute row-start-2 h-full w-full rounded-t-[2rem] bg-white"></div>
        <picture
          className="z-10 row-span-2 row-start-1 w-[70%]  translate-y-[3%]
          desktop:w-auto desktop:max-w-none desktop:translate-y-0"
        >
          <source
            media="(min-width:1000px)"
            srcSet={illustrationWomanDesktop}
          />
          <img src={illustrationWomanMobile} alt="" />
        </picture>
        <div className="absolute mx-auto flex h-fit w-full translate-y-[50%] justify-center ">
          <picture className="w-[70%]  ">
            <source media="(min-width:1000px)" srcSet={bgPatternDesktop} />
            <img src={bgPatternMobile} alt="" className="w-full" />
          </picture>
        </div>
      </div>
      <div className=" flex w-full flex-col items-center rounded-b-[2rem] bg-white px-7 pb-16 desktop:justify-center desktop:rounded-l-none">
        <h2
          className="my-6 text-5xl font-bold text-primary-text-very-dark-desaturated-blue
        desktop:mt-0"
        >
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
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon peer-checked:font-bold peer-checked:after:-rotate-180"
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
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon peer-checked:font-bold peer-checked:after:-rotate-180"
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
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon peer-checked:font-bold peer-checked:after:-rotate-180"
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
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon peer-checked:font-bold peer-checked:after:-rotate-180"
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
            className="flex cursor-pointer flex-row items-center justify-between text-primary-text-very-dark-desaturated-blue
              after:transition-transform  after:duration-300 
              after:content-arrow-down-icon peer-checked:font-bold peer-checked:after:-rotate-180"
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
