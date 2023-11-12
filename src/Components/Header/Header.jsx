import React, { useState, useEffect } from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Header(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every 1 second

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentTime.toLocaleString("en-GB", {
    weekday:'long',
    day: "2-digit",
    month: "short", // Display month name
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12-hour format
  });

  return (
    <div>
      <Navbar expand="lg" className="NavigationBar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="ProfileName" href="/kiranroyResume">
            <h1>{props.profile.name}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#WorkExp">Work Experience</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <NavDropdown title="Socials" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href={props.profile.socialLinks.youtube}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} /> : YouTube
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={props.profile.socialLinks.linkedin}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> : Linkedin
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={props.profile.socialLinks.github}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} /> : Github
                </NavDropdown.Item>
                {props.profile.Whatsapp_Number ? (
  <>
    <NavDropdown.Divider />
    <NavDropdown.Item href={props.profile.whatsapp_API} target="_blank">
      <FontAwesomeIcon icon={faWhatsapp} /> : WhatsApp
    </NavDropdown.Item>
  </>
) : null}

              </NavDropdown>
            </Nav>
            <Navbar.Text>{`${formattedDate}, ${formattedTime}`}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
