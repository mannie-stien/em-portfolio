import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const Footers = () => {
  return (
    <footer className="site-footer" id="footer">
      <Container>
        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <div className="footer-panel">
              <span className="section-kicker">Contact</span>
              <h2>Let’s build something useful.</h2>
              <Form
                action="https://formsubmit.co/asieduagyare@outlook.com"
                method="POST"
                className="contact-form"
              >
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="modern-input"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="modern-input"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project"
                    required
                    className="modern-input"
                  />
                </Form.Group>

                <Button type="submit" className="btn-primary-modern">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={5}>
            <div className="footer-panel footer-connect">
              <span className="section-kicker">Connect</span>
              <h2>Find me online</h2>
              <p>
                I’m open to backend, integrations, AI automation, and
                product-focused engineering opportunities.
              </p>
              <div className="footer-socials">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label}
                >
                  {icon.icon}
                </a>
              ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="footer-copy">
            <p>© {new Date().getFullYear()} Emmanuel Agyare. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const socialIcons = [
  {
    label: "Email Emmanuel",
    icon: <FaEnvelope size={22} />,
    link: "mailto:asieduagyare@outlook.com",
  },
  {
    label: "LinkedIn profile",
    icon: <FaLinkedin size={22} />,
    link: "https://www.linkedin.com/in/emmanuelagyare-946a62139/",
  },
  {
    label: "Portfolio website",
    icon: <FaGlobe size={22} />,
    link: "https://emmanuelasiedu.com",
  },
  {
    label: "GitHub profile",
    icon: <FaGithub size={22} />,
    link: "https://github.com/mannie-stien",
  },
];

export default Footers;
