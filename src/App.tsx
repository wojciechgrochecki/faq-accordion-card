import "./App.css";
import FaqAccordionCard from "./components/FaqAccordionCard";

function App() {
  return (
    <div
      className="grid h-fit min-h-full justify-items-center gap-y-5 bg-gradient-to-b 
    from-primary-gradient-soft-violet to-primary-gradient-soft-blue desktop:place-items-center"
    >
      <FaqAccordionCard />
    </div>
  );
}

export default App;
