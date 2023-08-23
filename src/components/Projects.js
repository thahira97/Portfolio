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
      description: "Resume Modification App",
      imageUrl: jobleap,
    },
    {
      title: "Maestro Pizza",
      description: "A food-ordering app",
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
              <Card>
                <Card>
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
