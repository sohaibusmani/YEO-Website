import React from 'react';
import './LandingPageComponent2.css';
import {Container, Col,Row} from 'react-bootstrap';







//Casecading Style Sheets
// import './App.css';

class LandingPageComponent2 extends React.Component {

    render() {
        
        return (

            <React.Fragment>
                <br/>
                <br/>
                <div id="header">
        <div class="overlay">
            <div class="container">
                <div class="row scroll-me">
                    <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 text-center ">
                       
                   
                    <Container maxWidth='lg'
                    style={{ color: "black", marginTop: 80 }}>
                        <div
                        style={{
                            justifyContent: "center",
                            alignItems: "center,",
                            display: "inline-flex",
                            width: "100%",
                            marginLeft:'250px',
                            color:'white',
                            fontSize:'70px'
                        }}>
                            Operations
                        </div>
                        <p 
                         style={{
                            textAlign:'center',
                            
                            marginLeft:'250px',
                            width: "100%",
                            
                            marginTop:'50px',
                            color:'white',
                            fontSize:'20px'
                        }}>
                            Our various art works/operations like FLORISTS (the art of flowers), CRAFTERS (The art of crafting clever ideas), DECORATION (the art of assembling scattered things in an unbelievable way), SOUND SYSTEM (The art of taking yourself in an acceptable place), all these Beautiful things that make your event outlast, are done by our Passionate, Talented and Highly Motivated Youngsters who are willing to explore new experience and make your event awesome/ a dream come true.
                        </p>
                       
                    </Container>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
            </React.Fragment>
        )
    }
}

export default LandingPageComponent2;