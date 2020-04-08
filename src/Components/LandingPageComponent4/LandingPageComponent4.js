import React from 'react';
import styled from "@emotion/styled/macro";
import {Container, Col, Row, Card } from "react-bootstrap";
import { GoPerson } from 'react-icons/go';



// Assets
import us20 from '../../Assets/Images/us16.jpg';

const DisplayOver = styled.div({
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor: "transparent",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
    });
    
    const Background = styled.div({
        position: "relative",
        width: "100%",
        height: "100%",
        maxWidth: '100%',
        maxHeight: '100%',
        color: 'white',
        marginBottom:'100px'
    });
    

class LandingPageComponent4 extends React.Component{
    render(){
        return(
            <React.Fragment >
               <Background>
               <div style={{
                        backgroundImage: `url(${us20})`,
                        width: '100%',
                        height: '700px',
                        backgroundSize: '100% 100%',
                        marginTop:'20px',
                        opacity:'0.5'
                    }}>
                        </div>
                        <DisplayOver>
                            <Container style={{marginTop:'50px', color:'black', fontFamily:'TimesNewRoman'}} fluid>
                                <Row>
                                    <Col md={4} lg={4}>
                                      
                                    </Col>
                                    <Col>
                                     <h1>What our happy clients say</h1>
                                    </Col>
                                </Row>
                            </Container>
                          <Container style={{marginTop:'100px'}} >
                              <Row>
                                  <Col md={4} lg={4}>
                                     
                                     <Card style={{ width: '18rem' }}>
                                         
                             <Card.Header style={{backgroundColor:'#AD365C' , textDecoration:'none' , border:'none'}}>
                             <Row>
                                             <Col md={4} lg={4}>
                             <GoPerson style={{ fontSize: '5em', alignItems:'center', justifyContent:'center' }}/>
                             </Col>
                             <Col md={8} lg={8}>
                                <h4>Syed Azib Ali</h4>
                             </Col>
                             </Row>
                             </Card.Header>
                            
  <Card.Body>
    
    <Card.Text style={{color:'black'}}>
      'Some quick example text to build on the card title and make up the bulk of
      the card's content.'
    </Card.Text>
    
  </Card.Body>
</Card>
                                  </Col>
                                  <Col md={4} lg={4}>
                                     
                                     <Card style={{ width: '18rem' }}>
                                         
                             <Card.Header style={{backgroundColor:'#AD365C' , textDecoration:'none' , border:'none'}}>
                             <Row>
                                             <Col md={4} lg={4}>
                             <GoPerson style={{ fontSize: '5em', alignItems:'center', justifyContent:'center' }}/>
                             </Col>
                             <Col md={8} lg={8}>
                                <h4>Syed Azib Ali</h4>
                             </Col>
                             </Row>
                             </Card.Header>
                            
  <Card.Body>
    
    <Card.Text style={{color:'black'}}>
      'Some quick example text to build on the card title and make up the bulk of
      the card's content.'
    </Card.Text>
    
  </Card.Body>
</Card>
                                  </Col>
                                  <Col md={4} lg={4}>
                                     
                                     <Card style={{ width: '18rem' }}>
                                         
                             <Card.Header style={{backgroundColor:'#AD365C' , textDecoration:'none' , border:'none'}}>
                             <Row>
                                             <Col md={4} lg={4}>
                             <GoPerson style={{ fontSize: '5em', alignItems:'center', justifyContent:'center' }}/>
                             </Col>
                             <Col md={8} lg={8}>
                                <h4>Syed Azib Ali</h4>
                             </Col>
                             </Row>
                             </Card.Header>
                            
  <Card.Body>
    
    <Card.Text style={{color:'black'}}>
      'Some quick example text to build on the card title and make up the bulk of
      the card's content.'
    </Card.Text>
    
  </Card.Body>
</Card>
                                  </Col>
                              </Row>
                          </Container>
                        </DisplayOver>
               </Background>
                   
            </React.Fragment>
        )
    }
}

export default LandingPageComponent4;