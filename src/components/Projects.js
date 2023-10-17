import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  ListGroup,
} from "react-bootstrap";
import jobleap from "../assets/img/jobleap.png";
import maestro from "../assets/img/maestro.png";
import interview from "../assets/img/interview-scheduler.png";

export const Projects = () => {
  const projects = [
    {
      title: "JobLeap",
      description: "Transforming job searches with personalized profiles and curated opportunities, featuring dynamic resume customization via integrated ChatGPT API.",
      imageUrl: jobleap,
    },
    {
      title: "Maestro Pizza",
      description: "Twilio-powered app for real-time order updates, elevating the customer-restaurant experience with seamless tracking and tech integration.",
      imageUrl: maestro,
    },
    {
      title: "Interview-Scheduler",
      description: "A real time interview booking app",
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
              <Card style={{width: "40rem"}}>
                <Card >
                  <Card.Img variant="top" src={project.imageUrl} />
                </Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
