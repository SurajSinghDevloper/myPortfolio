import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certicards from "./Certicards";
import Particle from "../Particle";
import intern from "../../Assets/intern.jpg";
import internship from "../../Assets/../Assets/Certificates/internship.pdf";
import javaimg from "../../Assets/../Assets/Certificates/java_certification.jpg";
import javacer from "../../Assets/../Assets/Certificates/java_certification.jpg";
import mysqlcer from "../../Assets/../Assets/Certificates/mysql.jpg";
import mysqlimg from "../../Assets/../Assets/Certificates/mysql.jpg";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've achieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={intern}
              isBlog={false}
              title="Internship Certificate"
              description="Successfully completed Software Developer Internship in the Nexthoughts Company."
              link={internship}
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={javaimg}
              isBlog={false}
              title="Java Programming"
              description="Successfully completed the Java programming course over the Stucor learning platform"
              link={javacer}
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={mysqlimg}
              isBlog={false}
              title="MySql"
              description="Successfully completed the MySql course over the Stucor learning platform"
              link={mysqlcer}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
