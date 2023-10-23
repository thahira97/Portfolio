import { Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/github.svg";
import navIcon2 from "../assets/img/linkedin.svg";
import navIcon3 from "../assets/img/gmail.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo"></img>
          </Col>
          <Col>
            <div className="social-icon">
              <a href="https://github.com/thahira97">
                <img src={navIcon1} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/thahira-sheerin-40b89023b/">
                <img src={navIcon2} alt="Linkedin-profile" />
              </a>
              <a href="mailto:thahirasheerin3@gmail.com">
                <img src={navIcon3} alt="Gmail" />
              </a>
            </div>
            <p>&copy; 2023 thahirasheerin. All Rights Reserved</p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
