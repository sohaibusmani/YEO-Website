import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

// Assets
import us14 from '../../Assets/Images/us14.jpg';
import us17 from '../../Assets/Images/us17.jpg';

const styles = {
    button: {
        backgroundColor: 'white',
        color: '#AD365C',
        borderColor: '#AD365C !important',
        '&:hover': {
            backgroundColor: '#AD365C',
            borderColor: '#AD365C',
            
          },
    }
  }

class Events extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Container>
                    <div style={{
                        backgroundImage: `url(${us14})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',

                    }}>


                    </div>
                </Container>
                <Container >
                    <Row>
                        <Col md={3} lg={3}>
                        </Col>
                        <Col md={6} lg={6} md={12} style={{ fontFamily: 'TimesNewRoman', marginTop: '50px', textAlign: 'center' }}>
                            <h1>Welcome to YEO Events</h1>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Container style={{ marginTop: '100px', marginBottom: '50px' }} fluid>
                            <Row>
                                <Col md={6} lg={6}>
                                    <img style={{
                                        width: '100%',
                                        height: '600px',
                                    }} src={us17} />
                                </Col>
                                <Col style={{ fontFamily: 'TimesNewRoman' }} md={6} lg={6}>
                                    <h2 style={{ textAlign: 'center' }}>Here at Youth Event Organizer</h2>
                                    <br />
                                    <br />
                                    <p style={{ fontSize: '20px' }}>We specialize in Planning Weddings, Parties, Corporate Events, Social gatherings etc. Our first priority is to understand our client’s needs and provide them the best possible arrangements, while staying within their budget. We coordinate your events according to your wishes and have a complete set up of event management, farm house booking, decorations and catering. We always follow latest trends and ensure that your event is as flawless as it is memorable. With every event, we come up with breakthrough ideas by adding creative touches to make it unique. Our services are tailored to specific needs. We do as much or as little as you desire.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Col style={{fontFamily:'TimesNewRoman', textAlign:'center'}}>
                          <h1>Our Portfolio</h1>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"5rem"}}>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={us14} />
  <Card.Body>
    <Card.Title>Become an Event Planner </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
    <Link  style={{textDecoration:'none'}}>
    <Button  className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={us14} />
  <Card.Body>
    <Card.Title>Boost Your Business</Card.Title>
    <Card.Text>
    Accelerate your learning in sales & marketing and business development too.
    </Card.Text>
    <Link  style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem',  }}>
  <Card.Img variant="top" src={us14}/>
  <Card.Body>
    <Card.Title>Internships</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link  style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                 </Row>
                 <Row style={{marginTop:"5rem"}}>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={us14} />
  <Card.Body>
    <Card.Title>Become an Event Planner </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
    <Link  style={{textDecoration:'none'}}>
    <Button  className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={us14} />
  <Card.Body>
    <Card.Title>Boost Your Business</Card.Title>
    <Card.Text>
    Accelerate your learning in sales & marketing and business development too.
    </Card.Text>
    <Link  style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem',  }}>
  <Card.Img variant="top" src={us14}/>
  <Card.Body>
    <Card.Title>Internships</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link  style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                 </Row>
                 
                </Container>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Events);