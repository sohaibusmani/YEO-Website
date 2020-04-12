import React from 'react';
import  {Card, Container , Row , Col , Button} from 'react-bootstrap';
import {Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

// Components
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

// Assets
import logo from '../../../Assets/Images/mehendi.webp'
import logo1 from '../../../Assets/Images/birthday.jpg'
import Photography from '../../../Assets/Images/Photography.jpg' 
import pcover from '../../../Assets/Images/us15.jpg'
import qawwali from '../../../Assets/Images/qawwali.jpg'

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
//         marginBottom: '10px',
//     },
//     notchedOutline: {
//         borderColor: '#AD365C',
//     },
//     focused: {
//         "& $notchedOutline": {
//             borderColor: '#AD365C !important',
//         }
//     },
// };

class AdPackages extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                 <Navbar/>
                 <Container>
                    <div style={{
                        backgroundImage: `url(${pcover})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',
                        
                    }}>
                        

                    </div>
                    </Container>
                   
                 <div style={{marginTop:'50px', marginBottom:'50px'}}>
                     <Container fluid>
                         <Row>
                             <Col md={6} lg={6} sm={12}>
                     <Card style={{ width: '40rem', borderColor:'#AD365C'}}>
                         <Card.Header style={{backgroundColor:'#AD365C', color:'white'}}>
                         <Card.Title>
                             Photography Package
                         </Card.Title>
                         </Card.Header>
                         <Card.Body>
                         <Container>
                           <Row>
                               <Col lg={8} md={8} sm={12}>
                                  <Card.Img variant='top' src={Photography}/>
                               </Col>
                               <Col lg={4} md={4} >
                                   <h4>Deal includes:</h4>
                                   <ul>
                                          <li><Typography>Food</Typography></li>
                                          <li><Typography>Decor</Typography></li>
                                          <li><Typography>Photography</Typography></li>
                                          <li><Typography>DJ</Typography></li>
                                         
                                          <li><Typography>Starter</Typography></li>
                                          <li><Typography>Games</Typography></li>
                                      </ul>
                               </Col>
                           </Row>
                           <hr/>
                           <Row>
                               <Col lg={3} md={3}>
                               </Col>
                               <Col >
                               <Link to='/Packages/PackageDetails' style={{textDecoration:'none'}}>
                                 <Button className={classes.button} block>View Details</Button>
                                 </Link>
                               </Col>
                               <Col></Col>
                           </Row>
                         </Container>
                         </Card.Body>
                     </Card>
                     </Col>
                     
                     <Col md={6} lg={6} sm={12}>
                     <Card style={{ width: '40rem', borderColor:'#AD365C'}}>
                         <Card.Header style={{backgroundColor:'#AD365C', color:'white'}}>
                         <Card.Title>
                             Birthday Supreme Package
                         </Card.Title>
                         </Card.Header>
                         <Card.Body>
                         <Container >
                           <Row>
                               <Col lg={8} md={8} sm={12}>
                                  <Card.Img variant='top' src={logo1}/>
                               </Col>
                               <Col lg={4} md={4} >
                                   <h4>Deal includes:</h4>
                                   <ul>
                                          <li><Typography>Food</Typography></li>
                                          <li><Typography>Decor</Typography></li>
                                          <li><Typography>Photography</Typography></li>
                                          <li><Typography>DJ</Typography></li>
                                         
                                          <li><Typography>Starter</Typography></li>
                                          <li><Typography>Games</Typography></li>
                                      </ul>
                               </Col>
                           </Row>
                           <hr/>
                           <Row>
                               <Col lg={3} md={3}>
                               </Col>
                               <Col >
                               <Link to='/Packages/PackageDetails' style={{textDecoration:'none'}}>
                                 <Button className={classes.button} block>View Details</Button>
                                 </Link>
                               </Col>
                               <Col></Col>
                           </Row>
                         </Container>
                         </Card.Body>
                     </Card>
                     </Col>
                     </Row>
                     <Row style={{marginTop:'50px'}}>
                         <Col  md={6} lg={6}>
                         <Card style={{ width: '40rem', borderColor:'#AD365C'}}>
                         <Card.Header style={{backgroundColor:'#AD365C', color:'white'}}>
                         <Card.Title>
                             Mehendi Supreme Package
                         </Card.Title>
                         </Card.Header>
                         <Card.Body>
                         <Container >
                           <Row>
                               <Col lg={8} md={8} sm={12}>
                                  <Card.Img variant='top' src={logo}/>
                               </Col>
                               <Col lg={4} md={4} >
                                   <h4>Deal includes:</h4>
                                   <ul>
                                          <li><Typography>Food</Typography></li>
                                          <li><Typography>Decor</Typography></li>
                                          <li><Typography>Photography</Typography></li>
                                          <li><Typography>DJ</Typography></li>
                                         
                                          <li><Typography>Starter</Typography></li>
                                          <li><Typography>Games</Typography></li>
                                      </ul>
                               </Col>
                           </Row>
                           <hr/>
                           <Row>
                               <Col lg={3} md={3}>
                               </Col>
                               <Col >
                               <Link to='/Packages/PackageDetails' style={{textDecoration:'none'}}>
                                 <Button className={classes.button} block>View Details</Button>
                                 </Link>
                               </Col>
                               <Col></Col>
                           </Row>
                         </Container>
                         </Card.Body>
                     </Card>
                         </Col>
                         <Col md={6} lg={6}>
                         <Card style={{ width: '40rem', borderColor:'#AD365C'}}>
                         <Card.Header style={{backgroundColor:'#AD365C', color:'white'}}>
                         <Card.Title>
                             Qawwali Supreme Package
                         </Card.Title>
                         </Card.Header>
                         <Card.Body>
                         <Container >
                           <Row>
                               <Col lg={8} md={8} sm={12}>
                                  <Card.Img variant='top' src={qawwali}/>
                               </Col>
                               <Col lg={4} md={4} >
                                   <h4>Deal includes:</h4>
                                   <ul>
                                          <li><Typography>Food</Typography></li>
                                          <li><Typography>Decor</Typography></li>
                                          <li><Typography>Photography</Typography></li>
                                          <li><Typography>DJ</Typography></li>
                                         
                                          <li><Typography>Starter</Typography></li>
                                          <li><Typography>Games</Typography></li>
                                      </ul>
                               </Col>
                           </Row>
                           <hr/>
                           <Row>
                               <Col lg={3} md={3}>
                               </Col>
                               <Col >
                               <Link to='/Packages/PackageDetails' style={{textDecoration:'none'}}>
                                 <Button className={classes.button} block>View Details</Button>
                                 </Link>
                               </Col>
                               <Col></Col>
                           </Row>
                         </Container>
                         </Card.Body>
                     </Card>
                           </Col>

                     </Row>
                     </Container>
                 </div>
                 <div style={{marginTop:'50px', marginBottom:'50px', textAlign:'center'}}>
                        <Container fluid>
                            <Row>
                                <Col>
                        <Link to='/BreakupPackages'>
                         <Button className={classes.button}>
                             Make Your Own Package
                         </Button>
                        </Link>
                        </Col>
                        </Row>
                        </Container>
                    </div>
                 <Footer/>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AdPackages);