import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { IconButton, Container, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link, withRouter } from "react-router-dom";

// Assets
import Logo from '../../Assets/Images/logo.jpg'


const useStyles = makeStyles({
    list: {
        width: '100vw',
    },
});

function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
        >
            <List>
                <IconButton onClick={toggleDrawer('right', false)} style={{ marginTop: 20, backgroundColor: '#AD365C', float: 'right', marginRight: 30 }}>
                    <CloseIcon style={{ color: 'white', fontSize:'40px' }} />
                </IconButton>
                <div style={{ height: 100 }} />
                <Container maxWidth="lg">
                    <img
                        alt='pic'
                        style={{
                            maxHeight: "100%",
                            maxWidth: "40%",
                            height: "auto",
                            width: "auto"
                        }}
                        src={Logo}
                    />
                    <div style={{ height: 30 }} />
                    <ul style={{ listStyle: "none" }}>
                        <li>
                            <Link to='/'>
                                <Typography
                                    style={{
                                        color: "#AD365C",
                                        fontSize: "40px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 700,
                                        marginBottom: "15px",
                                        cursor: "pointer"
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    Home
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Events'>
                                <Typography
                                    style={{
                                        color: "#AD365C",
                                        fontSize: "40px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 700,
                                        marginBottom: "15px",
                                        cursor: "pointer"
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    Events
                            </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Courses'>
                                <Typography
                                    style={{
                                        color: "#AD365C",
                                        fontSize: "40px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 700,
                                        marginBottom: "15px",
                                        cursor: "pointer"
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    Courses
                            </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Packages'>
                                <Typography
                                    style={{
                                        color: "#AD365C",
                                        fontSize: "40px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 700,
                                        marginBottom: "15px",
                                        cursor: "pointer",
                                        width: 130
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    Packages
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to='/About'>
                                <Typography
                                    style={{
                                        color: "#AD365C",
                                        fontSize: "40px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 600,
                                        marginBottom: "15px",
                                        cursor: "pointer",
                                        width: 130
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    About
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to='/breakup-package'>
                                <Typography
                                    style={{
                                        color: "#AD365C",
                                        fontSize: "40px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 700,
                                        marginBottom: "8px",
                                        cursor: "pointer"
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    Create Package
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to='/signin'>
                                <Typography
                                    style={{
                                        color: "#AD365C",
                                        fontSize: "40px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 700,
                                        marginBottom: "8px",
                                        cursor: "pointer"
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    Login
                                </Typography>
                            </Link>
                        </li>
                    </ul>
                </Container>
            </List>
        </div>
    );

    return (
        <div>
             <img
                        alt='pic'
                        style={{
                            width: "120px",
                            height: "80px",
                            position: "absolute",
                            bottom: " 0px",
                            top: "3px"
                        }}
                        src={Logo}
                    />
            <IconButton onClick={toggleDrawer('right', true)} style={{ marginTop: 20, backgroundColor: '#AD365C', marginLeft: 850 }}>
                <MenuIcon style={{ color: 'white', fontSize:'40px' }} />
            </IconButton>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}

export default withRouter(TemporaryDrawer)