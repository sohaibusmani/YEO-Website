import React from 'react';
import  {Card, Container , Row , Col } from 'react-bootstrap';
import {Typography} from '@material-ui/core';

// Components
import Navbar from '../../../Components/Navbar/Navbar'

// Assets
import logo from '../../../Assets/Images/eventsCover.jpg'

class AdPackages extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <Navbar/>
                 <div>
                     <Card style={{ width: '50rem' }}>
                         <Card.Title>
                             Mehendi Packages
                         </Card.Title>
                         <Container>
                           <Row>
                               <Col lg={8} md={8} sm={12}>
                                  <Card.Img variant='top' src={logo}/>
                               </Col>
                               <Col lg={4} md={4} >
                                   <h4>Deal includes:</h4>
                                   <ul>
                                          <li><Typography>Table décor </Typography></li>
                                          <li><Typography>Chocolate fountain with Goodies</Typography></li>
                                          <li><Typography>Juice corner</Typography></li>
                                          <li><Typography>Balloon décor</Typography></li>
                                         
                                          <li><Typography>30 floral tiaras</Typography></li>
                                          <li><Typography>3 bridal shower games</Typography></li>
                                      </ul>
                               </Col>
                           </Row>
                         </Container>
                     </Card>
                 </div>
            </React.Fragment>
        )
    }
}

export default AdPackages ;