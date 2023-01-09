import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Instagram Database Design using PostGre"
              description="In this project we created Instragram Database Model using PostGre as a Query Tool. We also learned as a Database Designer what are the things we need to take care for Designing some user interactive database. Tools we use here is dbdiagram.io for designing the Database and making relational Diagram."
              ghLink="https://github.com/warcryy/Instagram_Database_Model"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NFT Marketplace"
              description="In this project I contributed mostly on the front end side . This is a college level project for CSE final year Students. We are successfully able to make a web application based upon Next js which helps user to create their own NFTs and provide them a marketplace to Host. The team also recieved the best Project Award during Pradarshana Event."
              ghLink="https://github.com/warcryy/NFT-Marketplace-Using-Blockchain"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="React-Firebase Form"
              description="This is a React based form which stores the user's data on Firebase. This Project is basically focused on SQL injection which uses to collect user's information from any link. I hosted this project over Netlify."
              ghLink=""
                        
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
