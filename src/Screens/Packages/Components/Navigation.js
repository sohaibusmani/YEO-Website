import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Divider  } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';

//Router
import { withRouter } from "react-router-dom";

const styles = theme => ({

});


class SideNavigations extends Component { 

    render() {
         
        const { history } = this.props;

        return (
            <React.Fragment>
                <List>
                    <ListItem button onClick={()=> {history.push('/')}}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={()=> {history.push('/Packages/WeddingPackages')}}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Analytics" />
                    </ListItem>
                    <ListItem button onClick={()=> {history.push('/teller-panel')}}>
                        <ListItemIcon>
                            <GroupAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Teller Panel" />
                    </ListItem>
                    <ListItem button onClick={()=> {history.push('/inventory/existing-inventory')}}>
                        <ListItemIcon>
                            <LocalHospitalIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inventory" />
                    </ListItem>
                    <ListItem button onClick={()=> {history.push('/reports/monthly')}}>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                    <ListItem button onClick={()=> {history.push('/add-employee')}}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Employee" />
                    </ListItem>
                    <ListItem button onClick={()=> {history.push('/')}}>
                        <ListItemIcon>
                            <EnhancedEncryptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Something" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListSubheader inset>Saved Reports</ListSubheader>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Current month" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="LAst quarter" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Year-end sale" />
                    </ListItem>
                </List>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(SideNavigations));