import Navbar from "./components/TopBar/topbar";
import Home from "./components/Home/home";
import About from "./components/About Me/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id="home">
      <Home />
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
