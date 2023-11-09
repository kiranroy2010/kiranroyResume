/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row, Col, Badge, Carousel,Card,Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';

const IntroSection = (props) => {
  const profile = props.profile;

  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <h2>Education</h2>
          <hr />
          {profile.education.map((edu, index) => (
            <div key={index}>
              <Row>
                <Col xs={6}>
                  <h4>{edu.name}</h4>
                </Col>
                <Col xs={6}>
                  <h5 className="text-right">
                    <span aria-hidden="true"></span> {edu.date}
                  </h5>
                </Col>
              </Row>
              <h5>
                <Badge bg="light" className="badge-secondary">
                  {edu.degree}
                </Badge>
              </h5>
              <hr />
            </div>
          ))}
        </Col>

        <Col md={6} sm={12}>
          <h2>Certifications</h2>
          <hr />
          <ul>
            {/* Certification entries */}
            {profile.certifications.map((certification, index) => (
              <li key={index}>
                {/* <p>{certification.name}</p> */}
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="CertificationStyle"
                >
                  <h6>{certification.name}</h6> 
                </a>
              </li>
            ))}
          </ul>
          <hr />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col md={6} sm={12}>
          <h2>Skill Set</h2>
          <hr />
          <div className="skill_chart">
            <div className="row">
              {profile.skills.map((skill, index) => (
                <div className="col-md-5" key={index}>
                  <ul className="skill-list">
                    <li>{skill}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr/>
        </Col>

        <Col md={6} sm={12}>
        <h2 className="YouTubeBg">
  <a href={profile.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faYoutube} />&ensp;:&ensp; YouTube <span style={{ fontSize: '16px' }}>(Bit by Bit Official)</span>
  </a>
</h2>


          <hr />
          <Carousel touch={true} controls={true} fade={false} slide={true} className="Youtube-container">
  {profile.youtube.map((video, index) => (
    <Carousel.Item key={index}>
      <Card>
        <Card.Img variant="top" src={video.banner} style={{ height: '200px' }} />
        <Card.Body className="Youtube-card" >
          <Card.Title><h4> {video.title}</h4> </Card.Title>
          <Card.Text className="Youtube-text">{video.shortDesc}</Card.Text>
          <Button  className="YoutubeButton" href={video.link} target="_blank">
            Watch Video
          </Button>

        </Card.Body>
      </Card>
      <br />
    </Carousel.Item>
  ))}
</Carousel>
<marquee behavior="scroll" style={{ fontSize: '20px', color: '#171819'}} direction="right"> <FontAwesomeIcon icon={faYoutube} /> Like Share Subscribe</marquee>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default IntroSection;
