import React , {Component} from 'react';
import {Container, Grid, Button, withStyles} from '@material-ui/core'; 

import pcover from '../../Assets/Images/us14.jpg';

const styles = theme => ({
    card: {
        backgroundColor: '#f5f5f5',
        borderColor: '#AD365C',
        padding: 10,
        [theme.breakpoints.up('sm')]: {
            padding: '20px 50px 20px',
        },
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)',
    },
    button: {
        backgroundColor: '#AD365C',
        color: 'white',
        borderColor: '#AD365C !important',
        '&:hover': {
            backgroundColor: '#AD365C',
            color:'white'
             },
        marginTop:'60px',
        marginLeft:'50px'     
    }
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
                <div style={{height:'50px'}} />
                <Container maxWidth='lg'>
                    <div >
                   
                     <h3>Create Your Own Package</h3>
                     <Grid md={9}>
                     <hr style={{border:'1px solid #AD365C'}}/>
                     <div className={classes.card}>
                         <Grid container spacing={2}>
                         <Grid  item xs={12} md={3}>
                            <img
                             alt='pic'
                             style={{
                                 width: '100%',
                                 height: '150px'
                             }}
                             src={pcover}
                             />
                         </Grid>
                         <Grid item xs={12} md={6}>
                            <h5>Balloons</h5>
                            <h6>Actual price : Rs 50</h6>
                            <p>Balloons per packet price is rs 50 without our services</p>
                         </Grid>
                         <Grid item xs={12} md={3}>
                         <Button  className={classes.button} block>Add to cart</Button>
                         </Grid>
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