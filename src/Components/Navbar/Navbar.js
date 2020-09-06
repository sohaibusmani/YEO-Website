import React   from 'react';
import { makeStyles } from "@material-ui/core/styles";
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





const useStyles = makeStyles(theme => ({
    navs: {
        backgroundColor: 'white',
        color: '#AD365C',
        textDecoration:'none',
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
  },
  button: {
    backgroundColor: 'white',
    color: '#AD365C',
    textDecoration:'none',
    borderColor: '#AD365C !important',
    '&:hover': {
        backgroundColor: '#AD365C',
        borderColor: 'white',
        color:'white'
      },
      marginLeft:'30%',
      
      
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
                            {/* <Link to="/"> */}
                                <img
                                    alt='pic'
                                    src={Logo}
                                    style={{
                                        width: "150px",
                                        height: "80px",
                                        position: "absolute",
                                        bottom: " 0px",
                                        top: "3px"
                                    }}
                                    onClick={()=>props.history.push('/')}
                                />
                            {/* </Link> */}
                        </Typography>
                        <div className={classes.navigationButtons}>
                        <Link className={classes.navs} to='/'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#AD365C" }}
                                    className={classes.categoriesButton}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Events'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#AD365C" }}
                                    className={classes.categoriesButton}
                                >
                                    Events
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Courses'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Courses
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Packages'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Packages
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/About'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    About
                                </Button>
                            </Link>
                            <Link className={classes.navs} to='/Contact'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Contact Us
                                </Button>
                            </Link>
                            {/* <Link className={classes.navs} to='/breakup-package'>
                                <Button
                                    variant="text"
                                    style={{ margin: 5, color: "#A20737" }}
                                    className={classes.categoriesButton}
                                >
                                    Make your own package
                                </Button>
                            </Link> */}
                            {!props.isUserLoggedIn &&
                            <Button
                             className={classes.button}
                             onClick={()=>{props.history.push('/signin')}}
                             block>
                                <AccountCircleIcon style={{marginRight:'7px'}}/>
                                Login
                            </Button>
                            }
                        </div>
                </Container>
                <div className={classes.mobileMenu}>
                        <MobileMenu />
                    </div>
              </Toolbar>
            </AppBar>
   </div>
)
}