import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Icons for links
import { projects } from "../assets/icons/data"; // Import your projects data

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={styles.title}
        >
          Featured Projects
        </motion.h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  className="h-100 shadow-lg project-card"
                  style={styles.card}
                >
                  <div style={styles.imageContainer}>
                    <motion.img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      style={styles.image}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <Card.Body style={styles.cardBody}>
                    <Card.Title style={styles.projectTitle}>
                      {project.title}
                    </Card.Title>
                    <Card.Text style={styles.projectDescription}>
                      {project.description}
                    </Card.Text>
                    <div style={styles.technologies}>
                      <strong style={styles.technologiesTitle}>
                        Technologies:
                      </strong>
                      <div style={styles.technologyTags}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} style={styles.technologyTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer style={styles.cardFooter}>
                    <div style={styles.links}>
                      <Button
                        variant="primary"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.linkButton}
                        className="hover-scale"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </Button>
                      {project.githubLink && (
                        <Button
                          variant="outline-primary"
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.linkButton}
                          className="hover-scale"
                        >
                          <FaGithub /> Code
                        </Button>
                      )}
                    </div>
                  </Card.Footer>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

// Styles
const styles = {
  section: {
    padding: "80px 0",
    // background: '#f8f9fa', // Light background
    scrollMarginTop: "80px", // Ensure the section aligns below the navbar
  },
  title: {
    fontSize: "2.5rem",
        color: "#61dafb",
 // Dark color for title
    marginBottom: "50px",
    fontWeight: "700",
  },
  card: {
    borderRadius: "15px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    overflow: "hidden",
    border: "none",
    backgroundColor: "#fff", // White background for cards
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  image: {
    width: "100%",
    height: "200px", // Fixed height for images
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  cardBody: {
    textAlign: "center",
    padding: "20px",
  },
  projectTitle: {
    fontSize: "1.5rem",
    color: "#007bff", // Blue for title
    marginBottom: "15px",
    fontWeight: "600",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#666", // Gray for description
    marginBottom: "20px",
  },
  technologies: {
    fontSize: "0.9rem",
    color: "#777",
    marginBottom: "20px",
  },
  cardFooter: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa", // Light gray background for footer
    borderTop: "1px solid #eee",
  },
  links: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  linkButton: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    borderRadius: "30px",
    padding: "10px 20px",
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
  },
   technologies: {
    marginBottom: '20px',
  },
  technologiesTitle: {
    fontSize: '0.9rem',
    color: '#777',
    marginBottom: '10px',
    display: 'block',
  },
  technologyTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px', // Space between tags
  },
  technologyTag: {
    backgroundColor: '#e9ecef', // Light gray background
    color: '#333', // Dark text color
    padding: '6px 12px',
    borderRadius: '20px', // Rounded corners
    fontSize: '0.85rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#007bff', // Blue background on hover
      color: '#fff', // White text on hover
      transform: 'translateY(-2px)',
    },
  },
};

// Global CSS for hover effects
const hoverStyles = `
  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .hover-scale:hover {
    transform: scale(1.05);
  }
`;

// Inject the CSS styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverStyles;
document.head.appendChild(styleSheet);

export default Projects;
