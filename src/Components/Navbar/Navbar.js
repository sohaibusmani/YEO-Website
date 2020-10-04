import React from 'react';
import { makeStyles,createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


// Logo
import Logo from '../../Assets/Images/logo.jpg';
import { Link } from "react-router-dom";

// Components
import MobileMenu from '../MobileMenu/MobileMenu';


const customeTheme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1000,
        xl: 1920,
      },
    },
  })


const useStyles = makeStyles(theme => ({
    navs: {
        backgroundColor: 'white',
        color: '#AD365C',
        textDecoration: 'none',
        '&:hover': {

            borderBottom: '1px solid #AD365C ',
            color: 'white !important'

        },
    },
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    searchButton: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "block",
            marginRight: theme.spacing(15),
            marginTop: 30
        }
    },
    title: {
        flexGrow: 1
    },
    navigationButtons: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            marginLeft: 300,
            marginTop: 40,
            display: "flex",

        },

    },
    desktopMenu: {
        display: "none",
        [customeTheme.breakpoints.up("lg")]: {
            display: "block"
        }
    },
    mobileMenu: {
        display: "block",
        [customeTheme.breakpoints.up("lg")]: {
            display: "none"
        }
    },
    button: {
        backgroundColor: 'white',
        color: '#AD365C',
        textDecoration: 'none',
        borderColor: '#AD365C !important',
        '&:hover': {
            backgroundColor: '#AD365C',
            borderColor: 'white',
            color: 'white'
        },
        marginLeft: 'auto'

    }
}));



export default function ButtonAppBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar
                style={{
                    height: 96,
                    boxShadow: "none",
                    backgroundColor: "white"
                }}
                position='relative'
            >
                <Toolbar>
                    <div className={classes.desktopMenu}>
                        <Container maxWidth="lg">
                            <Typography variant="h6" className={classes.title}>
                                {/* <Link to="/"> */}
                                <img
                                    alt='pic'
                                    src={Logo}
                                    style={{
                                        width: "120px",
                                        height: "80px",
                                        position: "absolute",
                                        bottom: " 0px",
                                        top: "3px"
                                    }}
                                    onClick={() => props.history.push('/')}
                                />
                                {/* </Link> */}
                            </Typography>
                            <div className={classes.navigationButtons}>
                                <Link className={classes.navs} to='/'>
                                    <Button
                                        variant="text"
                                        style={{ margin: 5, color: "#AD365C" }}

                                    >
                                        Home
                                </Button>
                                </Link>
                                <Link className={classes.navs} to='/Events'>
                                    <Button
                                        variant="text"
                                        style={{ margin: 5, color: "#AD365C" }}

                                    >
                                        Events
                                </Button>
                                </Link>
                                <Link className={classes.navs} to='/Courses'>
                                    <Button
                                        variant="text"
                                        style={{ margin: 5, color: "#A20737" }}

                                    >
                                        Courses
                                </Button>
                                </Link>
                                <Link className={classes.navs} to='/Packages'>
                                    <Button
                                        variant="text"
                                        style={{ margin: 5, color: "#A20737" }}

                                    >
                                        Packages
                                </Button>
                                </Link>
                                <Link className={classes.navs} to='/About'>
                                    <Button
                                        variant="text"
                                        style={{ margin: 5, color: "#A20737" }}
                                    >
                                        About
                                </Button>
                                </Link>
                                {/* <Link className={classes.navs} to='/Contact'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Contact Us
                                </Button>
                            </Link> */}
                                <Link className={classes.navs} to='/breakup-package'>
                                    <Button
                                        variant="text"
                                        style={{ margin: 5, color: "#A20737" }}

                                    >
                                        Create package
                                </Button>
                                </Link>
                                {!props.user &&
                                    <Button
                                        className={classes.button}
                                        onClick={() => { props.history.push('/signin') }}
                                        block>
                                        <AccountCircleIcon />
                                Login
                            </Button>
                                }
                            </div>
                        </Container>
                    </div>
                    <div className={classes.mobileMenu}>
                        <MobileMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}