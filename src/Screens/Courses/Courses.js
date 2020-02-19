import React , {Component} from 'react';
import {Container,Row,Col,Card,Button, Image} from 'react-bootstrap';

// Assets
import logo from '../../Assets/Images/testimonial.jpg';


class Courses extends Component {
    render(){
        return(
            <React.Fragment>
                <Container>
                <Row>
                    <Col md={12} sm={6} xs={12} >
                        <Image src={logo} fluid/>
                    </Col>
                 </Row>
                </Container>
             <Container>
                
                 <Row style={{marginTop:"5rem"}}>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                     </Col>
                     <Col xs={12} md={4}>
                     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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