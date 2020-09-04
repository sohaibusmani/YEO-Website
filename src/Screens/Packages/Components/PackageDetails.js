import React, { Component } from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import {TextField , Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";
import {Link} from 'react-router-dom';


// Components

import Navbar from '../../../Components/Navbar/Navbar';
import { EventTypes, EventTimes } from './Dropdown';
import Footer from '../../../Components/Footer/Footer'

// Assets

import logo from '../../../Assets/Images/us19.jpg';
import image1 from '../../../Assets/Images/event.jpg';
import image2 from '../../../Assets/Images/eventsCover.jpg';

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
    button:{
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
        price:''
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

    componentDidMount(){
        this.getPackageById();
    }

    getPackageById = () => {
        const packageId = this.props.match.params.id ;

        axios({
            url: `${baseUrl}/package/get-package?id=${packageId}`,
            method: 'GET'
        })
        .then(response => {
            this.setState({
                price: response.data.price
            })
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    render() {
        const { classes } = this.props;
        const {price} = this.state;

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
            // {
            //     original: image3,
            //     thumbnail: image3,
            // },
        ]

        return (
            <React.Fragment >
                
                <div style={{marginBottom:'3rem'}}>
               
               <Container>
                    <div style={{
                        backgroundImage: `url(${logo})`,
                        width: '100%',
                        height: '300px',
                        backgroundSize: '100% 100%'
                    }}>

                    </div>
                    </Container>

                
                <Container style={{ marginTop: '50px' }} fluid>
                    <Row>
                        <Col md={8}>
                            <Row>
                            <div>
                                <ImageGallery style={{ height: 50 }} thumbnailPosition='bottom' autoPlay={true} items={images} />
                            </div>
                            </Row>
                            <Row>
                                <Col style={{marginTop:'3rem'}} lg={4} md={4} xs={12}></Col>
                                <Col style={{marginTop:'3rem'}} lg={4} md={4} xs={12}><h2><strong>About the Deal</strong></h2></Col>
                                <Col style={{marginTop:'3rem'}} lg={4} md={4} xs={12}></Col>
                            </Row>
                            <Row>
                                
                                   
                                    <Col style={{marginTop:'3rem'}} lg={3} md={3} xs={12}>
                                      <h4>Deal Includes:</h4>
                                      <ul>
                                          <li><Typography>Table décor </Typography></li>
                                          <li><Typography>Chocolate fountain with Goodies</Typography></li>
                                          <li><Typography>Juice corner</Typography></li>
                                          <li><Typography>Balloon décor</Typography></li>
                                         
                                          <li><Typography>30 floral tiaras</Typography></li>
                                          <li><Typography>3 bridal shower games</Typography></li>
                                      </ul>
                                    </Col>
                                    <Col style={{marginTop:'3rem'}} lg={3} md={3} xs={12}>
                                      <h4>Catering:</h4>
                                      <ul>
                                          <li><Typography>Biryani</Typography></li>
                                          <li><Typography>Karahi</Typography></li>
                                          <li><Typography>Handi</Typography></li>
                                          <li><Typography>Fish</Typography></li>
                                          <li><Typography>wong Tong</Typography></li>
                                          <li><Typography>Stake</Typography></li>
                                          <li><Typography>Labnani Kabab</Typography></li>
                                      </ul>
                                    </Col>
                                    <Col style={{marginTop:'3rem'}} lg={3} md={3} xs={12}>
                                      <h4>Photography:</h4>
                                      <ul>
                                          <li><Typography>Biryani</Typography></li>
                                          <li><Typography>Karahi</Typography></li>
                                          <li><Typography>Handi</Typography></li>
                                          <li><Typography>Fish</Typography></li>
                                          <li><Typography>wong Tong</Typography></li>
                                          <li><Typography>Stake</Typography></li>
                                          <li><Typography>Labnani Kabab</Typography></li>
                                      </ul>
                                    </Col>
                                    <Col style={{marginTop:'3rem'}} lg={3} md={3} xs={12}>
                                      <h4>Themes:</h4>
                                      <ul>
                                          <li><Typography>Cinderella</Typography></li>
                                          <li><Typography>Fashionista</Typography></li>
                                          <li><Typography>Bollywood</Typography></li>
                                          <li><Typography>Chanel</Typography></li>
                                          <li><Typography>Vogue</Typography></li>
                                          <li><Typography>Black n gold</Typography></li>
                                          <li><Typography>Tiffany & Co.</Typography></li>
                                      </ul>
                                    </Col>
                               
                            </Row>
                        </Col>
                        <Col md={1}></Col>
                        <Col style={{marginLeft:'-2rem'}} md={3}>
                            <Row>
                                <Card style={{ minWidth: 325 , borderColor:'#AD365C' }}>
                                    <Card.Body>
                                        <Card.Header style={{backgroundColor:'white', color:'#AD365C'}}>
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
                                      <hr/>
                                      <Link to='/Inbox' style={{textDecoration:'none'}}>
                                      
                                       <Button className={classes.button} block>
                                            Chat with Admin
                                           </Button>
                                           </Link>
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


                                     <br/>
                                     <br/>
                                    <EventTypes opt={this.getEventTypes} />
                                    <br/>
                                    <EventTimes opt={this.getEventTimes} />
                                    <br/>
                                    <Link to='/EventSummary' style={{textDecoration:'none'}}>
                                    <Button className={classes.button} style={{marginBottom:'12px',}} block>
                                        Submit
                                  </Button>
                                  </Link>
    
                                </Col>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                </div>
   <Footer/>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(PackageDetails);