import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alex Becerra </span>
            from <span className="purple"> Pergamino, Argentina.</span>
            <br />
            <span> I am a freelance developer and IT technician. I mainly focus </span>
            on creating websites but I am also interested in mobile app 
            development, among other things.
            <br />
            <br />
            Also:
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I am a first-time father.
            </li>
            <li className="about-activity">
              <ImPointRight /> I enjoy music.
            </li>
            <li className="about-activity">
              <ImPointRight /> I am a fan of horror movies.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
