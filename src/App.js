import Intro from "./Components/Intro/Intro";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
