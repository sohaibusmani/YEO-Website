import React from 'react';
import './LandingPageComponent3.css';
import {Container} from 'react-bootstrap';

class LandingPageComponent3 extends React.Component {

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
                            Customization
                        </div>
                        <p 
                         style={{
                            justifyContent: "center",
                            alignItems: "center,",
                            display: "inline-flex",
                            width: "100%",
                            marginLeft:'250px',
                            marginTop:'50px',
                            color:'white',
                            fontSize:'20px'
                        }}>
                            We are not copying the boring old traditional catalogue system. Rather, to make something unique and eye-catching, we offer our client to tell us about their dream event, and our professionals follow their wishes/demands and execute to amaze them as per their taste. /(customize it as per their needs).
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

export default LandingPageComponent3;