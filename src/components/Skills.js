import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faTools,
  faUserTie,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// Data and configuration
const skillsData = {
  "Front-End Development": [
    "React.js",
    "Angular",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "TailwindCSS",
    "Bootstrap",
  ],
  "Back-End Development": [
    "Node.js",
    "Express.js",
    "Django",
    "ASP.NET",
    "Spring Boot",
    "Python",
    "REST APIs",
  ],
  "DevOps & Tools": ["Docker", "Git", "GitHub", "CI/CD", "AWS"],
  "Soft Skills": [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Resilience",
    "Adaptability",
    "Critical Thinking",
  ],
};

const icons = {
  "Front-End Development": faCode,
  "Back-End Development": faDatabase,
  "DevOps & Tools": faTools,
  "Soft Skills": faUserTie,
};

const colors = {
  "Front-End Development": "#E3F2FD",
  "Back-End Development": "#E3F2FD",
  "DevOps & Tools": "#E3F2FD",
  "Soft Skills": "#E3F2FD",
};

const Skills = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="skills" style={styles.section}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          My Skills
        </motion.h2>
        <Row>
          {Object.entries(skillsData).map(([category, skills]) => (
            <Col xs={12} sm={6} md={6} lg={3} key={category} style={styles.col}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  style={{
                    ...styles.card,
                    backgroundColor: colors[category],
                    height: expanded === category ? "auto" : "250px",
                  }}
                  onMouseEnter={() => setExpanded(category)}
                  onMouseLeave={() => setExpanded(null)}
                  onClick={() =>
                    setExpanded(expanded === category ? null : category)
                  } // Toggle on click for mobile
                >
                  <Card.Body style={styles.cardBody}>
                    <FontAwesomeIcon
                      icon={icons[category]}
                      style={styles.icon}
                    />
                    <Card.Title style={styles.categoryTitle}>
                      {category}
                    </Card.Title>

                    <motion.div
                      animate={{ rotate: expanded === category ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={styles.arrow}
                      />
                    </motion.div>

                    {expanded === category && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        style={styles.list}
                      >
                        {skills.map((skill) => (
                          <li key={skill} style={styles.listItem}>
                            {skill}
                          </li>
                        ))}
                      </motion.ul>
                    )}
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
    padding: "80px 0 40px 0", // Adjusted padding to account for the navbar
    textAlign: "center",
    scrollMarginTop: "80px", // Ensure the section aligns below the navbar
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#61dafb",
    "@media (max-width: 768px)": {
      fontSize: "2rem", // Smaller font size for mobile
    },
  },
  col: {
    marginBottom: "20px", // Add spacing between cards on smaller screens
  },
  card: {
    borderRadius: "15px",
    boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
    textAlign: "center",
    padding: "20px",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      height: "auto", // Allow cards to expand fully on mobile
    },
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#333",
  },
  icon: {
    fontSize: "2.5rem",
    marginBottom: "15px",
    "@media (max-width: 768px)": {
      fontSize: "2rem", // Smaller icon size for mobile
    },
  },
  categoryTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    "@media (max-width: 768px)": {
      fontSize: "1.2rem", // Smaller title size for mobile
    },
  },
  arrow: {
    fontSize: "1.5rem",
    marginTop: "10px",
    color: "#333",
    "@media (max-width: 768px)": {
      fontSize: "1.2rem", // Smaller arrow size for mobile
    },
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
    textAlign: "left",
    width: "100%",
  },
  listItem: {
    fontSize: "1.1rem",
    padding: "5px 0",
    color: "#333",
    "@media (max-width: 768px)": {
      fontSize: "1rem", // Smaller list item size for mobile
    },
  },
};

export default Skills;