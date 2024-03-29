import React , {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import {
    Container,
    Grid,
    Typography,
} from "@material-ui/core";

// CSS
import '../../App.css';

import Navbar from '../../Components/Navbar/Navbar'




// Components
import LandingPage1 from '../../Components/LandingPageComponent1/LandingPageComponent1';
import LandingPage2 from '../../Components/LandingPageComponent2/LandingPageComponent2';
import LandingPage3 from '../../Components/LandingPageComponent3/LandingPageComponent3';
import LandingPage4 from '../../Components/LandingPageComponent4/LandingPageComponent4';
import Footer from '../../Components/Footer/Footer'


const styles = theme => ({
    firstHeading: {
        fontSize: 23,
        [theme.breakpoints.up("lg")]: {
            fontSize: 50,
        }
    },
    firstHeadingMain: {
        fontSize: 23,
        width: '80%',
        [theme.breakpoints.up("lg")]: {
            fontSize: 50,
            width: '45%',
            marginLeft: 50,
        },
    },
    marginAdjust: {
        [theme.breakpoints.up("lg")]: {
            marginLeft: 300
        }
    },
    heightAdjust: {
        backgroundColor: '#963596',
        height: 0,
        [theme.breakpoints.up("lg")]: {
            height: 30,
        }
    },
    letsGrowHeading: {
        fontSize: 23,
        [theme.breakpoints.up("lg")]: {
            fontSize: 52
        }
    },
    letsGrowSubHeading: {
        fontSize: "23px",
        width: "100%",
        [theme.breakpoints.up("lg")]: {
            fontSize: "40px",
            width: "60%"
        }
    },
    aboutUsStats: {
        fontSize: "30px",
        [theme.breakpoints.up("lg")]: {
            fontSize: "60px"
        }
    },
    exploreCarearButton: {
        marginTop: 20,
        backgroundColor: "black",
        color: "white",
        height: 42,
        width: 237,
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: 0,
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            boxShadow: "none"
        }
    },
    helpTradeHeading: {
        fontSize: "32px",
        lineHeight: "35px",
        [theme.breakpoints.up("lg")]: {
            fontSize: "64px",
            lineHeight: "73px"
        }
    },
    countryBox: {
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "trasnparent",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#cccccc",
            transition: "all 0.7s"
        }
    },
    letsGrowBox1: {
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.up("lg")]: {
            marginLeft: -38,
            marginTop: 0,
            marginBottom: 0,
        }
    },
    letsGrowBox2: {
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.up("lg")]: {
            marginLeft: -19,
            marginTop: 0,
            marginBottom: 0,
        }
    },
    placeHolderLetsGrow: {
        height: 10,
        [theme.breakpoints.up("lg")]: {
            height: 0,
        }
    },
    leftMenu: {
        display: 'none',
        [theme.breakpoints.up("lg")]: {
            display: 'flex',
        }
    },
    WhatPeopleSayCard: {
        marginTop: 10,
        [theme.breakpoints.up("lg")]: {
            position: "absolute",
            bottom: "-30px",
            right: "80px",
            fontSize: "25px",
            color: "white",
            fontWeight: "bold",
        }
    },
    scrollUpButton: {
        // zIndex: 9999,
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    }
});

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.block1Ref = React.createRef()
    }

    state={
        block1Height:0,
    }

    getBlock1Height = height => {
        this.setState({
            block1Height: height
        })
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Grid container>
                <Grid ref={this.block1Ref} item xs={12} lg={12}>
                        <LandingPage1 getBlock1Height={this.getBlock1Height} />
                    </Grid>
                    </Grid>
                    <Grid container>
                <Grid  item xs={12} lg={12}>
                <div className="testimonial-banner">
                        <div className="overlay">
                            <LandingPage2 />
                        </div>
                        </div>
                    </Grid>
                    </Grid>
                    <br/>
                    <Container maxWidth="lg"
                        style={{ color: "black", marginTop: 80 }}>
                          <div
                            style={{
                                justifyContent: "center",
                                alignItems: "center,",
                                display: "inline-flex",
                                width: "100%"
                            }}
                        >
                            <Typography
                                className={classes.letsGrowSubHeading}
                                style={{ textAlign: "center" }}
                                color="textSecondary"
                            >
                                A global leader in Event Planning
                                services and consulting
                            </Typography>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={3}>
                                <div
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center,",
                                        display: "inline-flex",
                                        width: "100%",
                                        marginTop: 50
                                    }}
                                >
                                    <Typography
                                        className={classes.aboutUsStats}
                                        style={{
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                    >
                                        50
                                        <Typography
                                            style={{ fontSize: "15px" }}
                                        >
                                            Countries where we have happy
                                            customers
                                        </Typography>
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center,",
                                        display: "inline-flex",
                                        width: "100%",
                                        marginTop: 50
                                    }}
                                >
                                    <Typography
                                        className={classes.aboutUsStats}
                                        style={{
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                    >
                                        $1,000,000
                                        <Typography
                                            style={{ fontSize: "15px" }}
                                        >
                                            Estimated Import/Export market
                                        </Typography>
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center,",
                                        display: "inline-flex",
                                        width: "100%",
                                        marginTop: 50
                                    }}
                                >
                                    <Typography
                                        className={classes.aboutUsStats}
                                        style={{
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                    >
                                        120,000+
                                        <Typography
                                            style={{ fontSize: "15px" }}
                                        >
                                            Connected Enterpreneur with us
                                        </Typography>
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center,",
                                        display: "inline-flex",
                                        width: "100%",
                                        marginTop: 50
                                    }}
                                >
                                    <Typography
                                        className={classes.aboutUsStats}
                                        style={{
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                    >
                                        100,000
                                        <Typography
                                            style={{ fontSize: "15px" }}
                                        >
                                            Students connected with us
                                        </Typography>
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                    <Grid container>
                <Grid  item xs={12} lg={12}>
                        <LandingPage3  />
                    </Grid>
                    </Grid>
                    <Grid container>
                    <Grid  item xs={12} lg={12}>
                    <div style={{ height: 50 }} />
                    <h1 style={{textAlign:'center', marginBottom:'100px'}}>What our happy clients say</h1>
                    <div className="testimonial-banner">
                        <div className="overlay">
                            <LandingPage4 />
                        </div>
                    </div>
                    </Grid>
                    </Grid>
                    <Grid container>
                
                    <Footer />   
                    
                    </Grid>
                    <br/>
                    
                   
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(LandingPage);