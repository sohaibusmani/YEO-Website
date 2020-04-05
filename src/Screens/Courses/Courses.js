import React , {Component} from 'react';
import {Container,Row,Col,Card,Button, Image} from 'react-bootstrap';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import styled from "@emotion/styled/macro";
import { withStyles } from '@material-ui/core/styles';

// Assets
import logo from '../../Assets/Images/us11.jpg';
import card1 from '../../Assets/Images/us3.jpg';
import card2 from '../../Assets/Images/us5.jpg';
import card3 from '../../Assets/Images/us7.jpg';


// Component
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

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



class Courses extends Component {
    render(){
      const {classes} = this.props;
        return(
            <React.Fragment>
              <Navbar/>
              <Container>
                 <div style={{backgroundImage:`url(${logo})`,
             width: '100%',
             height: '350px',
             backgroundSize:'100% 100%'}}>

              </div>
                 
              </Container>
                <Container>
                 <Row style={{marginTop:"5rem"}}>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={card1} />
  <Card.Body>
    <Card.Title>Become an Event Planner </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
    <Link to='/Courses/CourseDetail' style={{textDecoration:'none'}}>
    <Button  className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={card2} />
  <Card.Body>
    <Card.Title>Boost Your Business</Card.Title>
    <Card.Text>
    Accelerate your learning in sales & marketing and business development too.
    </Card.Text>
    <Link to='/Courses/BrandSection' style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem',  }}>
  <Card.Img variant="top" src={card3}/>
  <Card.Body>
    <Card.Title>Internships</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/Courses/Internship' style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Details</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                 </Row>
             </Container>
             
               <Grid container style={{marginTop:'20px'}}>
                  <Footer/>
               </Grid>
            
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Courses);