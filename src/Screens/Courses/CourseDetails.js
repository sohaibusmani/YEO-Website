import React , {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import styled from "@emotion/styled/macro";
import { withStyles } from "@material-ui/core/styles";

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


// Assets
import picture from '../../Assets/Images/testimonial.jpg'

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

const styles = theme => ({
    firstHeading: {
        fontSize: 23,
        [theme.breakpoints.up("md")]: {
            fontSize: 50,
        }
    },
    MarginGrid: {
        marginTop: "0%",
        [theme.breakpoints.up("md")]: {
            marginTop: "15%"
        },
    },
    hideMoreInfo: {
        display: 'none',
        [theme.breakpoints.up("md")]: {
            display: 'flex'
        },
    }
});

class CourseDetail extends Component {
    render(){
        const {classes}=this.props;
        return(
            <React.Fragment>
                <Navbar/>
              <Container>
                  <Row>
                      <Col md={2}>
                        
                      </Col>
                      <Col md={4}>
                          <Row>
                              <Col md={12}>
                          <Background>
                          <Image src={picture} responsive />
                          <DisplayOver style={{marginTop:'100px',
                           color:'white', 
                           fontSize:'50px', 
                           textAlign:'center',
                            marginLeft:'150px',
                            opacity:'1.5'}}>
                          <p>Become an Event Planner</p>
                          </DisplayOver>
                          </Background>
                          </Col>
                          </Row>
                      </Col>
                      <Col md={4}>
                      </Col>
                  </Row>
                  <Row>
                      <Col md={12} style={{marginTop:'80px', fontSize:'20px', textAlign:'center', color:'#AD365C', fontFamily:'cursive'}}>
                          <p>
                          The complete How to Be an Event Planner course is delivered to you inside our member's portal. This system is designed to help keep you organized, focused and learning. You can pause, rewind and watch the trainings as much and as often as you like. 

Once you invest, you'll have access to the entire course which includes everything you'll need from your budget templates, to marketing ideas, to your site inspection checklists, and so much more. 
                          </p>
                      </Col>
                  </Row>
              </Container>
              <Footer/>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(CourseDetail);