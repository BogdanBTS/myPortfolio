import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
