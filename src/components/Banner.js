import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerIm from "../assets/img/headerIm.png"
export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi, I'm a Web developer`}{" "}
              <span className="wrap">Full-Stack Web developer</span>
            </h1>
            <p>
              I am Thahira.I'm a Full-Stack developer based in Toronto.I love
              Briyani.Briyani is my life.{" "}
            </p>
            <button onClick={() => console.log("connect")}>Lets Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerIm} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
