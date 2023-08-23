import {Container, Row, Col, Nav, TabContainer, TabContent, TabPane} from 'react-bootstrap'
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
        <p>Apps I have built</p>
        <TabContainer id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="first">React projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">jQuery projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">
          Ruby
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent>
      <TabPane eventKey="first">
       <Row>
        {
          projects.map((project, index) => {
            return (
              <p>{project.title}</p>
            )
          })
        }
       </Row>
      </TabPane>
    </TabContent>
    </TabContainer>
        </Col>
      </Row>
    </Container>
    </section>
  );
};
 