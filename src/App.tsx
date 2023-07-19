import "./App.css";
import FaqAccordionCard from "./components/FaqAccordionCard";
import data from "../data.json";

function App() {
  return (
    <div
      className="grid h-fit min-h-full justify-items-center bg-gradient-to-b 
    from-primary-gradient-soft-violet to-primary-gradient-soft-blue desktop:content-center"
    >
      <FaqAccordionCard faqData={data} />
    </div>
  );
}

export default App;
