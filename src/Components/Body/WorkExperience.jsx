// Import necessary modules
import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

// Define the WorkExperience component
const WorkExperience = ({ profile }) => {
  const experience = profile.experience; // Get the experience data from the profile

  return (
    <Container id="WorkExp">
      <h2>Work Experience</h2>
      <hr />
      <Row>
        {experience.map((exp, index) => (
          <Col md={12} sm={12} key={index}>
            <div className="row">
              <Col xs={8}>
                <h4>{exp.title}</h4>
              </Col>

              <Col xs={3}>
                <h5 className="text-right">
                  <span aria-hidden="true"></span> {exp.date}
                </h5>
              </Col>
            </div>
            <Row>
              <Col xs={3}>
                {exp.type ? (
                  <Col xs={3}>
                    <h5>
                      <Badge bg="light" className="badge-secondary">
                        {exp.type}
                      </Badge>
                    </h5>{" "}
                  </Col>
                ) : null}
              </Col>
            </Row>

            <ul>
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
            <hr />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorkExperience;
