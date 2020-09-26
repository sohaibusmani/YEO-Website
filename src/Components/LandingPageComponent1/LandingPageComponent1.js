// import React, { Component } from "react";
// import styled from "@emotion/styled/macro";
// import { withStyles } from "@material-ui/core/styles";
// import {
//     Container,
//     Grid,
//     Paper,
//     Typography,
//     Button,
//     Divider
// } from "@material-ui/core";
// import { Link } from "react-router-dom";

// // Assets

// import VideoFile from '../../Assets/Videos/landingpage3.mp4';


// const Hover = styled.div({
//     opacity: 0,
//     transition: "opacity 350ms ease",
// });

// const DisplayOver = styled.div({
//     height: "100%",
//     left: "0",
//     position: "absolute",
//     top: "0",
//     width: "100%",
//     zIndex: 2,
//     transition: "background-color 350ms ease",
//     backgroundColor: "transparent",
//     padding: "20px 20px 0 20px",
//     boxSizing: "border-box",
// });

// const Background = styled.div({
//     position: "relative",
//     width: "100%",
//     height: "100%",
//     maxWidth: '100%',
//     maxHeight: '100%',
//     color: 'white',
// });

// const styles = theme => ({
//     firstHeading: {
//         fontSize: 23,
//         [theme.breakpoints.up("md")]: {
//             fontSize: 50,
//         }
//     },
//     MarginGrid: {
//         marginTop: "0%",
//         [theme.breakpoints.up("md")]: {
//             marginTop: "15%"
//         },
//     },
//     hideMoreInfo: {
//         display: 'none',
//         [theme.breakpoints.up("md")]: {
//             display: 'flex'
//         },
//     }
// });

// class LandingPage1 extends React.Component{
//     state = {
//         height: 0
//     }

//     componentDidMount() {
//         const height = this.divElement.clientHeight;
//         this.setState({ height });
//         this.props.getBlock1Height(height);
//     }
//     render(){
//         const { classes } = this.props;
//         return(
//             <div ref={(divElement) => { this.divElement = divElement }} className="App">
//                  <Background>
//                     <video muted loop={true} autoPlay={true} style={{ height: '100%', width: '100%' }}>
//                         <source src={VideoFile} type="video/mp4" />
//                     </video>
//                     <DisplayOver>
//                         <Container maxWidth="lg" style={{
//                             color: "white",
//                         }}>
//                             <Grid container spacing={0}>
//                                 <Grid
//                                     className={classes.MarginGrid}
//                                     item
//                                     xs={12}
//                                     md={12}
//                                 ></Grid>
//                                 <Grid className={classes.marginAdjust} item xs={12} md={6}>
//                                     <Typography
//                                         className={classes.firstHeading}
//                                         variant="h4"
//                                         style={{
//                                             fontWeight: "bold",
//                                         }}
//                                     >
//                                         Youth Event Organizers
//                                 </Typography>
//                                     <br />
//                                     <br />
//                                     <Typography
//                                         style={{
//                                             color: "white",
//                                             opacity: 0.7,
//                                         }}
//                                     >
//                                         OUR MAIN OFFERING
//                                 </Typography>
//                                     <Grid container spacing={0}>
//                                         <div className={classes.hideMoreInfo}>
//                                             <Grid item md={4}>
//                                                 <li
//                                                     style={{
//                                                         color: "white",
//                                                         listStyle: "none",
//                                                         fontSize: 25,
//                                                         marginTop: 10,
//                                                         lineHeight: "30px",
//                                                     }}
//                                                 >
//                                                     We are proud to introduce world's
//                                                     testest and secure trading method.
//                                                 </li>
//                                             </Grid>
//                                             <Grid item md={2}></Grid>
//                                             <Grid item md={6}>
//                                                 <li
//                                                     style={{
//                                                         color: "white",
//                                                         listStyle: "none",
//                                                         fontSize: 25,
//                                                         marginTop: 10,
//                                                         lineHeight: "30px"
//                                                     }}
//                                                 >
//                                                     We have maintain the quality through
//                                                     AI.
//                                                 </li>
//                                             </Grid>
//                                         </div>
//                                         <Grid className={classes.MarginGrid} item md={12}>
//                                             <Link to='/import-export'>
//                                                 <Button
//                                                     style={{
//                                                         color: "#ff0081",
//                                                         borderColor: "#ff0081",
//                                                         height: 45,
//                                                         width: 180,
//                                                         fontSize: "14px",
//                                                         borderRadius: 0,

//                                                     }}
//                                                     variant="outlined"
//                                                 >
//                                                     EXPLORE
//                                             </Button>
//                                             </Link>
//                                         </Grid>
//                                     </Grid>
//                                 </Grid>
//                                 <Grid item xs={12} md={6}></Grid>
//                                 <Grid item xs={12} md={12}></Grid>
//                             </Grid>
//                         </Container>
//                     </DisplayOver>

//                 </Background>
//                 </div>
//         );
//     }
// }
// export default withStyles(styles)(LandingPage1);

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

// Assets
import mainCover from '../../Assets/Images/operations.jpg';
import us17 from '../../Assets/Images/us12.jpg'


class LandingPageComponent1 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{
                    backgroundImage: `url(${mainCover})`,
                    width: '100%',
                    height: '600px',
                    backgroundSize: '100% 100%',

                }}>


                </div>
                <Container>
                    <Row>
                        <Col md={3} lg={3}>
                        </Col>
                        <Col  lg={6} md={12} style={{ marginTop: '50px', textAlign: 'center' }}>
                            <h4>GIVE YOUR GUESTS A REASON TO STARE</h4>
                            <hr />
                            <p>From lavish weddings set on the bloom-bordered paths of Karachi’s historic venues to elaborate corporate events that nurture company connections,
                                   Youth Event Organizer has a flair for transforming meaningful celebrations into unforgettable experiences.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Container style={{marginTop:'100px', marginBottom:'50px'}} fluid>
                            <Row>
                                <Col sm={12} lg={6}>
                                 <img 
                                  alt='pic'
                                 style={{width: '100%',
                    height: '600px',}} src={us17} />
                                </Col>
                                <Col style={{fontFamily:'TimesNewRoman', marginTop:'10px'}} sm={12} lg={6}>
                                 <h2 style={{textAlign:'center'}}>We are here to deal you with</h2>
                                 <br/>
                                 <br/>
                                 <ul style={{fontSize:'18px'}}>
                                     <li>Full Service Planning or Wedding Design and Coordination.</li>
                                     <br/>
                                     <li>Access to our in-house floral team and décor rental warehouse.</li>
                                     <br/>
                                     <li>Custom-built features such as floral balls, unique backdrops, fabric work and mural paintings.</li>
                                     <br/>
                                     <li>Personalized event design, checklists and templates to keep you organized.</li>
                                     <br/>
                                     <li>Creation of master timeline for smooth scheduling.</li>
                                     <br/>
                                     <li>Budget planning to ensure your money are well-spent.</li>
                                     <br/>
                                     <li>Unlimited communication leading up to your event.</li>
                                     <br/>
                                     <li>And of course, we’ll give your logistics lots of love and you lots of hand-holding.</li>
                                 </ul>
                                </Col>
                            </Row>
                        </Container>

                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default LandingPageComponent1;