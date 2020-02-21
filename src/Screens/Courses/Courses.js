import React , {Component} from 'react';
import {Container,Row,Col,Card,Button, Image} from 'react-bootstrap';
import {Box} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Assets
import logo from '../../Assets/Images/testimonial.jpg';


class Courses extends Component {
    render(){
        return(
            <React.Fragment>
                 <div style={{ width: '100%' }}>
          <Box display="flex" p={20} style={{backgroundColor:'#A20737'}}><span style={{color:'white', fontSize:'60px',marginTop:'-10px', marginLeft:'170px'}}>Event Planning Courses</span></Box>
          
        </div>
                <Container>
                 <Row style={{marginTop:"5rem"}}>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Become an Event Planner </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
    <Link to='/Courses/CourseDetail'>
    <Button  style={{backgroundColor:"#A20737", borderColor:'#A20737'}}>Go somewhere</Button>
    </Link>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Boost Your Business</Card.Title>
    <Card.Text>
    Accelerate your learning in sales & marketing and business development too.
    </Card.Text>
    <Button style={{backgroundColor:"#A20737", borderColor:'#A20737'}}>Go somewhere</Button>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '20rem',  }}>
  <Card.Img variant="top" src={logo}/>
  <Card.Body>
    <Card.Title>Practical Classes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button style={{backgroundColor:"#A20737", borderColor:'#A20737'}}>Go somewhere</Button>
  </Card.Body>
</Card>
                     </Col>
                 </Row>
             </Container>
             
               
            
            </React.Fragment>
        )
    }
}

export default Courses;