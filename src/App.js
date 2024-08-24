import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About Me/about";

function App() {
  return (
    <div classname="App">
      <Navbar/>
      <section id="home">
      <Home />
      </section>
      <About />
    </div>
  );
}

export default App;
