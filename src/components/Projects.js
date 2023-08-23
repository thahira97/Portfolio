import {Container, Row, Col, Nav} from 'react-bootstrap'
export const Projects = () => {
 const projects = [{
  title: "JobLeap",
  description: "Resume Modification App",
  imageUrl: "../assets/img/jobleap.png"
 },
 {title: "Maestro Pizza",
 description: "A food-ordering app",
 imageUrl: "../assets/img/maestro.png"
 },
 {title: "Interview-Scheduler",
  description: "A real time interview booking app",
  imageUrl: "../assets/img/interview-scheduler.png"
 }
]
  return (
    <section className="projects" id="project">
    <Container>
      <Row>
        <Col>
        <h2>Projects</h2>
        <p>Checkout the my works</p>
        <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </Col>
      </Row>
    </Container>
    </section>
  );
};
 