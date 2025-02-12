import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    const resumeUrl = '/path/to/your/resume.pdf'; // Replace with the actual path to your resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Emmanuel_Agyare_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" style={styles.nav}>
      <Navbar.Brand href="#" style={styles.brand}>
        Emmanuel Agyare
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={styles.navLinks}>
          {/* Home button without dropdown */}
          <Nav.Link key="home" className="mx-3" style={styles.navLink}>
            <Link to="home" smooth={true} duration={500} style={styles.link}>
              Home
            </Link>
          </Nav.Link>
          {/* Group other sections into a dropdown */}
          <NavDropdown
            title="More"
            id="basic-nav-dropdown"
            style={styles.dropdown}
            className="mx-3"
          >
            {['Experience', 'Projects', 'Skills', 'Hobbies', 'Education', 'Contact'].map(
              (section) => (
                <NavDropdown.Item
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  style={styles.dropdownItem}
                >
                  {section}
                </NavDropdown.Item>
              )
            )}
          </NavDropdown>
          {/* Download Resume Button */}
          <Button
            variant="outline-primary"
            onClick={handleDownloadResume}
            style={styles.resumeButton}
            className="mx-3"
          >
            Download Resume
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Styles
const styles = {
  nav: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    padding: '0.5rem 1rem',
    background: 'linear-gradient(90deg, #f8f9fa, #e9ecef)', // Gradient background
    transition: 'background-color 0.3s ease-in-out',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#007bff',
    fontFamily: '"Poppins", sans-serif', // Use a modern font
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    margin: '0 10px',
  },
  link: {
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: '#007bff', // Change color on hover
    },
  },
  dropdown: {
    color: '#333',
    fontWeight: 'bold',
  },
  dropdownItem: {
    padding: '10px 20px',
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#f1f1f1', // Hover effect for dropdown items
    },
  },
  resumeButton: {
    fontWeight: 'bold',
    border: '2px solid #007bff',
    borderRadius: '25px',
    padding: '10px 20px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: '#007bff',
      color: '#fff',
      transform: 'scale(1.05)', // Slight scale effect on hover
    },
  },
};

export default CustomNavbar;