import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Training from "./components/Training";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [minDone, setMinDone] = useState(false);

  useEffect(() => {
    const onLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      setTimeout(() => setIsLoaded(true), 0);
    } else {
      window.addEventListener("load", onLoad);
    }
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMinDone(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isLoaded && minDone) {
      const t = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(t);
    }
  }, [isLoaded, minDone]);

  return (
    <div className="bg-[var(--bg-main)] min-h-screen">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center loader-minimal">
          <div className="w-[86%] max-w-[640px] rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-glow-md p-6">
            <div className="mb-3 text-secondary text-xs">php</div>
            <div className="rounded-lg bg-black/40 p-4">
              <TypeAnimation
                sequence={[
                  "<?php\\n",
                  400,
                  "<?php\\n$greeting = 'Memuat portofolio...';\\n",
                  400,
                  "<?php\\n$greeting = 'Memuat portofolio...';\\n$skills = ['PHP','Laravel','React'];\\n",
                  400,
                  "<?php\\n$greeting = 'Memuat portofolio...';\\n$skills = ['PHP','Laravel','React'];\\nforeach ($skills as $s) { /* ... */ }\\n",
                  400,
                  "<?php\\n$greeting = 'Memuat portofolio...';\\n$skills = ['PHP','Laravel','React'];\\nforeach ($skills as $s) { /* ... */ }\\necho $greeting;\\n?>",
                ]}
                speed={65}
                wrapper="span"
                className="block font-mono text-[var(--text-main)] whitespace-pre typing-cursor"
              />
            </div>
          </div>
        </div>
      )}
      {!loading && <NavBar />}
      <Home />
      <SocialLinks />
      <About />
      <Education />
      <WorkExperience />
      <Training />
      <Achievements />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
