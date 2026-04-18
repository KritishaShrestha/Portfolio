import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import MyWorks from "../components/My_Work";
import Contact from "../components/Contact";
import { useLocation } from "react-router-dom";

interface HomeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Home: React.FC<HomeProps> = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to hash sections when navigating from another route back to home
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="snap-start"><Hero /></div>
      <div className="snap-start"><About /></div>
      <div className="snap-start"><Skills /></div>
      <div className="snap-start"><MyWorks /></div>
      <div className="snap-start"><Contact /></div>
    </main>
  );
};

export default Home;
