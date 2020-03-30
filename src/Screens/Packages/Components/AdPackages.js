import React from 'react';
import  {Card, Container , Row , Col , Button} from 'react-bootstrap';
import {Typography} from '@material-ui/core';

// Components
import Navbar from '../../../Components/Navbar/Navbar'

// Assets
import logo from '../../../Assets/Images/event1.jpg'

class AdPackages extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <Navbar/>
                 <div>
                     <Card style={{ width: '40rem' , boxShadow:'2px 2px 2px 2px #AD365C'}}>
                         <Card.Header style={{backgroundColor:'white', color:'#AD365C'}}>
                         <Card.Title>
                             Mehendi Packages
                         </Card.Title>
                         </Card.Header>
                         <Card.Body>
                         <Container>
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
                                 <Button style={{backgroundColor:'white', color:'#AD365C', borderColor:'#AD365C'}} block>View Details</Button>
                               </Col>
                               <Col></Col>
                           </Row>
                         </Container>
                         </Card.Body>
                     </Card>
                 </div>
            </React.Fragment>
        )
    }
}

export default AdPackages ;