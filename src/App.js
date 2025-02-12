import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import React Router
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";
import Hobby from "./components/Hobbies";
import Footers from "./components/Footers";
import CustomNavbar from "./components/CustomNavbar"; // Import CustomNavbar

const App = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing effect
      once: false, // Replay animations on both scroll up and down
      mirror: true, // Re-run animations when scrolling back up
    });
  }, []);

  return (
    <Router>
      <CustomNavbar />
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <main style={styles.mainContent}>
        <Home id="home" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Hobby id="hobbies" />
      </main>
      <Footers />
    </Router>
  );
};

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname.substring(1); // Remove the leading "/"
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

// Styles
const styles = {
  mainContent: {
    background: "linear-gradient(135deg, #0f0f17, #1b1b2a, #24243e, #141e30)", // Smooth dark theme
    minHeight: "100vh", // Make it full height
    width: "100%", // Ensure full width coverage
    // display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    scrollPaddingTop: "80px",
  },
  section: {
    width: "100%",
    scrollMarginTop: "80px", // Ensure the section aligns below the navbar
  },
};

export default App;