import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footers = () => {
  return (
    <footer style={styles.footer} id="footer">
      <Container>
        <Row className="align-items-center">
          {/* Contact Form */}
         <Col lg={6} md={12} style={styles.formColumn}>
  <h3 style={styles.title}>Let's Connect</h3>
  <Form
    action="https://formsubmit.co/manniestien@gmail.com"
    method="POST"
    style={styles.form}
  >
    {/* Name Field */}
    <Form.Group controlId="formName" style={styles.formGroup}>
      <Form.Control
        type="text"
        name="name"
        placeholder="Your Name"
        required
        style={styles.input}
      />
    </Form.Group>

    {/* Email Field */}
    <Form.Group controlId="formEmail" style={styles.formGroup}>
      <Form.Control
        type="email"
        name="email"
        placeholder="Your Email"
        required
        style={styles.input}
      />
    </Form.Group>

    {/* Message Field */}
    <Form.Group controlId="formMessage" style={styles.formGroup}>
      <Form.Control
        as="textarea"
        name="message"
        rows={4}
        placeholder="Your Message"
        required
        style={styles.input}
      />
    </Form.Group>

    {/* Submit Button */}
    <Button type="submit" style={styles.submitButton}>
      Send Message
    </Button>
  </Form>
</Col>

          {/* Social Media Links */}
          <Col lg={6} md={12} style={styles.socialColumn}>
            <h3 style={styles.title}>Follow Me</h3>
            <div style={styles.socialLinks}>
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Copyright Text */}
        <Row>
          <Col style={styles.copyright}>
            <p>
              © {new Date().getFullYear()} Emmanuel Agyare. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const socialIcons = [
//   { icon: <FaFacebook size={24} />, link: "https://facebook.com" },
  { icon: <FaTwitter size={24} />, link: "https://twitter.com" },
  { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/emmanuel-agyare-946a62139/"},
//   { icon: <FaInstagram size={24} />, link: "https://instagram.com" },
  { icon: <FaGithub size={24} />, link: "https://github.com/mannie-stien" },
];

const styles = {
  footer: {
    // backgroundColor: "#13131a", // Deep dark background
    padding: "60px 0 20px",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: '#61dafb', 
  },
  formColumn: {
    marginBottom: "40px",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    backgroundColor: '#f8f9fa', // Light gray background
    border: '1px solid #ddd', // Light border
    borderRadius: '8px', // Rounded corners
    padding: '12px 16px', // Padding for better spacing
    fontSize: '1rem',
    color: '#333', // Dark text color
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  button: {
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "8px",
    padding: "12px 30px",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "0.3s ease",
    cursor: "pointer",
  },
  socialColumn: {
    marginBottom: "40px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  socialLink: {
    color: "#fff",
    transition: "0.3s ease",
  },
  socialLinkHover: {
    color: "#61dafb",
  },
  copyright: {
    marginTop: "40px",
    fontSize: "0.9rem",
    color: "#aaa",
  },
};

export default Footers;
