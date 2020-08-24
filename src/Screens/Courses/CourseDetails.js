import React , {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { withStyles } from "@material-ui/core/styles";

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


// Assets
import picture from '../../Assets/Images/us10.jpg'



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
        return(
            <React.Fragment>
                <Navbar/>
                <Container>
                <div style={{backgroundImage:`url(${picture})`,
             width: '100%',
             height: '350px',
             backgroundSize:'100% 100%'}}>

              </div>
              </Container>
              <Container>
                  <Row style={{marginTop:'50px' ,  fontFamily:'TimesNewRoman'}}>
                      <Col md={4} lg={4}>
                         
                      </Col>
                      <Col md={6} lg={6}>
                        <h2>Become an Event Planner </h2>
                      </Col>
                  </Row>
                 
                  <Row>
                      <Col md={12} style={{marginTop:'50px',marginBottom:'50px', fontSize:'20px', textAlign:'center', color:'black', fontFamily:'TimesNewRoman'}}>
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