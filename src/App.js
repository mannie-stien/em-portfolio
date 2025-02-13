import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";
import Hobby from "./components/Hobbies";
import Footers from "./components/Footers";
import CustomNavbar from "./components/CustomNavbar";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-72H3M2ZHG9"; // Replace with your actual Measurement ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const sections = ["home", "skills", "projects", "experience", "hobbies"];
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                ReactGA.event({
                  category: "Scroll",
                  action: "Viewed Section",
                  label: section, // Logs which section was viewed
                });
              }
            });
          },
          { threshold: 0.5 } // Fires when 50% of the section is in view
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Router>
      <CustomNavbar />
      <ScrollToTop />
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
    const sectionId = pathname.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

const styles = {
  mainContent: {
    background: "linear-gradient(135deg, #0f0f17, #1b1b2a, #24243e, #141e30)",
    minHeight: "100vh",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    scrollPaddingTop: "80px",
  },
  section: {
    width: "100%",
    scrollMarginTop: "80px",
  },
};

export default App;
