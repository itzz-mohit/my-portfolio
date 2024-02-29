import Introduction from "./components/Introduction";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-center">
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
