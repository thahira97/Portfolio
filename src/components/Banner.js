import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerIm from "../assets/img/headerIm.png";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full-Stack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return ()=> {
      clearInterval(ticker)
    }
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length+1)

    setText(updatedText)
    
    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText){
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === ""){
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
             <h1>
              {`Hi, I'm Thahira`}{" "}
              <div> <span className="wrap">{text}</span></div>
            </h1>
          <Col xs={12} md={6} xl={7}>
            <button onClick={() => console.log("connect")}>
              Lets Connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerIm} alt="Header"></img>
            <h3> <p>
            Welcome to my space-themed portfolio!Let's explore my space-a universe of creativity and innovation. Journey through the galaxies of my work and discover the stars of my achievements. Feel free to embark on this cosmic adventure!{" "}
            </p></h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
