import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";
import { Link } from 'react-router-dom';

// Components
import { EventTypes, EventTimes } from './Dropdown';
import Footer from '../../../Components/Footer/Footer';
import Description from './ProductDescription';

// Assets

import logo from '../../../Assets/Images/us19.jpg';

// axios
import axios from 'axios';

// connection
import baseUrl from '../../../config/api';

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
    button: {
        backgroundColor: 'white',
        color: '#AD365C',
        borderColor: '#AD365C !important',

        '&:hover': {
            backgroundColor: '#AD365C',
            borderColor: '#AD365C',

        },
    }
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
        price: '',
        overview: '',
        pics: []
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

    componentDidMount() {
        this.getPackageById();
    }

    getPackageById = () => {
        const packageId = this.props.match.params.id;

        axios({
            url: `${baseUrl}/package/get-package?id=${packageId}`,
            method: 'GET'
        })
            .then(response => {
                this.setState({
                    price: response.data.price,
                    overview: response.data.overview,
                    pics: response.data.pictures
                })
            })
            .catch((err) => {
                console.log(err);
            })

    }


    render() {
        const { classes } = this.props;
        const { price, overview, pics } = this.state;


        const images = [];
        pics.length > 0 &&
            pics.forEach(url => {
                images.push({
                    original: url,
                    thumbnail: url,
                })
            });

        return (
            <Container>
                <div style={{
                    backgroundImage: `url(${logo})`,
                    width: '100%',
                    height: '300px',
                    backgroundSize: '100% 100%'
                }}>

                </div>
                <div style={{ height: 80 }} />
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <ImageGallery
                            style={{ height: 50 }}
                            thumbnailPosition='bottom'
                            autoPlay={true} items={images}
                        />

                        <h2><strong>About the Deal</strong></h2>

                        <Description overview={overview} />
                    </Grid>
                    <Grid item xs={4}>
                        <Card style={{ minWidth: 325, borderColor: '#AD365C' }}>
                            <Card.Body>
                                <Card.Header style={{ backgroundColor: 'white', color: '#AD365C' }}>
                                    <Card.Title style={{ textAlign: 'center' }}>
                                        <strong>RS {price}</strong>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Text>
                                    . Need Any Sort OF Help
                                          <br />
                                          . Chat with Youth Event Oganizers For More info
                                          <br />
                                          . Click The Button Below
                                </Card.Text>
                                <hr />
                                <Link to='/Inbox' style={{ textDecoration: 'none' }}>

                                    <Button className={classes.button} block>
                                        Chat with Admin
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <div style={{ border: '1px solid #AD365C', marginTop: '3rem', padding: 20 }}>
                            <h3 align="center">
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
                                style={{ width: '100%', marginTop: '3rem' }}
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
                                style={{ width: '100%', marginTop: '3rem' }}
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
                                style={{ width: '100%', marginTop: '3rem' }}
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
                                style={{ width: '100%', marginTop: '3rem' }}
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
                                style={{ width: '100%', marginTop: '3rem' }}
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
                                style={{ width: '100%', marginTop: '3rem' }}
                                onChange={e => this.setState({ guests: e.target.value })}

                            />


                            <br />
                            {/* <br />
                            <EventTypes opt={this.getEventTypes} />
                            <br />
                            <EventTimes opt={this.getEventTimes} /> */}
                            <br />
                            <Button className={classes.button} onClick={this.handleSubmitOrder} style={{ marginBottom: '12px', }} block>
                                Submit
                    </Button>
                        </div>
                    </Grid>
                </Grid>
                < Footer />
            </Container >
        )
    }
}

export default withStyles(styles)(PackageDetails);