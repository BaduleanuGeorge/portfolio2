import reactLogo from "./assets/react.svg";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";


function App() {
  return (
    <div>
      <Navbar />
      <section id="main">
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      
    </div>
  );
}

export default App;
