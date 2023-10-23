import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/rocketImg.png";
import navIcon1 from "../assets/img/github.svg";
import navIcon2 from "../assets/img/linkedin.svg";
import navIcon3 from "../assets/img/gmail.svg";
import resume from "../assets/img/Resume-Thahira.pdf"
import 'bootstrap/dist/css/bootstrap.min.css'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{width: "50px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <a href={resume} download="Thahira-Resume.pdf">
            <button className="contact" onClick={() => console.log("connect")}>
              <span>Resume</span>
            </button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
