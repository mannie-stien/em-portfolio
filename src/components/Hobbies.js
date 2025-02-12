import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFutbol, FaTableTennis, FaFilm } from 'react-icons/fa'; // Icons for hobbies

const Hobby = () => {
  const hobbies = [
    {
      title: 'Soccer',
      description: 'I love playing soccer. It’s a great way to stay active and work as a team.',
      icon: <FaFutbol size={40} />,
      color: '#28a745', // Green for soccer
    },
    {
      title: 'Table Tennis',
      description: 'Table tennis is my go-to indoor sport. It’s fast-paced and fun!',
      icon: <FaTableTennis size={40} />,
      color: '#007bff', // Blue for table tennis
    },
    {
      title: 'Watching Movies',
      description: 'I enjoy watching movies, especially thrillers and sci-fi. It’s a great way to relax.',
      icon: <FaFilm size={40} />,
      color: '#dc3545', // Red for movies
    },
  ];

  return (
    <section id="hobbies" style={styles.section}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          My Hobbies
        </motion.h2>
        <Row>
          {hobbies.map((hobby, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
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
            </Col>
          ))}
        </Row>
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
    marginBottom: '40px',
    fontWeight: '700',
    color: '#61dafb',  // Dark blue for title
  },
  card: {
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '30px',
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    color: '#fff', // White icon color
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#2c3e50', // Dark blue for title
  },
  cardText: {
    fontSize: '1rem',
    color: '#666', // Gray for text
  },
};

export default Hobby;