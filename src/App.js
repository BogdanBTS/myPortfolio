import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
