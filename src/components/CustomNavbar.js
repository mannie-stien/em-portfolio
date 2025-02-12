import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CustomNavbar = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    const resumeUrl = "/path/to/your/resume.pdf"; // Replace with the actual path to your resume
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
        <Navbar.Brand as={Link} to="/" style={styles.navbarBrand}>
          Emmanuel Agyare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={styles.navLinks}>
            <Nav.Link as={Link} to="/home" style={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" style={styles.navLink}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" style={styles.navLink}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" style={styles.navLink}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/hobbies" style={styles.navLink}>
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

export default CustomNavbar;