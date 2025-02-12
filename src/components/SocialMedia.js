import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SocialMedia = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email sending logic (e.g., using EmailJS or backend API)
    console.log('Form Submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" style={styles.section}>
      <Container>
        <h2 style={styles.title}>Contact Me</h2>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit} style={styles.form}>
              <Form.Group controlId="formName" style={styles.formGroup}>
                <Form.Label style={styles.label}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={styles.input}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" style={styles.formGroup}>
                <Form.Label style={styles.label}>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </Form.Group>

              <Form.Group controlId="formMessage" style={styles.formGroup}>
                <Form.Label style={styles.label}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  style={styles.input}
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={styles.button}>
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6} className="text-center">
            <div style={styles.social}>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FaGithub size={40} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FaLinkedin size={40} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FaTwitter size={40} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    // backgroundColor: '#282c34',
    color: '#fff',
    padding: '60px 0',
  },
  title: {
    fontSize: '2.5rem',
    color: '#fff',
    marginBottom: '40px',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
  },
  input: {
    fontSize: '1rem',
    // padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '5px',
    width: '100%',
    backgroundColor: '#007bff',
    border: 'none',
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    marginTop: '30px',
  },
  socialIcon: {
    color: '#fff',
    transition: 'transform 0.3s ease-in-out',
  },
};

// Hover effect for icons
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('a');
  icons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
    });
  });
});

export default SocialMedia;
