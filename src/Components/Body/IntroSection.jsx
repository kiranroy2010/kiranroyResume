/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase,faLocationDot } from '@fortawesome/free-solid-svg-icons';


const IntroSection = (props) => {
  const profile = props.profile;



  return (
    <Container id='home'>
      <Row>
        <Col>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={8} sm={12}>
          <div className="media">
            <div className="autor_image">
              <img
                className="mr-3"
                src={profile.image}
                alt={`${profile.name} - Profile Picture`}
              />
            </div>
            <div className="media-body">
            <h5 className="mt-0">
                {profile.quickInfo.join(' || ')} 
              </h5>
              <p>
                {profile.introduction}
                </p>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <Row className="justify-content-md-around m-1">
            <address>
              <strong>{profile.name}</strong><br />
          
              <FontAwesomeIcon className="icon" icon={faBriefcase} />&ensp;:&ensp;
              {profile.currentCompany}<br />
              <FontAwesomeIcon className="icon" icon={faLocationDot} />&ensp;:&ensp;
              {profile.workLocation}<br />
              <i className="fa fa-envelope icon"></i>&ensp;:&ensp;
              <a className='emailAnchor' href={`mailto:${profile.email}?subject=Mail from Our Site`}>
                {profile.email}
              </a>
              <br />
              <ul className="social-icons">
                <li>
                  <a
                    className="linkedin"
                    target="_blank"
                    rel="noreferrer"
                    href={profile.socialLinks.linkedin}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    target="_blank"
                    rel="noreferrer"
                    href={profile.socialLinks.github}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    className="whatsapp"
                    id='whatsapp'
                    target="_blank"
                    rel="noreferrer"
                    href={profile.whatsapp_API}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    target="_blank"
                    rel="noreferrer"
                    href={profile.socialLinks.youtube}
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </address>
          </Row>
        </Col>
      </Row>
      <hr/>
    </Container>
  );
};

export default IntroSection;
