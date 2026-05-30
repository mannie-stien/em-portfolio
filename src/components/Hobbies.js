import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFutbol, FaTableTennis, FaFilm } from 'react-icons/fa';

const Hobby = () => {
  const hobbies = [
    {
      title: 'Soccer',
      description: 'A fast way to stay active, compete, and sharpen teamwork.',
      icon: <FaFutbol size={40} />,
      accent: 'green',
    },
    {
      title: 'Table Tennis',
      description: 'Quick reactions, focus, and strategy packed into every rally.',
      icon: <FaTableTennis size={40} />,
      accent: 'amber',
    },
    {
      title: 'Watching Movies',
      description: 'Thrillers and sci-fi are my favorite reset after deep work.',
      icon: <FaFilm size={40} />,
      accent: 'rose',
    },
  ];

  return (
    <section id="hobbies" className="section hobbies-section">
      <Container>
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker">Outside The Code</span>
          <h2>Balance that keeps the work sharp</h2>
          <p>
            A few regular interests that keep energy, curiosity, and focus in
            the mix.
          </p>
        </motion.div>
        <Row className="g-4">
          {hobbies.map((hobby, index) => (
            <Col md={4} key={hobby.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="h-100"
              >
                <article className={`hobby-card accent-${hobby.accent}`}>
                  <div className="hobby-icon">{hobby.icon}</div>
                  <h3>{hobby.title}</h3>
                  <p>{hobby.description}</p>
                </article>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hobby;
