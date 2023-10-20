import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import jobleap from '../assets/img/jobleap.png';
import maestro from '../assets/img/maestro.png';
import interview from '../assets/img/interview-scheduler.png';

export const Projects = () => {
  const projects = [
    {
      title: 'JobLeap',
      description: `JobLeap is a cutting-edge application that revolutionizes the job search experience. With JobLeap, users can effortlessly create personalized profiles and instantly access a curated list of job opportunities that align with their specific criteria. Seamlessly applying for jobs is made even easier as our integrated ChatGPT API dynamically modifies resumes based on individual requirements. Whether opting for the original or modified version, JobLeap empowers users to confidently pursue their career aspirations.`,
      techStack: "Express.js,React,Node.js,PostgreSQL,ChatGPT API",
      imageUrl: jobleap,
    },
    {
      title: 'Maestro Pizza',
      description: 'Twilio-powered app for real-time order updates, elevating the customer-restaurant experience with seamless tracking and tech integration.',
      techStack: "Express.js,jQuery,Node.js,PostgreSQL,Twilio API",
      imageUrl: maestro,
    },
    {
      title: 'Interview-Scheduler',
      description: `Interview Scheduler is a user-friendly, single-page application that facilitates the booking and management of mentor interviews for students.
      This React-based front-end application employs Express on the back-end, with PostgreSQL database support from the scheduler-api. Robust testing was performed using Jest and Cypress to ensure seamless functionality.`,
      techStack: "Express.js,React,Node.js,PostgreSQL",
      imageUrl: interview,
    },
  ];

  return (
    <section className="projects" id="project">
      <Container>
        <h2>Projects</h2>
        <p>Apps that I've built</p>
        <Row xs={1} md={2} className="g-4">
          {projects.map((project, idx) => (
            <Col key={idx}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.imageUrl} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}
                  <br></br>
                  <b>TechStacks used: </b>{project.techStack}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
