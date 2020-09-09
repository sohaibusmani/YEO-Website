import React , {Component} from 'react';
import {Container, Grid, Button, withStyles} from '@material-ui/core'; 

import pcover from '../../Assets/Images/us14.jpg';
import axios from 'axios';

// connection
import url from '../../config/api';

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
    ordersCard: {
        backgroundColor: '#f5f5f5',
        borderColor: '#AD365C',
        padding: 10,
        [theme.breakpoints.up('sm')]: {
            padding: '20px 50px 20px',
        },
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)',
        height:'600px'
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
    state = {
        allProducts : []
    }

    componentDidMount(){
        this.getAllProducts();
    }

    getAllProducts = () => {
        axios({
            url:`${url}/product/get-all-products`,
            method:'GET',
        })
        .then(response => {
            console.log(response.data);
            this.setState({
                allProducts : response.data ,
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        const {classes} = this.props;
        const {allProducts} = this.state;
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
                     <Grid container spacing={2}>
                     <Grid item md={8}>
                     <h3>Make Your Package</h3>
                     <hr style={{border:'1px solid #AD365C'}}/>
                     {allProducts.length > 0 && 
                        allProducts.map((val, index) => {
                            return(
                                <div key={index} className={classes.card} style={{marginBottom:'10px'}}>
                         <Grid container spacing={2}>
                         <Grid  item xs={12} sm={8} md={3}>
                            <img
                             alt='pic'
                             style={{
                                 width: '100%',
                                 height: '150px'
                             }}
                             src={pcover}
                             />
                         </Grid>
                         <Grid item xs={12} sm={4} md={6}>
                            <h5>{val.title}</h5>
                            <h6>Actual price : {val.price}</h6>
                            <p>{val.description}</p>
                         </Grid>
                         <Grid item xs={12} md={3}>
                         <Button  className={classes.button} block>Add to cart</Button>
                         </Grid>
                         </Grid>
                     </div>
                            )
                        })
                        }
                     
                   </Grid>
                   
                   <Grid item md={4} >
                   <h3>Your WishList</h3>
                     <hr style={{border:'1px solid #AD365C'}}/>
                     <div className={classes.ordersCard}>

                     </div>
                   </Grid>
                   </Grid>
                   </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(BreakupPackages);