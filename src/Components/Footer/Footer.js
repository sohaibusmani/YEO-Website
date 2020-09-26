import React from 'react';
import {Grid , Container} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faInstagram, faGithub, faGooglePlus, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

//Casecading Style Sheets
import './Footer.css';

//Components
// import Contact from '../../Components/Contact Form/ContactForm';

//Assets
import logo from '../../Assets/Images/logo.jpg';
import oric from '../../Assets/Images/ORIC.png'


class Footer extends React.Component {

    render() {

        return (

            <React.Fragment>
                
                    <Container maxWidth='lg'>
                        <Grid container>
                            <Grid item xs={6} lg={4} >
                                <div className="footer-sec-1" style={{ marginTop: '20px' }}>
                                    <img alt='pic' src={logo} width="200" height="auto" />

                                </div>
                            </Grid>
                            <Grid item xs={6} lg={4} >
                                <div style={{marginTop:'20px' , fontFamily:'TimesNewRoman'}}>
                                <h2>Our Official Partner</h2>
                                <img alt='pic' src={oric} style={{marginTop:'20px', }} width='300' height='auto' />
                                </div>
                            </Grid>
                            <Grid item xs={6} lg={4}>
                            <div style={{marginTop:'20px', marginLeft:'20px' , fontFamily:'TimesNewRoman'}}>
                                                <h2>Follow Us</h2>
                                                {/* <hr />
                                                    <hr /> */}
                                                <p>Follow us to get notified with/about our latest news and </p>
                                                <ul className="unordered-list">
                                                    <a href='https://www.facebook.com/Youth.event.organizer/' target='blank' style={{textDecoration:'none', color:'black'}}>
                                                    <li className="lik-unstyle social">
                                                        <FontAwesomeIcon size="2x"  icon={faFacebookSquare} className="icon fb-icon" />
                                                    </li>
                                                    </a>
                                                    <a href='https://www.instagram.com/youtheventorganizer/' target='blank' style={{color:'black'}}>
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
                            </Grid>
                        </Grid>
                        <Grid container>
                                <Grid item>
                                <div className="footer-bottom" style={{marginTop:'40px', fontFamily:'TimesNewRoman'}}>
                    <p>Copyright © 2020 All rights reserved | Youth Event Organizers</p>
                </div>
                                </Grid>
                            </Grid>
                    </Container>
                

            </React.Fragment>
        )
    }
}

export default Footer;