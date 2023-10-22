import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact us"></img>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => {
                      onFormUpdate("firstName", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => {
                      onFormUpdate("lastName", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="yourname@gmail.com"
                    onChange={(e) => {
                      onFormUpdate("email", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Your mobile number"
                    onChange={(e) => {
                      onFormUpdate("phone", e.target.value);
                    }}
                  ></input>
                </Col>
                <Col>
                <textarea row="6" value={formDetails.message} placeholder="Message"  onChange={(e) => {
                      onFormUpdate("message", e.target.value);
                    }}>
                </textarea>
                <button type="submit"><span>
                  {buttonText}
                  </span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};