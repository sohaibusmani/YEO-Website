import React from 'react';
import styled from "@emotion/styled/macro";
import { Container, Row, Col } from "react-bootstrap";



// Assets
import us20 from '../../Assets/Images/us20.jpg';

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
    });
    

class LandingPageComponent4 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Background>
                 <div style={{
                    backgroundImage: `url(${us20})`,
                    width: '100%',
                    height: '600px',
                    backgroundSize: '100% 100%',
                    opacity:0.2

                }}>


                </div>
                <DisplayOver>
                    <Container style={{color:'black'}}>
                     <Row>
                         <Col>
                           <h1>over</h1>
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