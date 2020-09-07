import React , {Component} from 'react';
import {Container, Grid, withStyles} from '@material-ui/core'; 

import pcover from '../../Assets/Images/us14.jpg';

const styles = theme => ({
    card: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        [theme.breakpoints.up('sm')]: {
            padding: '20px 50px 20px',
        },
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)',
    },
})

class BreakupPackages extends Component {
    render(){
        const {classes} = this.props;
        return(
            <React.Fragment>
                <Container>
                    <div style={{
                        backgroundImage: `url(${pcover})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',

                    }}>
                             </div>
                </Container>
                <Container maxWidth='lg'>
                    <div className={classes.card}>
                   <Grid md={8}>
                     <h3>Create Your Own Package</h3>
                     <hr/>
                     <div>
                         <Grid item xs={12} md={3}>
                            <img
                             alt='pic'
                             style={{
                                 width: '100%',
                                 height: '150px'
                             }}
                             src={pcover}
                             />
                         </Grid>
                     </div>
                   </Grid>
                   </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(BreakupPackages);