import React, { Component } from 'react';
import { Card, Col, Row, Container, Form, Button } from 'react-bootstrap';
import { InputLabel, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";


// Components

import Navbar from '../../../Components/Navbar/Navbar';
import { EventTypes, EventTimes } from './Dropdown';

// Assets

import logo from '../../../Assets/Images/event1.jpg';
import image1 from '../../../Assets/Images/event.jpg';
import image2 from '../../../Assets/Images/eventsCover.jpg';
import image3 from '../../../Assets/Images/testimonial.jpg';

const styles = {
    textField: {
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
            "& $notchedOutline": {
                borderColor: '#AD365C !important',
                border: '2px solid',
            }
        },
        marginBottom: '10px',
    },
    notchedOutline: {
        borderColor: '#AD365C',
    },
    focused: {
        "& $notchedOutline": {
            borderColor: '#AD365C !important',
        }
    },
};

class PackageDetails extends Component {

    state = {
        name: '',
        email: '',
        contactNumber: '',
        guests: '',
        eventDate: '',
        eventLocation: '',
        eventType: '',
        eventTime: '',
        otherRequirements: '',
    }

    getEventTypes = eventType => {
        this.setState({
            eventType,
        })
    }

    getEventTimes = eventTime => {
        this.setState({
            eventTime,
        })
    }

    render() {
        const { classes } = this.props;

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
                            <Container style={{border:'1px solid #AD365C' , marginTop : '3rem'}}>
                                <Col md={12} style={{ marginTop: '5rem' }}>
                                    <h3>
                                        Your Requirements
                                    </h3>
                                    <br />

                                    <TextField
                                        id="standard-basic"
                                        size='small'
                                        required
                                        placeholder="Name"
                                        className={classes.textField}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            }
                                        }}
                                        style={{ width: '100%' , marginTop:'3rem' }}
                                        onChange={e => this.setState({ name: e.target.value })}

                                    />

                                    <TextField
                                        id="standard-basic"
                                        size='small'
                                        required
                                        placeholder="Email"
                                        className={classes.textField}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            }
                                        }}
                                        style={{ width: '100%', marginTop:'3rem' }}
                                        onChange={e => this.setState({ email: e.target.value })}

                                    />

                                    <TextField
                                        id="standard-basic"
                                        size='small'
                                        required
                                        placeholder="Number"
                                        className={classes.textField}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            }
                                        }}
                                        type='number'
                                        style={{ width: '100%', marginTop:'3rem' }}
                                        onChange={e => this.setState({ contactNumber: e.target.value })}

                                    />

                                    <TextField
                                        id="standard-basic"
                                        size='small'
                                        required
                                        placeholder="Date"
                                        className={classes.textField}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            }
                                        }}
                                        type='text'
                                        style={{ width: '100%', marginTop:'3rem' }}
                                        onChange={e => this.setState({ eventDate: e.target.value })}

                                    />

                                    <TextField
                                        id="standard-basic"
                                        size='small'
                                        required
                                        placeholder="Location"
                                        className={classes.textField}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            }
                                        }}
                                        type='text'
                                        style={{ width: '100%' , marginTop:'3rem'}}
                                        onChange={e => this.setState({ eventLocation: e.target.value })}

                                    />

                                    <TextField
                                        id="standard-basic"
                                        size='small'
                                        required
                                        placeholder="No. Of guests"
                                        className={classes.textField}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            }
                                        }}
                                        type='number'
                                        style={{ width: '100%', marginTop:'3rem' }}
                                        onChange={e => this.setState({ guests: e.target.value })}

                                    />



                                    <EventTypes opt={this.getEventTypes} />

                                    <EventTimes opt={this.getEventTimes} />

                                    <Button style={{ backgroundColor: '#AD365C',  borderColor: '#AD365C' }}>
                                        Submit
  </Button>
    
                                </Col>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default withStyles(styles)(PackageDetails);