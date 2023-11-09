import React, { useState } from "react";
import { Card, Button, Row, Col, Modal, Container } from "react-bootstrap";

const ProjectInfo = ({ profile }) => {
  const projects = profile.projects;
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div>
      <Container id="Projects">
        <Row>
          <Col md={8} sm={12}>
            <h2>Projects</h2>
          </Col>
          <Col md={4} sm={12}>
            <h5 style={{paddingTop:'10px'}}>Projects Count: <span style={{color:'#0174BE'}}>{profile.projects.length}</span> </h5>
          </Col>
        </Row>

        <hr />
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4}>
              <Card className="ProjectCard">
                {project.projectImg ? (
                  <Card.Img variant="top" src={project.projectImg} />
                ) : (
                  <Card.Img
                    variant="top"
                    src="https://dummyimage.com/640x360/fff/aaa"
                    alt={project.name}
                  />
                )}
                <hr />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.shortDescription}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(project)}
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <ProjectModal
          show={showModal}
          project={selectedProject}
          handleClose={() => setShowModal(false)}
        />
      </Container>
    </div>
  );
};

const ProjectModal = ({ show, project, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{project && project.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {project && project.client ? (
          <p>
            <b>Client: </b>
            {project && project.client}
          </p>
        ) : null}
        <p>
          <b>Project: </b>
          {project && project.description}
        </p>
        <p>
          <b>Technologies Used: </b>
          {project && project.techStack.join(", ")}
        </p>
        <hr />
        {project && project.link ? (
          <p>
            <b>View Project: </b>
            <a
              href={project && project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project && project.link}
            </a>
          </p>
        ) : (
          <p>
            <b>View Project:</b> Project Preview Link Unavaliable
          </p>
        )}

        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectInfo;
