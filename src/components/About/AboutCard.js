import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akhil Pathak </span>
            from <span className="purple"> Bihar , India.</span>
            <br />I have completed my BE in civil engineering from M S Ramaiah Institute of Technology , Bangalore.
            <br />
            <br />I got campus placed in Cognizant where my coding journey started, I am really passionate about developing real world project and I am also very adaptive with latest Tech stacks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books [Current favourite : 5 Rings by Miyamoto Musashi ]
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness 
            </li>
            <li className="about-activity">
              <ImPointRight /> Sudden Travelling Plans
            </li>
          </ul>

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
