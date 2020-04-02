import React , {Component} from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap'

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

class Chat extends Component {
    render(){
        return(
            <React.Fragment>
               <Navbar/>
               <div style={{marginTop:'10rem'}}>
                   <Container fluid>
                       <Row>
                           <Col md={4} lg={4}>
                           </Col>
                           <Col md={4} lg={4}>
                               <h2>Chat Work is in Progress</h2>
                           </Col>
                       </Row>
                       <Row>
                           <Col md={6} lg={6}>
                           
                           </Col>
                           <Col style={{marginLeft:'-50px'}} md={6} lg={6}>
                            <Spinner animation='grow' />
                           </Col>
                       </Row>
                   </Container>
               </div>
               {/* <Footer/> */}
            </React.Fragment>
        )
    }
}

export default Chat;