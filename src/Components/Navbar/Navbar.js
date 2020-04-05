import React , {Component}   from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container } from '@material-ui/core';

// Logo
import Logo from '../../Assets/Images/logo.jpg';
import { Link } from "react-router-dom";





const useStyles = makeStyles(theme => ({
    navs: {
        backgroundColor: 'white',
        color: '#AD365C',
        
        '&:hover': {
            
            borderBottom:'1px solid #AD365C ',
            color:'white !important'
            
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
      [theme.breakpoints.up("md")]: {
          display: "flex"
      }
  },
  mobileMenu: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
          display: "none"
      }
  }
}));



export default function ButtonAppBar(props){
  const classes = useStyles();
return(
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
                <Container maxWidth="lg">
                <Typography variant="h6" className={classes.title}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <img
                                    src={Logo}
                                    style={{
                                        width: "150px",
                                        height: "80px",
                                        position: "absolute",
                                        bottom: " 0px",
                                        top: "3px"
                                    }}
                                />
                            </Link>
                        </Typography>
                        <div className={classes.navigationButtons}>
                        <Link className={classes.navs} to='/' style={{ textDecoration: "none" }}>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#AD365C" }}
                                    className={classes.categoriesButton}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Events' style={{ textDecoration: "none" }}>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#AD365C" }}
                                    className={classes.categoriesButton}
                                >
                                    Events
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Courses' style={{ textDecoration: "none" }}>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Courses
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Packages' style={{ textDecoration: "none" }}>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Packages
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/About' style={{ textDecoration: "none" }}>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    About
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Contact' style={{ textDecoration: "none" }}>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Contact Us
                                </Button>
                            </Link>
                            

                            
                        </div>
                </Container>
              </Toolbar>
            </AppBar>
   </div>
)
}