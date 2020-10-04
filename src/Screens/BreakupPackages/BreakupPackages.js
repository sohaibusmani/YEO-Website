import React, { Component } from 'react';
import { Container, Grid, Button, withStyles,createMuiTheme, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import pcover from '../../Assets/Images/us14.jpg';
import axios from 'axios';
import Signin from '../../Components/Login/Signin'

// connection
import url from '../../config/api';

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
            // padding: '20px 50px 20px',
        },
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)',

    },
    button: {
        backgroundColor: '#AD365C',
        color: 'white',
        borderColor: '#AD365C !important',
        '&:hover': {
            backgroundColor: '#AD365C',
            color: 'white'
        },
        marginTop: '60px',
        marginLeft: '50px'
    },
    deleteIcon: {
        float: 'right',
        fontSize: 20,
        cursor: 'pointer',
        "&:hover": { color: 'red' }
    },
    mobScreenFont: {
        [customeTheme.breakpoints.down("md")]: {
            fontSize: "22px"
        }
      }
})

class BreakupPackages extends Component {
    state = {
        allProducts: [],
        cart: [],
    }

    componentDidMount() {

        this.getAllProducts();
        this.getCart();
        window.scrollTo(0,0);
    }

    displaySignin = () => {
        return(
        <Signin/>
        )
    }
    
    getCart = () => {
        const { userId } = this.props;
        console.log('getCart')
        axios({
            url: `${url}/product/get-cart`,
            method: 'POST',
            data: {
                userId
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    cart: res.data.cart,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getAllProducts = () => {
        axios({
            url: `${url}/product/get-all-products`,
            method: 'GET',
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    allProducts: response.data,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    addToCart = itemId => {
        const { userId } = this.props;
        // const { quantity } = this.state;

        axios({
            url: `${url}/product/add-to-cart`,
            method: 'POST',
            data: {
                userId,
                prodId: itemId,
                quantity: 1
            }
        })
            .then(res => {
                console.log(res.data.cart);
                this.setState({
                    cart: res.data.cart,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    deleteFromCart = itemId => {
        const { userId } = this.props;
        // const { quantity } = this.state;

        axios({
            url: `${url}/product/remove-from-cart`,
            method: 'POST',
            data: {
                userId,
                prodId: itemId,
            }
        })
            .then(res => {
                // console.log(res.data.cart);
                this.setState({
                    cart: res.data.cart,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { classes } = this.props;
        const { allProducts, cart } = this.state;
        console.log(this.props.user);
        return (
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
                <div style={{ height: '50px' }} />
                <Container maxWidth='lg'>
                    <div >
                        <Grid container spacing={2}>
                            <Grid item xs={8} lg={8}>
                                <h3>Make Your Package</h3>
                                <hr style={{ border: '1px solid #AD365C' }} />
                                {allProducts.length > 0 &&
                                    allProducts.map((val, index) => {
                                        return (
                                            <div key={index} className={classes.card} style={{ marginBottom: '10px' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={8} md={3}>
                                                        <img
                                                            alt='pic'
                                                            style={{
                                                                width: '100%',
                                                                height: '150px'
                                                            }}
                                                            src={val.pictures[0]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} md={6}>
                                                        <h5 className={classes.mobScreenFont}>{val.title}</h5>
                                                        <h6 className={classes.mobScreenFont}>Actual price : {val.price}</h6>
                                                        <p className={classes.mobScreenFont}>{val.description}</p>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Button
                                                            className={classes.button}
                                                            block
                                                            onClick={this.props.user ? () => { this.addToCart(val._id) } : () => { this.props.history.push('/signin') }}
                                                        >Add to cart</Button>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        )
                                    })
                                }

                            </Grid>

                            <Grid item xs={4} lg={4}  >
                                <div style={{width:'100%'}}>
                                <h3>Your WishList</h3>
                                <hr style={{ border: '1px solid #AD365C' }} />
                                <div className={classes.ordersCard}>
                                    {cart.length > 0 ?
                                        cart.map((item, index) => {
                                            console.log(item);
                                            return (
                                                <List key={index}>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <img
                                                                alt='pic'
                                                                style={{
                                                                    width: '50px',
                                                                    height: '40px'
                                                                }}
                                                                src={item.productDetails.pictures[0]}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<span>{item.productDetails.title}</span>}
                                                            secondary={item.quantity}
                                                        />
                                                        <DeleteIcon
                                                            className={classes.deleteIcon}
                                                            onClick={() => { this.deleteFromCart(item.productDetails._id) }}
                                                        />
                                                    </ListItem>
                                                </List>
                                            )
                                        })
                                        :
                                        <h4>No Product Selected</h4>
                                    }
                                </div>
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