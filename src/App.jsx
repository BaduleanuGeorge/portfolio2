import reactLogo from "./assets/react.svg";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";


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
      <section id="work">
        <Work />
      </section>
      <section>
        <Contact />
      </section>
      <div className="w-full h-[60px] bg-black text-gray-300 flex items-center justify-center">
        <p>© George Baduleanu, 2022.</p>
      </div>
    </div>
  );
}

export default App;
