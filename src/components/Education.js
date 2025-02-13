import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFutbol, FaTableTennis, FaFilm } from "react-icons/fa";

const EducationAndHobbies = () => {
  const educationData = [
    {
      institution: "University of Example",
      degree: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
      description:
        "Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning.",
      logo: "https://via.placeholder.com/100",
    },
    {
      institution: "Online Course Platform",
      degree: "Full-Stack Web Development Certification",
      duration: "2021",
      description:
        "Completed a comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      logo: "https://via.placeholder.com/100",
    },
    {
      institution: "High School of Excellence",
      degree: "High School Diploma",
      duration: "2014 - 2018",
      description:
        "Graduated with a focus on Mathematics and Science. Participated in coding competitions and robotics clubs.",
      logo: "https://via.placeholder.com/100",
    },
  ];

  const hobbies = [
    {
      title: "Soccer",
      description:
        "I love playing soccer. It’s a great way to stay active and work as a team.",
      icon: <FaFutbol size={40} />,
      color: "#28a745",
    },
    {
      title: "Table Tennis",
      description: "Table tennis is my go-to indoor sport. It’s fast-paced and fun!",
      icon: <FaTableTennis size={40} />,
      color: "#007bff",
    },
    {
      title: "Watching Movies",
      description:
        "I enjoy watching movies, especially thrillers and sci-fi. It’s a great way to relax.",
      icon: <FaFilm size={40} />,
      color: "#dc3545",
    },
  ];

  return (
    <section id="education-hobbies" style={styles.section}>
      <Container>
        <Row>
          {/* Education Section */}
          <Col md={6} className="mb-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={styles.title}
            >
              Education
            </motion.h2>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card style={styles.card}>
                  <Card.Body style={styles.cardBody}>
                    <div style={styles.logoContainer}>
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        style={styles.logo}
                      />
                    </div>
                    <Card.Title style={styles.institution}>{edu.institution}</Card.Title>
                    <Card.Subtitle style={styles.degree}>{edu.degree}</Card.Subtitle>
                    <Card.Text style={styles.duration}>{edu.duration}</Card.Text>
                    <Card.Text style={styles.description}>{edu.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </Col>

          {/* Hobbies Section */}
          <Col md={6} className="mb-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={styles.title}
            >
              My Hobbies
            </motion.h2>
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card style={styles.card}>
                  <Card.Body style={styles.cardBody}>
                    <div style={{ ...styles.iconContainer, backgroundColor: hobby.color }}>
                      {hobby.icon}
                    </div>
                    <Card.Title style={styles.cardTitle}>{hobby.title}</Card.Title>
                    <Card.Text style={styles.cardText}>{hobby.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Styles
const styles = {
  section: {
    padding: "80px 0",
    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)", // Gradient background
    scrollMarginTop: "80px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#2c3e50", // Dark blue for titles
    textAlign: "center",
    marginBottom: "40px",
    position: "relative",
    "&::after": {
      content: '""',
      display: "block",
      width: "60px",
      height: "4px",
      background: "#007bff", // Blue underline
      margin: "10px auto 0",
      borderRadius: "2px",
    },
  },
  card: {
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
    },
  },
  cardBody: {
    padding: "25px",
    textAlign: "center",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #007bff", // Blue border for logos
  },
  institution: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#2c3e50", // Dark blue for institution name
    marginBottom: "10px",
  },
  degree: {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#555",
    marginBottom: "10px",
  },
  duration: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
  },
  iconContainer: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#2c3e50", // Dark blue for titles
  },
  cardText: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
  },
};

export default EducationAndHobbies;