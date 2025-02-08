import "./App.css";
import Hero from "./components/hero/hero";
import Highlights from "./components/highlights/highlights";
import Partner from "./components/partner/partner";
import Team from "./components/team/team";

function App() {
  return (
    <>
      <Hero />
      <Partner />
      <Highlights />
      <hr className="global-separator" />
      <Team />
    </>
  );
}

export default App;
