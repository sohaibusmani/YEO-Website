import React , {Component} from 'react';
import {Card,Col,Row, Container} from 'react-bootstrap';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";

// Components

import Navbar from '../../../Components/Navbar/Navbar';

// Assets

import logo from '../../../Assets/Images/event1.jpg';
import image1 from '../../../Assets/Images/event.jpg';
import image2 from '../../../Assets/Images/eventsCover.jpg';
import image3 from '../../../Assets/Images/testimonial.jpg';

class PackageDetails extends Component {
    render(){

        const images = [
            {
                original: logo,
                thumbnail: logo,
            },
            {
                original: image1,
                thumbnail: image1,
            },
            {
                original: image2,
                thumbnail: image2,
            },
            {
                original: image3,
                thumbnail: image3,
            },
        ]

        return(
            <React.Fragment>
                <Navbar/>
                <div>
                <div style={{backgroundImage:`url(${logo})`,
             width: '100%',
             height: '400px',
             backgroundSize:'100% 100%'}}>

              </div>
             
                </div>
                <Container style={{marginTop:'50px'}} fluid>
                    <Row>
                        <Col md={8}>
                            <div>
                          <ImageGallery style={{ height: 50 }} thumbnailPosition='bottom' autoPlay={true} items={images}/>
                          </div>
                        </Col>
                        <Col md={4}>
                          <Row>
                              
                          </Row>
                        </Col>
                    </Row>
                </Container>
                
            </React.Fragment>
        )
    }
}

export default PackageDetails;