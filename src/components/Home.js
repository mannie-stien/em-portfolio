import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import IMAGE from '../assets/icons/IMG_9673.jpg';
import ReactGA from 'react-ga4';

const Home = () => {
  const handleClick = (label) => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Link',
      label: label,
    });
  };

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

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={styles.educationSection}
            >
              <h3 style={styles.educationTitle}>Education</h3>
              <p style={styles.educationText}>
                <strong>Brigham Young University-Idaho</strong>
                <br />
                Bachelor of Science in Computer Information Technology.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
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
                onClick={() => handleClick('Projects')}
              >
                View Projects
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
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
                onClick={() => handleClick('LinkedIn')}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
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
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#61dafb',
    lineHeight: '1.2',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  highlight: {
    color: '#00d4ff',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: '500',
    marginBottom: '20px',
    color: '#d1d1e9',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '30px',
    maxWidth: '500px',
    color: '#c5c5d9',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  educationSection: {
    marginBottom: '30px',
  },
  educationTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#61dafb',
    marginBottom: '10px',
  },
  educationText: {
    fontSize: '1rem',
    color: '#c5c5d9',
    lineHeight: '1.6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '10px',
    },
  },
  ctaButton: {
    backgroundColor: '#61dafb',
    borderColor: '#61dafb',
    fontSize: '1rem',
    fontWeight: '500',
    padding: '12px 30px',
    borderRadius: '30px',
    textDecoration: 'none',
    color: '#1e1e2f',
    transition: 'all 0.3s ease',
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
      order: -1,
      marginBottom: '20px',
    },
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '50%',
    objectFit: 'cover',
    imageRendering: 'crisp-edges',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
    border: '5px solid #61dafb',
    transition: 'all 0.3s ease',
  },
  socialLinks: {
    display: 'flex',
    gap: '20px',
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