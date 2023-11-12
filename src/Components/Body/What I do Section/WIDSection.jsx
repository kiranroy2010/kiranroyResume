import React, { useState } from 'react';
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WIDSection.css'; // Import the CSS file

export default function WIDSection({profile}) {
    const whatIDo = profile.whatIDo;

    const [showModal, setShowModal] = useState(false);
    const [selectedContent, setSelectedContent] = useState({});

    const handleColClick = (content) => {
        setSelectedContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} sm={12} className="wid-heading">
                        <h2>What I do ?</h2>
                    </Col>
                    <Col md={12} sm={12} className="wid-description">
                        <h5>{profile.whatIDoDescription}</h5>
                    </Col>
                    <Col md={12} sm={12} className="wid-description">
                        <h3>Open for Collaboration! If You're Passionate About Projects, Let's Connect!</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                {whatIDo.map((item, index) => (
                    
                        <Col
                            key={index}
                            md={2}
                            sm={12}
                            className="wid-col d-flex flex-column align-items-center"
                            onClick={() => handleColClick(item)}
                        >
                            <div className="text-center">
                                <FontAwesomeIcon icon={item.icon} size="3x" className='icon' />
                                <h4>{item.title}</h4>
                            </div>
                        </Col>
                    ))}
    
</Row>


               <hr /> 

                {/* Modal */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedContent.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{selectedContent.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            
        </div>
    );
}


