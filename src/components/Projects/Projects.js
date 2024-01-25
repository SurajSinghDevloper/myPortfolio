import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LMS from "../../Assets/Projects/LMS.jpeg";

import Eggle from "../../Assets/Projects/E-ggle.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Horti from "../../Assets/Projects/Horti.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/SurajSinghDevloper/User/blob/master/FlipBasket.png?raw=true"
              isBlog={false}
              title="Flip-Basket"
              description="This is an E-Commerce Project. Techonologies used in React-js, Node-js, Express, MongoDb and for payment I had used Razorpay gateway."
              link="https://github.com/SurajSinghDevloper/FlipBasket"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="LMS"
              description="LMS Elearn platform, Mainly focused on the Authentication using passport.js and more tools"
              link="https://github.com/vmmuthu31/LMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Horti}
              isBlog={false}
              title="HortiPedia"
              description="Hortipedia is a question and answer website for professional and developing farmers."
              link="https://github.com/E-ggle/HortiPedia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/179293522-f79adfc6-2c7d-4a4c-813b-756c7bec0af2.png"
              isBlog={false}
              title="Twitter in Web3"
              description="Nextjs is used for frontend, solidity is for implementation of smart contracts, sanity.i.o is used to manage the text and images."
              link="https://github.com/vmmuthu31/Twitter-using-web3-and-blockchain"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Dynamic Portfolio"
              description="It is Portfolio website where the developers can modify it according to the user needs."
              link="https://vm-portfolio3.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/96901635/191006996-0c185cdd-5834-47c6-8927-2e7d539866a7.png"
              isBlog={false}
              title="Project Management System"
              description="It was built in MERN stack by using the GraphQL for the API call. It was an Dynamic Application where the user can Create/Read/Update/Delete the content."
              link="https://github.com/vmmuthu31/Project-Management-System"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
