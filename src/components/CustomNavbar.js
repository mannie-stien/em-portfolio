import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import resumeFile from "../assets/icons/Emmanuel Asiedu Agyare-Full-Stack.pdf";

const CustomNavbar = () => {
  const navItems = ["Home", "Skills", "Projects", "Experience", "Hobbies"];

  return (
    <Navbar expand="lg" sticky="top" variant="dark" className="site-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-mark">
          <span className="brand-initials">EA</span>
          <span>Emmanuel Agyare</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="site-nav">
            {navItems.map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="site-nav-link"
              >
                {item}
              </Nav.Link>
            ))}
            <Button
              as="a"
              href={resumeFile}
              download="Emmanuel_Agyare_Resume.pdf"
              className="resume-button"
            >
              <FaDownload aria-hidden="true" />
              Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
