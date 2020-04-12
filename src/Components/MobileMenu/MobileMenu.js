import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
                <IconButton onClick={toggleDrawer('right', false)} style={{ marginTop: 30, backgroundColor: '#061838', float: 'right', marginRight: 30 }}>
                    <CloseIcon style={{ color: 'white' }} />
                </IconButton>
                <div style={{ height: 100 }} />
                <Container maxWidth="lg">
                    <img
                        style={{
                            maxHeight: "100%",
                            maxWidth: "80%",
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
                                        color: "#3F3F3F",
                                        fontSize: "23px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 900,
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
                                        color: "#3F3F3F",
                                        fontSize: "23px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 900,
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
                                        color: "#3F3F3F",
                                        fontSize: "23px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 900,
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
                                        color: "#3F3F3F",
                                        fontSize: "23px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 900,
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
                                        color: "#3F3F3F",
                                        fontSize: "23px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 900,
                                        marginBottom: "15px",
                                        cursor: "pointer",
                                        width: 130
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    About Us
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Contact'>
                                <Typography
                                    style={{
                                        color: "#686868",
                                        fontSize: "18px",
                                        fontFamily:
                                            "myriad-pro, Arial",
                                        fontWeight: 400,
                                        marginBottom: "8px",
                                        cursor: "pointer"
                                    }}
                                    onClick={toggleDrawer('right', false)}
                                >
                                    Contact Us
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
            <IconButton onClick={toggleDrawer('right', true)} style={{ marginTop: 30, backgroundColor: '#061838' }}>
                <MenuIcon style={{ color: 'white' }} />
            </IconButton>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}

export default withRouter(TemporaryDrawer)