import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { withStyles,createMuiTheme } from "@material-ui/core/styles";
//React Router
import { withRouter } from 'react-router-dom';
//Casecading Style Sheets
import '../../App.css';

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

  const styles = {
    mobScreenFont: {
      [customeTheme.breakpoints.down("md")]: {
          fontSize: "40px"
      }
    }
}


class LandingPageComponent4 extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Container maxWidth="md">
                <div style={{ height: 120 }} />
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4}></Grid>
                <Grid item lg={6} md={6}>
                        <div className="client-info" style={{ padding: 10 }}>
                            <Grid container spacing={1}>
                               
                                <Grid item lg={10} md={10} sm={12}>
                                    <Typography variant="h4"
                                        style={{marginBottom:'40px',
                                        justifyContent:'center',
                                        alignItems:'center',
                                         color: 'white',
                                          marginTop: 18,
                                           fontWeight: 'bolder',
                                            fontSize: '5em',
                                             textAlign:'center',
                                              fontFamily: '"Times New Roman", Times, serif', }} >
                                        Operations
                                    </Typography>
                                    
                                </Grid>
                            </Grid>
                            <div className={classes.mobScreenFont} style={{ height: 10 }} />
                            <div>
                                <Typography  variant="p" style={{marginTop:'80px',
                                 color: '#f0f0f0f',
                                  fontWeight: 'normal',
                                   fontSize: '1em', 
                                   opacity: '0.9',
                                   justifyContent:'center',
                                   alignItems:'center' }} >
                                Our various art work/operations like FLORISTS The art of flowers, CRAFTERS The art of crafting clever ideas , DECORATION the art of assembling scattering things in an unbelievable way, SOUND SYSTEM The art of taking yourself in an accept able place, All these Beautiful things that made your event outlast, are done by our Passionate, Talented, Highly Motivated Youngster who are willing to explore new experience and make your event awesome/ a dream come true.
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    </Grid>
                
            </Container>
        )
    }
}

export default withStyles(styles)(LandingPageComponent4);