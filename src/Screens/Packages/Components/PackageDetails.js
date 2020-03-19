import React, { Component } from 'react';
import { Card, Col, Row, Container, Form, Button } from 'react-bootstrap';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";


// Components

import Navbar from '../../../Components/Navbar/Navbar';

// Assets

import logo from '../../../Assets/Images/event1.jpg';
import image1 from '../../../Assets/Images/event.jpg';
import image2 from '../../../Assets/Images/eventsCover.jpg';
import image3 from '../../../Assets/Images/testimonial.jpg';

class PackageDetails extends Component {
    render() {

        const images = [
            {
                original: logo,
                thumbnail: logo,
            },
            {
                original: image1,
                thumbnail: image1,
            },
            {
                original: image2,
                thumbnail: image2,
            },
            {
                original: image3,
                thumbnail: image3,
            },
        ]

        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <div style={{
                        backgroundImage: `url(${logo})`,
                        width: '100%',
                        height: '400px',
                        backgroundSize: '100% 100%'
                    }}>

                    </div>

                </div>
                <Container style={{ marginTop: '50px' }} fluid>
                    <Row>
                        <Col md={8}>
                            <div>
                                <ImageGallery style={{ height: 50 }} thumbnailPosition='bottom' autoPlay={true} items={images} />
                            </div>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={3}>
                            <Row>
                                <Card style={{ minWidth: 325 }}>
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title style={{ textAlign: 'center' }}>
                                                <strong>RS 30,000</strong>
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Text>
                                            Call Youth Event Oganizers For More info
                                          <br />
                                          Feel Free to call
                                          <br />
                                          0311-1017653
                                      </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Col md={12} style={{ marginTop: '5rem' }}>
                                    <h3>
                                        Your Requirements
                                    </h3>
                                    <br/>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
    </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control type="number" placeholder="Contact Number"/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
  </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default PackageDetails;