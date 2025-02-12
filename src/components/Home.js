import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import IMAGE from '../assets/icons/IMG_9673.jpg';

const Home = () => {
  return (
    <section id="home" style={styles.container}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} style={styles.textSection}>
            {/* Developer Introduction */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={styles.title}
            >
              Hello, I'm <span style={styles.highlight}>Emmanuel</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={styles.subtitle}
            >
              Full-Stack Software Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={styles.description}
            >
              I specialize in building high-performance web applications with a
              focus on responsive design and modern technologies like{' '}
              <strong>React</strong>, <strong>Node.js</strong>, and{' '}
              <strong>Python</strong>. Let’s create something amazing together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={styles.buttonGroup}
            >
              <Button
                style={styles.ctaButton}
                href="#footer"
                className="hover-scale"
              >
                Contact Me
              </Button>
              <Button
                style={styles.outlineButton}
                href="#projects"
                className="hover-scale"
              >
                View Projects
              </Button>
            </motion.div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={styles.socialLinks}
            >
              <a
                href="https://github.com/mannie-stien"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-agyare-946a62139/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              {/* <a href="mailto:manniemstien@gmail.com" style={styles.socialLink}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a> */}
            </motion.div>
          </Col>
          <Col md={6} style={styles.imageSection}>
            {/* Developer Image */}
            <motion.img
              src={IMAGE}
              alt="Developer Image"
              style={styles.image}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Styles
const styles = {
  container: {
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 0',
  },
  textSection: {
    textAlign: 'left',
    padding: '20px',
  },
  title: {
    fontSize: '3.5rem', // Larger font size
    fontWeight: '700',
    marginBottom: '15px',
    color: '#61dafb', // React blue for branding
    lineHeight: '1.2',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem', // Smaller font size for mobile
    },
  },
  highlight: {
    color: '#00d4ff', // Highlight color for name
  },
  subtitle: {
    fontSize: '2rem', // Larger font size
    fontWeight: '500',
    marginBottom: '20px',
    color: '#d1d1e9', // Softer color for subtitles
    '@media (max-width: 768px)': {
      fontSize: '1.5rem', // Smaller font size for mobile
    },
  },
  description: {
    fontSize: '1.1rem', // Slightly larger font size
    lineHeight: '1.8', // Better line height for readability
    marginBottom: '30px',
    maxWidth: '500px',
    color: '#c5c5d9',
    '@media (max-width: 768px)': {
      fontSize: '1rem', // Smaller font size for mobile
    },
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px', // Space between buttons
    marginBottom: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Stack buttons vertically on mobile
      gap: '10px',
    },
  },
  ctaButton: {
    backgroundColor: '#61dafb',
    borderColor: '#61dafb',
    fontSize: '1rem',
    fontWeight: '500',
    padding: '12px 30px', // Slightly larger padding
    borderRadius: '30px', // Rounded corners
    textDecoration: 'none',
    color: '#1e1e2f',
    transition: 'all 0.3s ease', // Smooth transition for hover effect
  },
  outlineButton: {
    backgroundColor: 'transparent',
    border: '2px solid #61dafb',
    fontSize: '1rem',
    fontWeight: '500',
    padding: '12px 30px',
    borderRadius: '30px',
    textDecoration: 'none',
    color: '#61dafb',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#61dafb',
      color: '#1e1e2f',
    },
  },
  imageSection: {
    textAlign: 'center',
    padding: '20px',
    '@media (max-width: 768px)': {
      order: -1, // Move image above text on mobile
      marginBottom: '20px',
    },
  },
  image: {
    width: '100%', // Responsive width
    maxWidth: '400px', // Maximum size
    height: 'auto', // Maintain aspect ratio
    borderRadius: '50%',
    objectFit: 'cover',
    imageRendering: 'crisp-edges', // Ensures sharp rendering
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
    border: '5px solid #61dafb',
    transition: 'all 0.3s ease',
  },
  socialLinks: {
    display: 'flex',
    gap: '20px', // Space between social icons
  },
  socialLink: {
    color: '#61dafb',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#00d4ff',
      transform: 'scale(1.1)',
    },
  },
};

export default Home;