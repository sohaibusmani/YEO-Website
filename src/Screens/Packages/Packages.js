import React , {Component} from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, CssBaseline, Drawer, List, ListItem, ListItemIcon, Typography, ListSubheader, ListItemText, IconButton, Divider, Badge, Container, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';

//Router
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

// Components
import Navigations from './Components/Navigation';
import Weddingpackages from './Components/WeddingPackages';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
});


class Packages extends Component {
    state={
        open:true,
    }
    render(){
        const { classes } = this.props;
        const { open } = this.state;
        return(
            <React.Fragment>
               <div className={classes.root}>
                            <CssBaseline />
                            <AppBar position="absolute" color="default" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                <Toolbar className={classes.toolbar}>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={() => { this.setState({ open: true }) }}
                                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography
                                        variant="h5"
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center,',
                                            display: 'inline-flex',
                                            width: '100%'
                                        }}>
                                        Packages
                                        <sub style={{ marginLeft: 5, bottom: '-1.2em', verticalAlign: 'baseline', position: 'relative', lineHeight: 0, fontSize: '75%', color: '#0095FF' }}> Youth Event Organizers</sub>
                                    </Typography>
                                    <List>
                                        <ListItem button onClick={this.switchUser}>
                                            <ListItemIcon style={{ minWidth: 35 }}>
                                                <PeopleIcon style={{ color: 'black', fontSize: 27 }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography
                                                style={{
                                                    color: '#0095FF',
                                                    marginTop: 2,
                                                    fontWeight: 'bold',
                                                    width: 95
                                                }}>
                                                Switch User
                                        </Typography>} />
                                        </ListItem>
                                    </List>
                                </Toolbar>
                            </AppBar>
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                }}
                                open={open}
                            >
                                <div className={classes.toolbarIcon}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography
                                            style={{
                                                color: '#0095FF',
                                                marginTop: 2,
                                                fontWeight: 'bold',
                                            }}>
                                            
                                        </Typography>} />
                                    </ListItem>
                                    <IconButton onClick={() => { this.setState({ open: false }) }}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <Navigations test="test" />
                            </Drawer>
                            </div>
            </React.Fragment>
        )
    }
} 
export default withRouter(withStyles(styles)(Packages));