import React , {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import {
    Container,
    Grid,
    Typography,
    Button,
    Divider
} from "@material-ui/core";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import { Link } from "react-router-dom";

// Components
import LandingPage1 from '../../Components/LandingPageComponent1/LandingPageComponent1';

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
        return(
            <React.Fragment>
                <Grid>
                <Grid ref={this.block1Ref} item xs={12} md={12}>
                        <LandingPage1 getBlock1Height={this.getBlock1Height} />
                    </Grid>
                    </Grid>
            </React.Fragment>
        )
    }
}
export default LandingPage;