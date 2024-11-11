import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import phone from "../assets/img/calling.png";
import mail from "../assets/img/email.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/github.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div className="main">
              <a href="tel:+971 0547452554" className="tag">
                <div className="base">
                  <img src={phone} alt="Icon" />
                </div>
                <h6>+971 0547452554</h6>
              </a>
              <a href="mailto:naveennissar15@gmail.com" className="tag">
                <div className="base">
                  <img src={mail} alt="Icon" />
                </div>
                <h6>naveennissar15@gmail.com</h6>
              </a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/naveennissar1/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/naveen.nissar.98/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/_mr._lallu/">
                <img src={navIcon3} alt="" />
              </a>
              <a
                href="https://github.com/naveennissar/"
                className="filter-github"
              >
                <img src={navIcon4} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
