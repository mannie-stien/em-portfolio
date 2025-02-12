import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Import AOS styles
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import AOS from "aos"; // Import AOS
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";
import Hobby from "./components/Hobbies";
import Footers from "./components/Footers";
import ProjectsShowcase from "./components/ProjectShowcase";
import resume from './assets/icons//Emmanuel Asiedu Agyare-Full-Stack.pdf'

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
    <div>
      <CustomNavbar />
      <main style={styles.mainContent}>
        {/* Adding AOS attributes for each section */}
        <section data-aos="fade-up" style={styles.section}>
          <Home />
        </section>
        <section data-aos="fade-up" style={styles.section}>
          <Skills />
        </section>
        <section data-aos="fade-up" style={styles.section}>
          <Projects />
        </section>
        <section data-aos="fade-up" style={styles.section}>
          <Experience />
        </section>
        <section data-aos="fade-up" style={styles.section}>
          <Hobby />
        </section>
       
      </main>
      <Footers />
    </div>
  );
};

const CustomNavbar = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    const resumeUrl = resume; // Replace with the actual path to your resume
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Emmanuel_Agyare_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Navbar expand="lg" style={styles.navbar} sticky="top">
      <Container>
        <Navbar.Brand href="#home" style={styles.navbarBrand}>
          Emmanuel Agyare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={styles.navLinks}>
            <Nav.Link href="#home" style={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" style={styles.navLink}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" style={styles.navLink}>
              Projects
            </Nav.Link>
            <Nav.Link href="#experience" style={styles.navLink}>
              Experience
            </Nav.Link>
            <Nav.Link href="#hobbies" style={styles.navLink}>
              Hobbies
            </Nav.Link>
            {/* Download Resume Button */}
            <Button
              variant="outline-light"
              onClick={handleDownloadResume}
              style={styles.resumeButton}
            >
              Download Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Styles
const styles = {
  mainContent: {
    background: "linear-gradient(135deg, #0f0f17, #1b1b2a, #24243e, #141e30)", // Smooth dark theme
    minHeight: "100vh", // Make it full height
    width: "100%", // Ensure full width coverage
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    scrollPaddingTop: "80px",
  },
  section: {
    // padding: "80px 0", // Add padding to ensure content is not hidden under the navbar
    width: "100%",
    scrollMarginTop: "80px", // Ensure the section aligns below the navbar
  },
  navbar: {
    background: "linear-gradient(135deg, #161621, #1e1e2d, #29293d)", // Deep dark gradient
    padding: "15px 0",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // More depth
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Subtle glow effect
  },
  navbarBrand: {
    color: "#00d4ff", // Neon blue for contrast
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  navLink: {
    color: "#fff",
    marginLeft: "20px",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "#00d4ff",
    },
  },
  resumeButton: {
    marginLeft: "20px",
    border: "2px solid #00d4ff",
    borderRadius: "25px",
    padding: "10px 20px",
    fontWeight: "500",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      background: "#00d4ff",
      color: "#161621",
      transform: "scale(1.05)",
    },
  },
};

export default App;