import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Suraj Kumar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright ©{year} SurajKumar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SurajSinghDevloper"
                style={{ color: "white", cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>

            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/SurajKumarSingh"
                style={{ color: "white", cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/suraj-kumar-442277230/"
                style={{ color: "white", cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/surajsinghtrippy/"
                style={{ color: "white", cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
