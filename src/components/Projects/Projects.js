import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import horrflix from "../../Assets/Projects/horrflix.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import foxextension from "../../Assets/Projects/foxpassmanager.png";

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
              imgPath={horrflix}
              isBlog={false}
              title="Horrflix"
              description="A Netflix clone with horror themeThis is a clone of the Netflix user interface, with a horror movie theme, developed with React. The project uses The Movie Database (TMDb) API to fetch information about horror movies."
              ghLink="https://github.com/alexbecerradev/netflixclone"
              demoLink="https://netflixclone-olive.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Global Weather App"
              description="Mobile application made in Flutter that consumes a weather API to get the current temperature and weather conditions in all cities around the world. It features a simple and intuitive user interface."
              ghLink="https://github.com/alexbecerradev/flutterweatherapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foxextension}
              isBlog={false}
              title="Fox Hound Pass Manager"
              description="This is a simple Chrome extension that allows users to manage their passwords. It features functionalities such as saving passwords for different websites, generating random passwords, and viewing saved passwords."
              ghLink="https://github.com/alexbecerradev/foxhoundpassmanager"        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
