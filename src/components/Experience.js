import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { experiences } from '../assets/icons/data';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <Container>
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker">Experience</span>
          <h2>Backend, integrations, and full-stack delivery</h2>
          <p>
            Resume-backed highlights from BambooHR, 25:2 Solutions,
            SafeStreets USA, and Alder Holdings.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              className="experience-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="experience-index">
                {String(index + 1).padStart(2, '0')}
              </div>
              <article className="experience-content">
                <div className="experience-meta">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <ul className="responsibility-list">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
