import "./App.css";
import FaqAccordionCard from "./components/FaqAccordionCard";
import data from "../data.json";

function App() {
  return (
    <div
      className="grid h-fit min-h-full content-start justify-items-center bg-gradient-to-b 
    from-primary-gradient-soft-violet to-primary-gradient-soft-blue desktop:content-center desktop:gap-y-3"
    >
      <FaqAccordionCard faqData={data} />
      <div className="w-[90%] text-center text-primary-text-very-dark-desaturated-blue desktop:text-lg">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className=" text-white/90" href="#">
          Wojciech Grochecki
        </a>
        .
      </div>
    </div>
  );
}

export default App;
