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
  return (
    <div className="bg-dark min-h-screen">
      <NavBar />
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
