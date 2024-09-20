import Navbar from "./components/TopBar/topbar";
import Home from "./components/Home/home";
import About from "./components/About Me/about";
import Mobnav from "./components/MobNav/mobnav";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mobnav /> 
      <section id="home">
      <Home />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="skills">
      <Skills />
      </section>
    </div>
  );
}

export default App;
