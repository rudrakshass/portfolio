import Navbar from "./components/TopBar/topbar";
import Home from "./components/Home/home";
import About from "./components/About Me/about";
import Mobnav from "./components/MobNav/mobnav";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mobnav /> 
      <section id="home">
      <Home />
      </section>
      <About />
    </div>
  );
}

export default App;
