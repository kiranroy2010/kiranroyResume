import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  faUsers,
  faUserFriends,
  faCodeBranch,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GitHubUser.css"; // Create a separate CSS file for styling

const GitHubUser = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/kiranroy2010"
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to fetch data from GitHub API");
        }
      } catch (error) {
        console.error("Error while fetching data from GitHub API", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Container className="github-user py-4">
      {userData ? (
        <div>
          <hr />
          <Row>
            <Col md={8} sm={12}>
              <h2>Socials</h2>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col md={3} xs={10} className="user-details user-info">
              <div>
                <Col>
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="SocialLink"
                  >
                    <h2>{userData.login}</h2>
                  </a>
                </Col>

                <h6>
                  <FontAwesomeIcon icon={faUsers} /> Followers:{" "}
                  {userData.followers}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faUserFriends} /> Following:{" "}
                  {userData.following}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faCodeBranch} /> Repos:{" "}
                  {userData.public_repos}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faClock} /> Updated at:{" "}
                  {new Date(userData.updated_at).toLocaleString()}
                </h6>
              </div>
              
            </Col>
         
            <Col md={3} xs={10} className="user-details user-info">
              <div>
                <Col>
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="SocialLink"
                  >
                    <h2>{userData.login}</h2>
                  </a>
                </Col>

                <h6>
                  <FontAwesomeIcon icon={faUsers} /> Followers:{" "}
                  {userData.followers}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faUserFriends} /> Following:{" "}
                  {userData.following}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faCodeBranch} /> Repos:{" "}
                  {userData.public_repos}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faClock} /> Updated at:{" "}
                  {new Date(userData.updated_at).toLocaleString()}
                </h6>
              </div>
            </Col>
          </Row>
        </div>
      ) : null}
    </Container>
  );
};

export default GitHubUser;
