import Header from "/components/Header";
import Hero from "/components/Hero";
import Projects from "/components/Projects";
import About from "/components/About";
import Contact from "/components/Contact";

function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;