import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';
import { experiences } from '../assets/icons/data';

const Experience = () => {
  return (
    <section id="experience" style={styles.section}>
      <Container>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          Experience
        </motion.h2>

        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                ...styles.timelineItem,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              {/* Left/Right Content Block */}
              <div style={styles.content}>
                <h3 style={styles.role}>{exp.role}</h3>
                <h4 style={styles.company}>{exp.company}</h4>
                <p style={styles.duration}>{exp.duration}</p>
                <ul style={styles.list}>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} style={styles.listItem}>
                      <FaCircle style={styles.icon} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Line & Marker */}
              <div style={styles.markerContainer}>
                <div style={styles.marker} />
                <div style={styles.line} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const styles = {
 section: {
    padding: "80px 0 40px 0", // Adjusted padding to account for the navbar
    textAlign: "center",
    scrollMarginTop: "80px", // Ensure the section aligns below the navbar
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '50px',
    color: '#61dafb', 
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: '20px 0',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '40px',
  },
  content: {
    width: '50%',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 2,
  },
  role: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '5px',
  },
  company: {
    fontSize: '1.2rem',
    color: '#777',
    marginBottom: '5px',
  },
  duration: {
    fontSize: '1rem',
    color: '#555',
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '0.95rem',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '8px',
    marginRight: '8px',
    color: '#007bff',
  },
  markerContainer: {
    width: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  marker: {
    width: '14px',
    height: '14px',
    background: '#007bff',
    borderRadius: '50%',
  },
  line: {
    width: '2px',
    height: '100px',
    background: '#007bff',
    marginTop: '10px',
  },
};

export default Experience;
