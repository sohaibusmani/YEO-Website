import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faInstagram , faGithub, faGooglePlus, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

//Casecading Style Sheets
import './Footer.css';

//Components
// import Contact from '../../Components/Contact Form/ContactForm';

//Assets
import logo from '../../Assets/Images/logo.jpg'


class Footer extends React.Component {

    render() {

        return (

            <React.Fragment>
                <div id="footer">
                    <div>
                        <Container fluid>
                            <Row>
                                <Col md={12}>
                                   
                                    <Row>
                                        <Col sm={4}>
                                            <div className="footer-sec-1" style={{marginTop:'20px'}}>
                                                <img src={logo} width="150" height="auto" />
                                               
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <br/>
                                            <br/>
                                        <p>Youth Event Organizers is found to counter the gap between Information Technologies and today's business requirements.</p>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="footer-sec-2" style={{marginTop:'20px'}}>
                                                <h2>Follow Us</h2>
                                                {/* <hr />
                                                    <hr /> */}
                                                <p>follow us to get notified with/about our latest news and </p>
                                                <ul className="unordered-list">
                                                    <a href='https://www.facebook.com/Youth.event.organizer/' style={{textDecoration:'none', color:'black'}}>
                                                    <li className="lik-unstyle social">
                                                        <FontAwesomeIcon size="2x"  icon={faFacebookSquare} className="icon fb-icon" />
                                                    </li>
                                                    </a>
                                                    <a href='https://www.instagram.com/youtheventorganizer/' style={{color:'black'}}>
                                                    <li className="lik-unstyle social">
                                                        <FontAwesomeIcon size="2x" icon={faInstagram} className="icon linkedin-icon" />
                                                    </li>
                                                    </a>
                                                    <li className="lik-unstyle social">
                                                        <FontAwesomeIcon size="2x" icon={faGithub} className="icon github-icon" />
                                                    </li>
                                                    <li className="lik-unstyle social">
                                                        <FontAwesomeIcon size="2x" icon={faGooglePlus} className="icon google-icon" />
                                                    </li>
                                                    <li className="lik-unstyle social">
                                                        <FontAwesomeIcon size="2x" icon={faWhatsapp} className="icon whatsapp-icon" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                               
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="footer-bottom" style={{marginTop:'40px'}}>
                    <p>Copyright © 2020 All rights reserved | Youth Event Organizers</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;