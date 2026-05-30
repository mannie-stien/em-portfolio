import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
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
    <section id="home" className="hero-section section">
      <Container className="hero-container">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <motion.div
              className="hero-kicker"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Software Engineer · Backend & Integrations · AI-Augmented Development
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Backend systems, integrations, and AI workflows that ship.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-copy"
            >
              I am Emmanuel Agyare, a backend-focused software engineer with
              6+ years building scalable systems across PHP, Node.js, Python,
              React, and relational databases. I use AI-assisted workflows to
              ship reliable production software faster without cutting corners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-actions"
            >
              <Button href="#projects" className="btn-primary-modern">
                View Projects
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <Button href="#footer" className="btn-secondary-modern">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-socials"
            >
              <a
                href="https://github.com/mannie-stien"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="GitHub profile"
                onClick={() => handleClick('GitHub')}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuelagyare-946a62139/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn profile"
                onClick={() => handleClick('LinkedIn')}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://emmanuelasiedu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Portfolio website"
                onClick={() => handleClick('Website')}
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <a
                href="mailto:asieduagyare@outlook.com"
                className="social-icon-link"
                aria-label="Email Emmanuel"
                onClick={() => handleClick('Email')}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </motion.div>

            <motion.div
              className="hero-metrics"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="metric">
                <strong>6+</strong>
                <span>Years building software</span>
              </div>
              <div className="metric">
                <strong>35%</strong>
                <span>User engagement lift from AI features</span>
              </div>
              <div className="metric">
                <strong>50%</strong>
                <span>Faster mobile delivery with React Native</span>
              </div>
            </motion.div>
          </Col>
          <Col lg={5}>
            <motion.div
              className="portrait-panel"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="portrait-frame">
                <img src={IMAGE} alt="Emmanuel Agyare" />
              </div>
              <div className="portrait-caption">
                <span>Brigham Young University-Idaho</span>
                <strong>B.S. Computer Information Technology</strong>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
