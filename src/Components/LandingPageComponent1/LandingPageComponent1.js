import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { withStyles } from "@material-ui/core/styles";
import {
    Container,
    Grid,
    Paper,
    Typography,
    Button,
    Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";

// Assets

import VideoFile from '../../Assets/Videos/landingpage3.mp4';


const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
});

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

const styles = theme => ({
    firstHeading: {
        fontSize: 23,
        [theme.breakpoints.up("md")]: {
            fontSize: 50,
        }
    },
    MarginGrid: {
        marginTop: "0%",
        [theme.breakpoints.up("md")]: {
            marginTop: "15%"
        },
    },
    hideMoreInfo: {
        display: 'none',
        [theme.breakpoints.up("md")]: {
            display: 'flex'
        },
    }
});

class LandingPage1 extends React.Component{
    state = {
        height: 0
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ height });
        this.props.getBlock1Height(height);
    }
    render(){
        const { classes } = this.props;
        return(
            <div ref={(divElement) => { this.divElement = divElement }} className="App">
                 <Background>
                    <video muted loop={true} autoPlay={true} style={{ height: '100%', width: '100%' }}>
                        <source src={VideoFile} type="video/mp4" />
                    </video>
                    <DisplayOver>
                        <Container maxWidth="lg" style={{
                            color: "white",
                        }}>
                            <Grid container spacing={0}>
                                <Grid
                                    className={classes.MarginGrid}
                                    item
                                    xs={12}
                                    md={12}
                                ></Grid>
                                <Grid className={classes.marginAdjust} item xs={12} md={6}>
                                    <Typography
                                        className={classes.firstHeading}
                                        variant="h4"
                                        style={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Youth Event Organizers
                                </Typography>
                                    <br />
                                    <br />
                                    <Typography
                                        style={{
                                            color: "white",
                                            opacity: 0.7,
                                        }}
                                    >
                                        OUR MAIN OFFERING
                                </Typography>
                                    <Grid container spacing={0}>
                                        <div className={classes.hideMoreInfo}>
                                            <Grid item md={4}>
                                                <li
                                                    style={{
                                                        color: "white",
                                                        listStyle: "none",
                                                        fontSize: 25,
                                                        marginTop: 10,
                                                        lineHeight: "30px",
                                                    }}
                                                >
                                                    We are proud to introduce world's
                                                    testest and secure trading method.
                                                </li>
                                            </Grid>
                                            <Grid item md={2}></Grid>
                                            <Grid item md={6}>
                                                <li
                                                    style={{
                                                        color: "white",
                                                        listStyle: "none",
                                                        fontSize: 25,
                                                        marginTop: 10,
                                                        lineHeight: "30px"
                                                    }}
                                                >
                                                    We have maintain the quality through
                                                    AI.
                                                </li>
                                            </Grid>
                                        </div>
                                        <Grid className={classes.MarginGrid} item md={12}>
                                            <Link to='/import-export'>
                                                <Button
                                                    style={{
                                                        color: "white",
                                                        borderColor: "white",
                                                        height: 45,
                                                        width: 180,
                                                        fontSize: "14px",
                                                        borderRadius: 0
                                                    }}
                                                    variant="outlined"
                                                >
                                                    EXPLORE
                                            </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}></Grid>
                                <Grid item xs={12} md={12}></Grid>
                            </Grid>
                        </Container>
                    </DisplayOver>

                </Background>
                </div>
        );
    }
}
export default withStyles(styles)(LandingPage1);