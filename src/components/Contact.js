import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import contactImg from "../assets/img/contact.png"
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
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
             <img src={contactImg} alt='Contact us'></img>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>{
                    onFormUpdate('firstName', e.target.value)
                  }}>

                  </input>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

    </section>
  )
  
};
