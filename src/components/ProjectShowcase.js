import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Icons for links

const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'GFF to Excel Converter',
      description:
        'A simple web application built with Flask that converts Genomic Feature Format (GFF) files to Excel (XLSX) files. This tool makes it easier to analyze and work with GFF data by transforming it into a user-friendly spreadsheet format.',
      technologies: ['Python', 'Flask', 'Pandas', 'PyPI'],
      liveLink: 'https://pypi.org/project/gff-to-xlsx/',
      codeLink: 'https://github.com/yourusername/gff-to-xlsx', // Replace with your GitHub link
    },
    {
      title: 'PickApp',
      description:
        'A modern sports and activity coordination platform designed to help users organize, discover, and participate in local pickup games and recreational activities. Built with React and Supabase as the backend.',
      technologies: ['React', 'Supabase', 'Vercel'],
      liveLink: 'https://pickapp-mkpg.vercel.app/',
      codeLink: 'https://github.com/yourusername/pickapp', // Replace with your GitHub link
    },
    {
      title: 'UniConvert',
      description:
        'A powerful, all-in-one conversion tool designed to make your life easier. Convert time zones, currencies, or units seamlessly across devices. Built with React and public APIs.',
      technologies: ['React', 'Public APIs', 'Vercel'],
      liveLink: 'https://uni-convert.vercel.app/',
      codeLink: 'https://github.com/yourusername/uniconvert', // Replace with your GitHub link
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          My Projects
        </motion.h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} style={styles.col}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card style={styles.card}>
                  <Card.Body>
                    <Card.Title style={styles.cardTitle}>
                      {project.title}
                    </Card.Title>
                    <Card.Text style={styles.cardText}>
                      {project.description}
                    </Card.Text>
                    <div style={styles.technologies}>
                      <strong>Technologies:</strong>{' '}
                      {project.technologies.join(', ')}
                    </div>
                    <div style={styles.links}>
                      <Button
                        variant="primary"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.linkButton}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </Button>
                      {project.codeLink && (
                        <Button
                          variant="outline-primary"
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.linkButton}
                        >
                          <FaGithub /> Code
                        </Button>
                      )}
                    </div>
                  </Card.Body>
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
    padding: '80px 0',
    background: '#f8f9fa', // Light background
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '40px',
    color: '#333',
    textAlign: 'center',
  },
  col: {
    marginBottom: '20px',
  },
  card: {
    height: '100%',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#333',
  },
  cardText: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
  },
  technologies: {
    fontSize: '0.9rem',
    color: '#777',
    marginBottom: '20px',
  },
  links: {
    display: 'flex',
    gap: '10px',
  },
  linkButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '25px',
    padding: '10px 20px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
  },
};

export default ProjectsShowcase;