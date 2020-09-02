import React , {Component} from 'react';
import {Container,Row,Card,Col} from 'react-bootstrap';
import {Typography, Grid} from '@material-ui/core';

// Components
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar'

// Assets 
import logo from '../../Assets/Images/us6.jpg';
import bliss from '../../Assets/Images/Bliss.jpg';
import axu from '../../Assets/Images/AXU.JPG';
import miraculous from '../../Assets/Images/Miraculous.jpg';
import eventezia from '../../Assets/Images/Eventezia.jpg';
import neow from '../../Assets/Images/NEOW.jpg';
import says from '../../Assets/Images/says.jpg';





class BrandSection extends Component {
    render(){
        return(
            <React.Fragment>
             
              <Container>
                 <div style={{backgroundImage:`url(${logo})`,
             width: '100%',
             height: '350px',
             backgroundSize:'100% 100%'}}>

              </div>
              </Container>
                <Container >
                    
                    <Row>
                        <Col xs={12} style={{marginTop:'80px',  fontSize:'20px', textAlign:'center', color:'black', fontFamily:'cursive'}}>
                            <p>
                            Youth event organization is here to give platform to the youth to start their event management business in this market. Youth event organizer start their event management course at Usman Institute of Technology. Their first batch is enrolled and get the knowledge that how any event work. In this course we provide them a platform for their practical consideration so that students can groom their skills and get success in future.  
                            </p>
                        
                        </Col>
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col xs={4} md={4}></Col>
                        <Col>
                            <Typography
                            style={{
                              fontSize: '30px',
                              color: 'black',
                              fontFamily:'TimesNewRoman',
                              opacity:'1.9',
                              textAlign: 'left',
                              marginTop: '30px',
                              fontWeight: 900,
                              lineHeight: '30px',
                              
                          }} variant="h5" component="h2">Our Brands</Typography>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'100px'}}>
                       <Col md={4}>
                       <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={bliss} />
  <Card.Body>
    <Card.Title style={{color:'#AD365C'}}>The Bliss </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
  </Card.Body>
</Card>
                       </Col>
                       <Col md={4}>
                       <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={says} />
  <Card.Body>
    <Card.Title style={{color:'#AD365C'}}>The Says  </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
  </Card.Body>
</Card>
                       </Col>
                       <Col md={4}>
                       <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={axu} />
  <Card.Body>
    <Card.Title style={{color:'#AD365C'}}>The AXU Eventors </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
  </Card.Body>
</Card>
                       </Col>

                    </Row>
                    <Row style={{marginTop:'30px'}}>
                    <Col md={4}>
                       <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={eventezia} />
  <Card.Body>
    <Card.Title style={{color:'#AD365C'}}>Eventezia </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
  </Card.Body>
</Card>
                       </Col>
                       <Col md={4}>
                       <Card style={{ width: '20rem' }}>
  <Card.Img variant="top"  src={neow} />
  <Card.Body>
    <Card.Title style={{color:'#AD365C'}}>The Neow </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
  </Card.Body>
</Card>
                       </Col>
                       <Col md={4}>
                       <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={miraculous} />
  <Card.Body>
    <Card.Title style={{color:'#AD365C'}}>The Miraculous </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
  </Card.Body>
</Card>
                       </Col>
                    </Row>
                    
                </Container>
                <Grid container style={{marginTop:'20px'}}>
                  <Footer/>
               </Grid>
                
              
            </React.Fragment>
        )
    }
}

export default BrandSection;