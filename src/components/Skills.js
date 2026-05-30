import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faTools,
  faCloud,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

// Data and configuration
const skillsData = {
  "Languages": [
    "PHP",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
  ],
  "Backend": [
    "Node.js",
    "Django",
    "Laravel",
    "RESTful APIs",
    "Microservices",
    "OOP",
  ],
  "Frontend": [
    "React",
    "React Native",
    "Angular",
    "Expo",
    "Responsive UI",
  ],
  "Databases": [
    "PostgreSQL",
    "MySQL",
    "Schema Design",
    "Query Optimization",
    "Indexing",
  ],
  "DevOps & Cloud": [
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
  ],
  "AI & Automation": [
    "Claude",
    "OpenAI Codex",
    "GitHub Copilot",
    "Cursor",
    "Windsurf",
    "Prompt Engineering",
  ],
};

const icons = {
  "Languages": faCode,
  "Backend": faTools,
  "Frontend": faCode,
  "Databases": faDatabase,
  "DevOps & Cloud": faCloud,
  "AI & Automation": faRobot,
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <Container>
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker">Technical Range</span>
          <h2>Skills that move ideas into production</h2>
          <p>
            Backend-first engineering with practical frontend range, database
            discipline, cloud delivery, and AI-assisted development workflows.
          </p>
        </motion.div>
        <Row className="g-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Col xs={12} md={6} lg={4} key={category}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-100"
              >
                <article className="skill-card">
                  <div className="skill-card-header">
                    <span className="skill-icon" aria-hidden="true">
                      <FontAwesomeIcon icon={icons[category]} />
                    </span>
                    <h3>{category}</h3>
                  </div>
                  <div className="skill-list">
                    {skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
