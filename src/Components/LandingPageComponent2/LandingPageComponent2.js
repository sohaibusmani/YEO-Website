import React from 'react';
import './LandingPageComponent2.css';
import { withStyles } from "@material-ui/core/styles";
// import {
//     Container,
//     Grid,
//     Typography,
//     Button,
//     Divider
// } from "@material-ui/core";
import {Container, Col,Row} from 'react-bootstrap';


const styles = theme => ({
    firstHeading: {
        fontSize: 23,
        [theme.breakpoints.up("md")]: {
            fontSize: 50,
        }
    },
    firstHeadingMain: {
        fontSize: 23,
        width: '80%',
        [theme.breakpoints.up("md")]: {
            fontSize: 50,
            width: '45%',
            marginLeft: 50,
        },
    },
    marginAdjust: {
        [theme.breakpoints.up("md")]: {
            marginLeft: 300
        }
    },
    heightAdjust: {
        backgroundColor: '#963596',
        height: 0,
        [theme.breakpoints.up("md")]: {
            height: 30,
        }
    },
    letsGrowHeading: {
        fontSize: 23,
        [theme.breakpoints.up("md")]: {
            fontSize: 52
        }
    },
    letsGrowSubHeading: {
        fontSize: "23px",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            fontSize: "40px",
            width: "60%"
        }
    },
    aboutUsStats: {
        fontSize: "30px",
        [theme.breakpoints.up("md")]: {
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
        [theme.breakpoints.up("md")]: {
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
        [theme.breakpoints.up("md")]: {
            marginLeft: -38,
            marginTop: 0,
            marginBottom: 0,
        }
    },
    letsGrowBox2: {
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.up("md")]: {
            marginLeft: -19,
            marginTop: 0,
            marginBottom: 0,
        }
    },
    placeHolderLetsGrow: {
        height: 10,
        [theme.breakpoints.up("md")]: {
            height: 0,
        }
    },
    leftMenu: {
        display: 'none',
        [theme.breakpoints.up("md")]: {
            display: 'flex',
        }
    },
    WhatPeopleSayCard: {
        marginTop: 10,
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            bottom: "-30px",
            right: "80px",
            fontSize: "25px",
            color: "white",
            fontWeight: "bold",
        }
    }
});




//Casecading Style Sheets
// import './App.css';

class LandingPageComponent2 extends React.Component {

    render() {
        const { classes } = this.props;
        return (

            <React.Fragment>
                <br/>
                <br/>
                <div id="header">
        <div class="overlay">
            <div class="container">
                <div class="row scroll-me">
                    <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 text-center ">
                       
                    {/* <Container maxWidth="lg"
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
                            <Grid item xs={12} md={3}>
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
                            <Grid item xs={12} md={3}>
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
                            <Grid item xs={12} md={3}>
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
                            <Grid item xs={12} md={3}>
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
                    </Container> */}
                    <Container maxWidth='lg'
                    style={{ color: "black", marginTop: 80 }}>
                        <div
                        style={{
                            justifyContent: "center",
                            alignItems: "center,",
                            display: "inline-flex",
                            width: "100%",
                            marginLeft:'250px',
                            color:'white',
                            fontSize:'70px'
                        }}>
                            Youth
                        </div>
                        <p 
                         style={{
                            justifyContent: "center",
                            alignItems: "center,",
                            display: "inline-flex",
                            width: "100%",
                            marginLeft:'250px',
                            marginTop:'50px',
                            color:'white',
                            fontSize:'30px'
                        }}>
                            We are Working With The Youth Here on field
                        </p>
                       
                    </Container>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(LandingPageComponent2);