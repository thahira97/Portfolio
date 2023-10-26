import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import contactImg from "../assets/img/2757.png";
import thank from "../assets/img/v887-techi-24.png";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending..");
    
    try {
      const response = await fetch("https://portfolio-back-alpha.vercel.app/contact", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
  
      const result = await response.json();
      
      setFormDetails(formInitialDetails);
      
      if (result.code === 200) {
        console.log(result);
        setStatus({ success: true, message: "Message sent successfully 🚀" });
      } else {
        console.log(result);
        setStatus({
          success: false,
          message: "Oops! Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      setStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setButtonText("Send");
    }
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
            <form onSubmit={handleSubmit}>
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
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => {
                      onFormUpdate("message", e.target.value);
                    }}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="thank-img">
        <img src={thank} alt="thanks" />
      </div>
    </section>
  );
};
