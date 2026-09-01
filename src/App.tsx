import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_DISPLAY_TIME = 600; // evita flash rápido demais do loading
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);
      setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      <div id="top" className="relative min-h-screen overflow-x-hidden">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;