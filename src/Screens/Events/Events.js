import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

// Components
import Navbar from '../../Components/Navbar/Navbar';

// Assets
import us14 from '../../Assets/Images/us14.jpg';
import us17 from '../../Assets/Images/us17.jpg'

class Events extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Container>
                    <div style={{
                        backgroundImage: `url(${us14})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',
                        
                    }}>
                        

                    </div>
                    </Container>
                    <Container >
                    <Row>
                        <Col md={3} lg={3}>
                        </Col>
                        <Col md={6} lg={6} md={12} style={{fontFamily:'TimesNewRoman', marginTop: '50px', textAlign: 'center' }}>
                            <h1>Welcome to YEO Events</h1>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Container style={{marginTop:'100px', marginBottom:'50px'}} fluid>
                            <Row>
                                <Col md={6} lg={6}>
                                 <img style={{width: '100%',
                    height: '600px',}} src={us17} />
                                </Col>
                                <Col style={{fontFamily:'TimesNewRoman'}} md={6} lg={6}>
                                 <h2 style={{textAlign:'center'}}>Here at Youth Event Organizer</h2>
                                 <br/>
                                 <br/>
                                 <p style={{fontSize:'20px'}}>We specialize in Planning Weddings, Parties, Corporate Events, Social gatherings etc. Our first priority is to understand our client’s needs and provide them the best possible arrangements, while staying within their budget. We coordinate your events according to your wishes and have a complete set up of event management, farm house booking, decorations and catering. We always follow latest trends and ensure that your event is as flawless as it is memorable. With every event, we come up with breakthrough ideas by adding creative touches to make it unique. Our services are tailored to specific needs. We do as much or as little as you desire.</p>
                                 </Col></Row></Container></Row>
                    </Container>
            </React.Fragment>
        )
    }
}

export default Events;